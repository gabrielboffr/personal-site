import { Icon } from "@/assets";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const visibilityRatiosRef = useRef<Record<string, number>>({});

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
        entries.forEach((entry) => {
          visibilityRatiosRef.current[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        const nextActive = Object.entries(visibilityRatiosRef.current)
          .sort((a, b) => b[1] - a[1])
          .find(([, ratio]) => ratio > 0)?.[0];

        setActive(nextActive ?? "");
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.02, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? "transparent" : "rgba(5, 5, 5, 0)",
        backdropFilter: scrolled ? "blur(6px)" : "blur(0px)",
        paddingBlock: scrolled ? "8px" : "16px",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-between gap-8 bg-transparent px-8 py-4 text-slate-100 lg:px-32"
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
