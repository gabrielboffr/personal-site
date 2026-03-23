import {
  Linkedin as LinkedinIcon,
  GitHub as GitHubIcon,
  Logo as LogoIcon,
} from "@/assets";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, Mail, Send } from "lucide-react";
import { useMemo, useState } from "react";
import type { ComponentType, SubmitEventHandler } from "react";

type ContactIcon = ComponentType<{ size?: number; className?: string }>;

type ContactCard = {
  title: string;
  value: string;
  href: string;
  icon: ContactIcon;
  iconClassName?: string;
};

const contactCards: ContactCard[] = [
  {
    title: "Email",
    value: "gabrielbraupp@gmail.com",
    href: "mailto:gabrielbraupp@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/gabrielboffr",
    href: "https://linkedin.com/in/gabrielboffr",
    icon: LinkedinIcon,
    iconClassName: "h-[21px] w-[21px]",
  },
  {
    title: "GitHub",
    value: "github.com/gabrielboffr",
    href: "https://github.com/gabrielboffr",
    icon: GitHubIcon,
    iconClassName: "h-[21px] w-[21px]",
  },
  {
    title: "Portfólio",
    value: "gabrielboffr.dev",
    href: "https://gabrielboffr.dev",
    icon: LogoIcon,
    iconClassName: "h-[20px] w-[20px]",
  },
];

const contactApiUrl = "/api/contact";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [copiedCard, setCopiedCard] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  const canSubmit = useMemo(() => {
    return !isSending && name.trim() && email.trim() && message.trim();
  }, [isSending, name, email, message]);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setSendStatus("idle");
    setStatusMessage("");
    setIsSending(true);

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Falha ao enviar mensagem.");
      }

      setSendStatus("success");
      setStatusMessage("Mensagem enviada com sucesso. Obrigado pelo contato.");
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");
    } catch (error) {
      setSendStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar agora. Tente novamente em instantes.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleCopy = async (card: ContactCard) => {
    try {
      await navigator.clipboard.writeText(card.value);
      setCopiedCard(card.title);

      window.setTimeout(() => {
        setCopiedCard((current) => (current === card.title ? current : null));
      }, 100);
    } catch {
      setCopiedCard(null);
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden py-16 -mt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <motion.div
          className="absolute -left-20 top-14 h-88 w-88 rounded-full bg-cyan-400/8 blur-[120px]"
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [0.96, 1.05, 0.96] }}
          transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-8 h-88 w-88 rounded-full bg-blue-500/8 blur-[120px]"
          animate={{ opacity: [0.08, 0.18, 0.08], scale: [0.96, 1.06, 0.96] }}
          transition={{
            duration: 10.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-9 px-2 sm:gap-10 sm:px-4 lg:gap-12 lg:px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="bg-clip-text text-4xl font-extrabold leading-tight text-transparent bg-linear-to-r from-blue-700 to-white sm:text-5xl md:text-6xl lg:text-7xl">
            Vamos conversar
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Me chame para bater um papo sobre produto, desenvolvimento ou novas
            oportunidades.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid gap-4"
          >
            {contactCards.map((item, index) => {
              const CardIcon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/12 bg-[#070d18]/80 p-4 shadow-[0_0_30px_rgba(59,130,246,0.09)] sm:p-5 md:p-6"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.08),rgba(7,13,24,0.88)_45%,rgba(34,211,238,0.06))]" />

                  <div className="relative z-10 flex h-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-500/12 text-cyan-200">
                        <CardIcon className={item.iconClassName ?? "h-5 w-5"} />
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                          {item.title}
                        </h3>
                        <p className="mt-2 truncate text-sm font-medium text-zinc-100 sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row flex-wrap items-center justify-start gap-2 sm:flex-col sm:items-end sm:justify-center">
                      {item.href !== "#" && (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-1.5 rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-200 transition hover:bg-blue-500/20 sm:text-xs"
                        >
                          Abrir
                          <ExternalLink size={14} />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => void handleCopy(item)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-200 transition hover:bg-cyan-500/20 sm:text-xs"
                      >
                        {copiedCard === item.title ? (
                          <>
                            Copiado
                            <Check size={14} />
                          </>
                        ) : (
                          <>
                            Copiar
                            <Copy size={14} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#070d18]/85 p-4 shadow-[0_0_34px_rgba(59,130,246,0.1)] sm:p-5 md:rounded-4xl md:p-6"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.09),rgba(8,12,22,0.92)_45%,rgba(34,211,238,0.05))]" />

            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Enviar mensagem
              </h3>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Nome
                </span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition focus:border-cyan-300/45"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Email
                </span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="seuemail@email.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition focus:border-cyan-300/45"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Mensagem
                </span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder="Conte um pouco sobre o motivo do seu contato..."
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-zinc-100 outline-none transition focus:border-cyan-300/45"
                />
              </label>

              <label className="hidden" aria-hidden>
                Company
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="hidden"
                />
              </label>

              {statusMessage && (
                <p
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    sendStatus === "success"
                      ? "border border-emerald-300/30 bg-emerald-500/10 text-emerald-200"
                      : "border border-rose-300/30 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold tracking-wider text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={16} />
                {isSending ? "ENVIANDO..." : "ENVIAR AGORA"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
