import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Sobre");
  const navItems = [
    "Sobre",
    "Experiência",
    "Tecnologias",
    "Projetos",
    "Contato",
  ];
  return (
    <nav className="flex gap-8 justify-center p-4 bg-transparent text-slate-100">
      <div>
        <img src="../../assets/icons/icon.png" alt="" />
      </div>
      {navItems.map((item) => (
        <a
          key={item}
          onClick={() => setActive(item)}
          className={`cursor-pointer relative group px-2 py-1 text-base transition-all duration-400
            ${
              active === item
                ? "text-white font-medium"
                : "text-slate-300 hover:text-white"
            }`}
        >
          {item}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 block bg-linear-to-r from-indigo-500 to-indigo-900 transition-all duration-400 ${
              active === item ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
