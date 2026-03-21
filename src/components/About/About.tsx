import graduation from "../../assets/images/graduation.jpg";
import { motion, type Variants } from "framer-motion";

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
      staggerChildren: 0.15,
      delayChildren: 0.25,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardDescription = [
  {
    title: "Formação",
    description: "Bacharelado em Engenharia de Software",
    subDescription: "Centro Universitário SATC, Cricíuma/SC",
  },
  {
    title: "Localização",
    description: "Três Cachoeiras/RS",
    subDescription: "Brasil",
  },
];

const About = () => {
  return (
    <section id="about" className="h-full flex flex-col items-center gap-16">
      <h1 className="text-7xl font-extrabold bg-clip-text bg-linear-to-r from-white to-blue-600 text-transparent text-shadow-primary-glow text-shadow-8xs">
        Sobre <span className=" ">mim</span>
      </h1>
      <div className="flex justify-center w-full gap-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.07 }}
          className="relative perspective-[1000px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl scale-110" />

          <div className="relative w-lg aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm animate-float">
            <img
              src={graduation}
              alt="Gabriel Boff Raupp"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>
        </motion.div>
        {/* <div className="flex flex-col justify-center w-1/2 gap-8">
          <div className="">
            <p className="text-white font-medium text-xl text-justify">
              Eu sou {""}
              <span className="text-blue-400 font-bold">
                Gabriel Boff Raupp
              </span>
              , estudante de {""}
              <span className="font-bold">Engenharia de Software</span> e
              desenvolvedor fullstack em formação. Meu interesse por tecnologia
              começou ainda quando crinaça, quando tive meus primeiros problemas
              com o computador e passei a me perguntar como tudo aquilo
              funcionava. A curiosidade em entender melhor o hardware me levou
              ao meu primeiro emprego em uma informática local. Foi assim que
              comecei a me aproximar da tecnologia e, mais tarde, a enxergar na
              programação não apenas uma área de estudo, mas também uma forma de
              construir soluções e dar vida a ideias.
            </p>
          </div>
          <div className="flex text-white gap-8 justify-center">
            {cardDescription.map((card, i) => (
              <div
                key={i}
                className="bg-surface/80 p-8 rounded-2xl shadow-lg shadow-blue-600/10 w-full"
              >
                <h1 className="text-3xl font-extrabold text-shadow-primary-glow text-shadow-4xs">
                  {card.title}
                </h1>
                <p className="text-base font-medium text-code-props/70">
                  {card.description}
                </p>
                <p className="text-base font-medium text-code-props/70">
                  {card.subDescription}
                </p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="flex flex-col justify-center w-1/2 gap-8">
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

            <p className="text-white font-medium text-xl text-justify leading-9">
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

          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex text-white gap-8 justify-center"
          >
            {cardDescription.map((card: any, i: number) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className="group relative bg-surface/80 p-8 rounded-2xl shadow-lg shadow-blue-600/10 w-full border border-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-blue-400/15" />

                <div className="relative z-10">
                  <h1 className="text-3xl font-extrabold text-shadow-primary-glow text-shadow-4xs">
                    {card.title}
                  </h1>

                  <p className="text-base font-medium text-code-props/70 mt-2">
                    {card.description}
                  </p>

                  <p className="text-base font-medium text-code-props/70">
                    {card.subDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
