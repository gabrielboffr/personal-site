import { Download, GitHub, Gmail, Icon, Linkedin, Send } from "@/assets";
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
      icon: <Icon className="w-8 h-8" />,
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
      id="home"
      className="flex items-center justify-center bg-transparent text-slate-100 px-16 gap-12 h-[calc(100vh-74px)] w-5/6 mx-auto"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-transparent border border-blue-500/50 rounded-2xl px-4 py-1.5 w-min text-nowrap font-semibold text-xs text-primary-soft tracking-[0.2rem] shadow-glow">
          BEM VINDO AO MEU PORTFÓLIO
        </div>
        <motion.h1
          variants={heroItem}
          initial="hidden"
          animate="visible"
          className="text-7xl font-extrabold mb-4"
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
        <div className="flex flex-col w-9/12 gap-4">
          <p className="text-xl font-medium text-white text-shadow-code-props text-shadow-2xs text-justify">
            Eu sou Gabriel Boff, desenvolvedor em formação, focado em criar
            aplicações web com performance, usabilidade e código limpo.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((item, i) => (
              <a
                className="social-wave bg-surface/80 p-2 rounded-2xl border border-border duration-300 hover:scale-110"
                href={item.link}
                target="_blank"
                style={{ animationDelay: item.animationDelay }}
                key={i}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-8 items-center justify-between">
            {buttons.map((button, i) => (
              <motion.a
                whileHover={{
                  scale: 1.05,
                  color: "white",
                  fontWeight: "medium",
                }}
                whileTap={{ scale: 0.85 }}
                className="text-xs bg-indigo-500 p-3 rounded-xl text-center tracking-widest w-full shadow-glow-strong text-nowrap duration-200 text-code-props"
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
      <CodeTyping code={code} />
    </motion.section>
  );
};

export default Home;
