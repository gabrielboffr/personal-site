import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

const Experience = () => {
  const cards = [
    {
      title: "Assistente de T.I",
      description: [
        "Suporte ao Usuário de Informática (interno)",
        "Manuntenção de Sistema de Arquivos Cloud",
        "Criação de Automações",
        "Manutenção de Notebooks e Hardware",
        "Manutenção de Sistemas de Segurança",
        "Manutenção de Redes",
        "Desenvolvimento de Dashboards de PowerBI para Análise de Dados",
      ],
      company: "Cooperliquidos - Três Cachoeiras/RS",
      date: "out/2023 - presente",
    },
    {
      title: "Desenvolvedor Full Stack (foco em Front-end)",
      description: [
        "Desenvolvimento de interfaces modernas e responsivas com base em designs do Figma",
        "Integração entre frontend e backend utilizando API GraphQL",
        "Criação de páginas dinâmicas com CRUD (criar, listar, editar e excluir registros",
        "Colaboração com equipe de produto via Notion para entender requisitos e tarefas",
        "Implementação de componentes reutilizáveis e boas práticas de UX/UI",
        "Manutenção e aprimoramento de aplicações existentes",
        "Trabalho com controle de versão (Git) e revisão de código",
      ],
      company: "Simple One Med - Remoto",
      date: "jun/2025 - nov/2025",
    },
    {
      title: "Técnico de Informática",
      description: [
        "Atendimento ao Cliente Online/Presencial",
        "Suporte ao Usuário de Tecnologia",
        "Gestão de Estoque e Produtos",
        "Manutenção e conserto de celulares, computadores, notebooks e impressoras.",
        "Manutenção e instalação de rede de internet",
        "Instalação de Sistemas de Segurança",
        "Contato com Fornecedores na busca de melhores preços com qualidade",
      ],
      company: "SulTec Informática - Três Cachoeiras/RS",
      date: "dez/2020 - out/2023",
    },
  ];
  return (
    <section
      id="experiencia"
      className="relative mt-16 lg:mt-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <motion.div
          className="absolute -left-32 top-14 h-104 w-104 rounded-full bg-cyan-400/7 blur-[140px]"
          animate={{ opacity: [0.12, 0.2, 0.12], scale: [0.96, 1.05, 0.96] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-10 h-104 w-104 rounded-full bg-blue-500/7 blur-[140px]"
          animate={{ opacity: [0.12, 0.2, 0.12], scale: [0.96, 1.05, 0.96] }}
          transition={{
            duration: 11.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center lg:mb-14 lg:text-right lg:mr-16 lg:w-max lg:mx-auto">
          <h2 className="text-4xl font-extrabold bg-clip-text bg-linear-to-l from-white to-blue-600 text-transparent sm:text-5xl lg:text-7xl leading-20">
            Minha jornada
          </h2>
          <p className="mt-2 lg:mt-4 text-xs sm:text-xs lg:text-lg text-zinc-400">
            Um resumo da minha trajetória e experiências na tecnologia.
          </p>
        </div>

        <div className="relative space-y-16">
          <div className="absolute top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-blue-500/40 via-cyan-400/30 to-transparent lg:left-1/2 lg:block" />

          {cards.map((card, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_0px_minmax(0,1fr)] items-center"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 inset-y-2 z-0 hidden overflow-hidden rounded-3xl border border-blue-400/4 bg-[linear-gradient(90deg,rgba(34,211,238,0.02),rgba(59,130,246,0.012),rgba(59,130,246,0.02))] opacity-28 lg:block"
                >
                  <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-size-[26px_26px]" />

                  <motion.div
                    className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-400/7 blur-3xl"
                    animate={{
                      opacity: [0.04, 0.1, 0.04],
                      scale: [0.97, 1.04, 0.97],
                    }}
                    transition={{
                      duration: 6.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.16,
                    }}
                  />

                  <motion.div
                    className="absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/7 blur-3xl"
                    animate={{
                      opacity: [0.04, 0.1, 0.04],
                      scale: [0.97, 1.04, 0.97],
                    }}
                    transition={{
                      duration: 7.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2 + index * 0.16,
                    }}
                  />
                </div>

                <motion.div
                  aria-hidden
                  className={
                    isLeft
                      ? "pointer-events-none absolute left-12 top-1/2 z-0 hidden h-52 w-52 -translate-y-1/2 rounded-full bg-cyan-400/8 blur-3xl lg:block"
                      : "pointer-events-none absolute right-12 top-1/2 z-0 hidden h-52 w-52 -translate-y-1/2 rounded-full bg-blue-500/8 blur-3xl lg:block"
                  }
                  animate={{
                    opacity: [0.03, 0.08, 0.03],
                    scale: [0.98, 1.12, 0.98],
                  }}
                  transition={{
                    duration: 7.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                />

                <motion.div
                  aria-hidden
                  className={
                    isLeft
                      ? "pointer-events-none absolute left-36 top-1/2 z-0 hidden h-2 w-20 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-md lg:block"
                      : "pointer-events-none absolute right-36 top-1/2 z-0 hidden h-2 w-20 -translate-y-1/2 rounded-full bg-blue-300/12 blur-md lg:block"
                  }
                  animate={{ opacity: [0.04, 0.12, 0.04] }}
                  transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.15 + index * 0.2,
                  }}
                />

                <motion.div
                  aria-hidden
                  className={
                    isLeft
                      ? "pointer-events-none absolute left-28 top-1/2 z-0 hidden h-36 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-cyan-300/18 to-transparent lg:block"
                      : "pointer-events-none absolute right-28 top-1/2 z-0 hidden h-36 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-blue-300/18 to-transparent lg:block"
                  }
                  animate={{
                    opacity: [0.03, 0.1, 0.03],
                    scaleY: [0.9, 1.02, 0.9],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.1 + index * 0.2,
                  }}
                />

                {[18, 44, 72].map((top, particleIndex) => (
                  <motion.span
                    key={`${index}-particle-${particleIndex}`}
                    aria-hidden
                    className={
                      isLeft
                        ? "pointer-events-none absolute left-16 z-0 hidden h-1.5 w-1.5 rounded-full bg-cyan-300/25 shadow-[0_0_8px_rgba(34,211,238,0.25)] lg:block"
                        : "pointer-events-none absolute right-16 z-0 hidden h-1.5 w-1.5 rounded-full bg-blue-300/25 shadow-[0_0_8px_rgba(96,165,250,0.25)] lg:block"
                    }
                    style={{ top: `${top}%` }}
                    animate={{
                      x: isLeft ? [0, 6, 0] : [0, -6, 0],
                      opacity: [0.08, 0.2, 0.08],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 6 + particleIndex * 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.22 + particleIndex * 0.18,
                    }}
                  />
                ))}

                <div
                  className={
                    isLeft
                      ? "relative z-10 lg:col-start-3 lg:row-start-1 lg:pl-6"
                      : "relative z-10 lg:col-start-1 lg:row-start-1 lg:pr-6"
                  }
                >
                  <div
                    className={
                      isLeft
                        ? "absolute -top-4 -left-6 z-30 hidden lg:flex"
                        : "absolute -top-4 -right-6 z-30 hidden lg:flex"
                    }
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-[#07111f] shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                      <BriefcaseBusiness size={26} className="text-blue-400" />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-8 py-8 pt-14 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_25%)]" />

                    <div className="relative z-10">
                      <h3 className="text-2xl lg:text-left lg:text-3xl font-extrabold tracking-tight text-white">
                        {card.title}
                      </h3>

                      <div className="mt-3 flex items-center gap-3 text-blue-400">
                        <Building2 size={18} />
                        <p className="text-lg  lg:text-xl font-semibold">
                          {card.company}
                        </p>
                      </div>

                      <ul className="mt-8 space-y-2 lg:space-y-4">
                        {card.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-1 text-sm lg:text-base text-code-props/90"
                          >
                            <ChevronRight
                              size={20}
                              className="shrink-0 text-blue-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    isLeft
                      ? "hidden px-16 lg:col-start-1 lg:row-start-1 lg:flex lg:items-center lg:justify-end"
                      : "hidden px-16 lg:col-start-3 lg:row-start-1 lg:flex lg:items-center lg:justify-start"
                  }
                >
                  <div className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-zinc-300 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-md">
                    <CalendarDays size={18} className="text-blue-400" />
                    <span>{card.date}</span>

                    <div
                      className={
                        isLeft
                          ? "absolute -right-10 top-1/2 h-px w-10 -translate-y-1/2 bg-blue-400/30"
                          : "absolute -left-10 top-1/2 h-px w-10 -translate-y-1/2 bg-blue-400/30"
                      }
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
