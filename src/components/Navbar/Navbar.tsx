import { Icon } from "@/assets";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = ["Sobre", "Experiência", "Tecnologias", "Projetos", "Contato"];

const getSectionId = (label: string) =>
  label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

const Navbar = () => {
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map(getSectionId), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActive(visibleEntries[0].target.id);
          return;
        }

        setActive("");
      },
      {
        rootMargin: "-25% 0px -25% 0px",
        threshold: [0, 0.02, 0.15],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(5, 5, 5, 0)",
        backdropFilter: scrolled ? "blur(6px)" : "blur(0px)",
        paddingBlock: scrolled ? "8px" : "16px",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex gap-8 justify-between px-32 bg-transparent text-slate-100 fixed w-full z-1 -my-4 -mx-8 py-4"
    >
      <a href="#">
        <Icon
          height={scrolled ? 32 : 42}
          className="hover:h-11.5 duration-600"
        />
      </a>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${getSectionId(item)}`}
            onClick={() => setActive(getSectionId(item))}
            className={`cursor-pointer relative group px-2 py-1 text-base transition-all duration-400
            ${
              active === getSectionId(item)
                ? "text-white font-medium"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {item}
            <span
              className={`absolute left-0 h-0.5 block bg-linear-to-r from-indigo-500 to-indigo-900 transition-all duration-400 ${
                active === getSectionId(item)
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
              style={{ bottom: scrolled ? "-2px" : "8px" }}
            />
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
