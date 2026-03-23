import { Database, Layout, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  Figma as FigmaIcon,
  FramerMotion as FramerMotionIcon,
  Git as GitIcon,
  Graphql as GraphqlIcon,
  NestJS as NestJSIcon,
  Network as NetworkIcon,
  NodeJS as NodeJSIcon,
  Notion as NotionIcon,
  PostgreSQL as PostgreSQLIcon,
  Postman as PostmanIcon,
  Prisma as PrismaIcon,
  React as ReactIcon,
  SQL as SQLIcon,
  TailwindCSS as TailwindCSSIcon,
  TypeScript as TypeScriptIcon,
} from "@/assets";

const stacks = [
  {
    title: "Front-end",
    subtitle: "Interfaces modernas e performáticas",
    icon: Layout,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Back-end",
    subtitle: "APIs robustas e integrações",
    icon: Server,
    technologies: ["NestJS", "GraphQL", "Node.js", "REST"],
  },
  {
    title: "Dados & ORM",
    subtitle: "Modelagem e persistência de dados",
    icon: Database,
    technologies: ["PostgreSQL", "SQL", "Prisma", "TypeORM"],
  },
  {
    title: "Ferramentas",
    subtitle: "Fluxo de trabalho e colaboração",
    icon: Wrench,
    technologies: ["Git", "Figma", "Notion", "Postman"],
  },
];

const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindCSSIcon,
  "Framer Motion": FramerMotionIcon,
  NestJS: NestJSIcon,
  GraphQL: GraphqlIcon,
  "Node.js": NodeJSIcon,
  REST: NetworkIcon,
  PostgreSQL: PostgreSQLIcon,
  SQL: SQLIcon,
  Prisma: PrismaIcon,
  TypeORM: Database,
  Git: GitIcon,
  Figma: FigmaIcon,
  Notion: NotionIcon,
  Postman: PostmanIcon,
};

const Tech = () => {
  return (
    <section id="tecnologias" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <motion.div
          className="absolute -left-20 top-12 h-96 w-96 rounded-full bg-cyan-400/8 blur-[120px]"
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-blue-500/8 blur-[120px]"
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.96, 1.05, 0.96] }}
          transition={{
            duration: 10.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-9 px-2 sm:gap-10 sm:px-4 lg:gap-12 lg:px-6">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="leading-normal text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-blue-600 sm:text-5xl md:text-6xl lg:text-7xl">
            Tecnologias e stacks
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            Tecnologias e ferramentas que uso para transformar ideias em
            inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {stacks.map((stack, index) => {
            const StackIcon = stack.icon;

            return (
              <motion.article
                key={stack.title}
                initial={{ opacity: 0, y: 26, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                  rotateZ: index % 2 === 0 ? -0.4 : 0.4,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-[#070d18]/80 shadow-[0_0_34px_rgba(59,130,246,0.08)] backdrop-blur-xl md:rounded-4xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(59,130,246,0.06),rgba(8,12,22,0.9)_40%,rgba(34,211,238,0.05))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[24px_24px] opacity-25" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5 md:px-6 md:py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/12 text-cyan-200">
                        <StackIcon size={23} strokeWidth={2.15} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                          {stack.title}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">
                          {stack.subtitle}
                        </p>
                      </div>
                    </div>

                    <code className="rounded-full border border-blue-300/20 bg-blue-500/12 px-3 py-1 text-base font-semibold uppercase tracking-wider text-code-name sm:px-4 sm:text-lg">
                      0{index + 1}
                    </code>
                  </div>

                  <div className="px-4 py-4 sm:px-5 md:px-6 md:py-5">
                    <ul className="space-y-2.5">
                      {stack.technologies.map((tech) => {
                        const TechIcon = techIcons[tech] ?? Wrench;

                        return (
                          <li
                            key={tech}
                            className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-3 py-2"
                          >
                            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-md text-cyan-200">
                              <TechIcon className="h-4 w-4 shrink-0" />
                            </span>
                            <span className="text-sm font-medium text-zinc-200">
                              {tech}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech;
