import { Download, GitHub, Gmail, Logo, Linkedin, Send } from "@/assets";
import { CodeTyping } from "@/utils/CodeTyping";
import { motion, type Variants } from "framer-motion";

const Home = () => {
  const heroContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const heroItem: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const code = [
    [
      { text: "const", className: "text-code-variables" },
      { text: " developer ", className: "text-code-name" },
      { text: "= ", className: "text-code-variables" },
      { text: "{", className: "text-code-keys" },
    ],
    [
      { text: "name", className: "text-code-props pl-4" },
      { text: ": ", className: "text-code-props" },
      { text: '"Gabriel Boff Raupp"', className: "text-code-string" },
      { text: ",", className: "text-code-props" },
    ],
    [
      { text: "role", className: "text-code-props pl-4" },
      { text: ": ", className: "text-code-props" },
      {
        text: '"Software Engineer in Progress"',
        className: "text-code-string",
      },
      { text: ",", className: "text-code-props" },
    ],
    [
      { text: "location", className: "text-code-props pl-4" },
      { text: ": ", className: "text-code-props" },
      { text: '"Brazil"', className: "text-code-string" },
      { text: ",", className: "text-code-props" },
    ],
    [
      { text: "stack", className: "text-code-props pl-4" },
      { text: ": [", className: "text-code-arrays" },
      {
        text: '"React", "TypeScript", "NestJS"',
        className: "text-code-string",
      },
      { text: "]", className: "text-code-arrays" },
    ],
    [
      { text: "}", className: "text-code-keys" },
      { text: ";", className: "text-code-props" },
    ],
  ];

  const buttons = [
    {
      text: "ENTRE EM CONTATO",
      link: "#contato",
      icon: <Send />,
    },
    {
      text: "BAIXE MEU CURRÍCULO",
      link: "https://drive.google.com/u/0/uc?id=1oKfH8cAR7jaV5iW8pzymnTOtrbc4nRYQ&export=download",
      icon: <Download />,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      link: "https://linkedin.com/in/gabrielboffr",
      animationDelay: "0s",
    },
    {
      icon: <GitHub className="w-8 h-8" />,
      link: "https://github.com/gabrielboffr",
      animationDelay: "0.15s",
    },
    {
      icon: <Logo className="w-8 h-8" />,
      link: "#",
      animationDelay: "0.3s",
    },
    {
      icon: <Gmail className="w-8 h-8" />,
      link: "mailto:gabrielbraupp@gmail.com",
      animationDelay: "0.5s",
    },
  ];

  return (
    <motion.section
      variants={heroContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 bg-transparent px-4 py-16 text-slate-100 sm:px-6 md:px-10 lg:h-[calc(100vh)] lg:w-5/6 lg:flex-row lg:gap-12"
    >
      <div className="order-2 flex w-full flex-col gap-2 lg:order-1 lg:flex-1">
        <div className="w-fit rounded-2xl border border-blue-500/50 bg-transparent px-4 py-1.5 text-nowrap text-xs font-semibold tracking-widest lg:tracking-[0.2rem] text-primary-soft shadow-glow mx-auto sm:mx-0">
          BEM VINDO AO MEU PORTFÓLIO
        </div>
        <motion.h1
          variants={heroItem}
          initial="hidden"
          animate="visible"
          className="mb-3 text-4xl font-extrabold sm:text-5xl lg:mb-4 lg:text-7xl"
        >
          Construindo{" "}
          <motion.span
            className="bg-clip-text bg-linear-to-r from-blue-400 to-blue-900 text-transparent"
            variants={heroItem}
            initial="hidden"
            animate="visible"
          >
            Experiências Digitais
          </motion.span>
        </motion.h1>
        <div className="flex w-full flex-col gap-4 lg:w-10/12">
          <p className="text-base font-medium text-white text-shadow-2xs sm:text-lg lg:text-xl lg:text-justify">
            Eu sou Gabriel Boff, desenvolvedor em formação, focado em criar
            aplicações web com performance, usabilidade e código limpo.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socialLinks.map((item, i) => (
              <a
                className="social-wave rounded-2xl border border-border bg-surface/80 p-2 duration-300 hover:scale-110"
                href={item.link}
                target="_blank"
                style={{ animationDelay: item.animationDelay }}
                key={i}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            {buttons.map((button, i) => (
              <motion.a
                whileHover={{
                  scale: 1.05,
                  color: "white",
                  fontWeight: "medium",
                }}
                whileTap={{ scale: 0.85 }}
                className="w-full rounded-xl bg-indigo-500 p-3 text-center text-sm tracking-[0.14rem] text-code-props shadow-glow-strong duration-200 sm:text-xs sm:tracking-wider"
                href={button.link}
                key={i}
              >
                <div className="flex items-center justify-center gap-2">
                  {button.text}
                  {button.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2 lg:flex-1">
        <CodeTyping code={code} />
      </div>
    </motion.section>
  );
};

export default Home;
