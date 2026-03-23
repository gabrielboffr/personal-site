import graduation from "../../assets/images/graduation.avif";
import { motion, type Variants } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const textVariant: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const aboutCards = [
  {
    title: "Formação",
    label: "Minha base",
    icon: GraduationCap,
    tags: ["Cursando Eng. de Software", "Projetos práticos", "Startup"],
  },
  {
    title: "Localização",
    label: "Onde estou",
    icon: MapPin,
    tags: ["Três Cachoeiras, Brasil", "Criciúma, Brasil", "Remoto"],
  },
];

const About = () => {
  return (
    <section
      id="sobre"
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-2 my-8 sm:px-4 md:gap-10 lg:gap-16"
    >
      <h1 className="text-center text-4xl font-extrabold bg-clip-text bg-linear-to-r from-white to-blue-600 text-transparent text-shadow-primary-glow text-shadow-8xs sm:text-5xl lg:text-7xl">
        Sobre mim
      </h1>
      <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.07 }}
          className="relative my-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl scale-110" />

          <div className="animate-float relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <img
              src={graduation}
              alt="Gabriel Boff Raupp"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
        <div className="flex w-full flex-col justify-center gap-6 lg:w-1/2 lg:gap-8">
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="relative"
          >
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="h-1 rounded-full bg-blue-400 mb-6 shadow-[0_0_20px_rgba(96,165,250,0.7)]"
            />

            <p className="text-white font-medium text-base leading-7 text-left sm:text-lg sm:leading-8 lg:text-xl lg:leading-9 lg:text-justify">
              Eu sou{" "}
              <span className="text-blue-400 font-bold">
                Gabriel Boff Raupp
              </span>
              , estudante de{" "}
              <span className="font-bold">Engenharia de Software</span> e
              desenvolvedor fullstack em formação. Meu interesse por tecnologia
              começou ainda quando criança, quando tive meus primeiros problemas
              com o computador e passei a me perguntar como tudo aquilo
              funcionava. A curiosidade em entender melhor o hardware me levou
              ao meu primeiro emprego em uma informática local. Foi assim que
              comecei a me aproximar da tecnologia e, mais tarde, a enxergar na
              programação não apenas uma área de estudo, mas também uma forma de
              construir soluções e dar vida a ideias.
            </p>
          </motion.div>
          <div className="w-full">
            <motion.div
              variants={cardsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
            >
              {aboutCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-5 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-sm hover:border-blue-400/20 sm:p-7"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)] opacity-70" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),transparent,rgba(34,211,238,0.08))]" />

                    <span className="absolute right-5 top-4 text-5xl font-black tracking-tight text-white/5 sm:right-6 sm:top-5 sm:text-6xl">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <div className="mb-5 flex items-start justify-between gap-3 sm:mb-6 sm:gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 sm:h-14 sm:w-14">
                          <Icon
                            size={24}
                            strokeWidth={2.2}
                            className="sm:h-7 sm:w-7"
                          />
                        </div>

                        <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-code-props/60">
                          {card.label}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {card.title}
                      </h3>

                      <div className="mt-4 h-1 w-14 rounded-full bg-primary-default transition-all duration-300 group-hover:w-24 group-hover:bg-primary-glow" />

                      <div className="mt-6 flex flex-wrap gap-2">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
