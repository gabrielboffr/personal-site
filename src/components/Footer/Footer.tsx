import { GitHub, Gmail, Linkedin, Logo } from "@/assets";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gabrielboffr",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/gabrielboffr",
    icon: GitHub,
  },
  {
    label: "Email",
    href: "mailto:gabrielbraupp@gmail.com",
    icon: Gmail,
  },
  {
    label: "Site",
    href: "https://gabrielboffr.dev",
    icon: Logo,
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-14 -my-4 -mx-8 w-auto overflow-hidden border-y border-white/6 bg-white/1.5 px-4 pb-10 pt-8 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="footer-wave footer-wave-one" />
        <div className="footer-wave footer-wave-two" />
        <div className="footer-wave footer-wave-three" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.05),transparent_32%),radial-gradient(circle_at_60%_100%,rgba(34,211,238,0.035),transparent_35%)] opacity-35" />
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left px-8 lg:px-16">
        <div className="">
          <p className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
            Desenvolvido com muito ❤️ por Gabriel Boff Raupp
          </p>
          <p className="text-sm text-zinc-400 sm:text-base">
            © {currentYear} Gabriel Boff Raupp. Todos os direitos reservados.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-200"
            >
              <link.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
