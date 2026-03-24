import { Logo } from "@/assets";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Sobre", "Experiência", "Tecnologias", "Contato"];

const getSectionId = (label: string) =>
  label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map(getSectionId), []);
  const visibilityRatiosRef = useRef<Record<string, number>>({});

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    const observedSectionIds = new Set<string>();

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

    const observeAvailableSections = () => {
      sectionIds.forEach((id) => {
        if (observedSectionIds.has(id)) {
          return;
        }

        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        observer.observe(section);
        observedSectionIds.add(id);
      });
    };

    observeAvailableSections();

    const mutationObserver = new MutationObserver(() => {
      observeAvailableSections();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
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
      className="fixed left-0 -my-4 z-50 flex w-full justify-between bg-transparent px-4 py-4 text-slate-100 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:px-14"
    >
      <a href="#">
        <Logo
          height={scrolled ? 30 : 38}
          className="duration-600 md:hover:h-11.5"
        />
      </a>

      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-slate-100 md:hidden"
        aria-label="Abrir menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <div className="hidden items-center gap-4 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${getSectionId(item)}`}
            onClick={() => {
              setActive(getSectionId(item));
              setIsMobileMenuOpen(false);
            }}
            className={`cursor-pointer relative group px-2 py-1 text-base font-medium transition-all duration-400
            ${
              active === getSectionId(item)
                ? "text-white"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {item}
            <span
              className={`absolute bottom-0 left-0 h-0.5 block bg-linear-to-r from-indigo-500 to-indigo-900 transition-all duration-400 ${
                active === getSectionId(item)
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-4 right-4 top-17 rounded-2xl border border-white/10 bg-[#060c17]/95 p-3 shadow-[0_0_30px_rgba(59,130,246,0.14)] backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={`mobile-${item}`}
                href={`#${getSectionId(item)}`}
                onClick={() => {
                  setActive(getSectionId(item));
                  setIsMobileMenuOpen(false);
                }}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  active === getSectionId(item)
                    ? "bg-blue-500/20 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
