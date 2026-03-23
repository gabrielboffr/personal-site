import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const requestSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().trim().max(120),
  message: z.string().trim().min(10).max(2500),
  company: z.string().max(0).optional(),
});

const rateMap = new Map<string, { count: number; firstRequestAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type NodeRequest = {
  method?: string;
  headers?: Record<string, string | string[] | undefined>;
  body?: unknown;
  socket?: {
    remoteAddress?: string;
  };
};

type NodeResponse = {
  status: (code: number) => NodeResponse;
  json: (payload: unknown) => void;
};

function getClientIp(req: NodeRequest): string {
  const forwarded = req.headers?.["x-forwarded-for"];

  if (typeof forwarded === "string") {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0]?.split(",")[0]?.trim() ?? "unknown";
  }

  return req.socket?.remoteAddress ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry) {
    rateMap.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  if (now - entry.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
    rateMap.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  rateMap.set(ip, entry);
  return false;
}

export default async function handler(req: NodeRequest, res: NodeResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo nao permitido." });
  }

  if (!resend || !contactToEmail || !contactFromEmail) {
    return res.status(500).json({
      error: "Servidor nao configurado para envio de email.",
    });
  }

  const parsed = requestSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Dados invalidos no formulario." });
  }

  const { name, email, message, company } = parsed.data;

  if (company && company.length > 0) {
    return res.status(200).json({ ok: true });
  }

  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Muitas tentativas. Tente novamente em alguns segundos.",
    });
  }

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      subject: `Novo contato do portfolio - ${name}`,
      replyTo: email,
      text: `Nome: ${name}\nEmail: ${email}\nIP: ${ip}\n\nMensagem:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({
      error: "Falha ao enviar email. Tente novamente em instantes.",
    });
  }
}
