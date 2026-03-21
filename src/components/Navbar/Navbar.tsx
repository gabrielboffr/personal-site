import { Icon } from "@/assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navItems = [
    "Sobre",
    "Experiência",
    "Tecnologias",
    "Projetos",
    "Contato",
  ];
  return (
    <nav className="flex gap-8 justify-between px-32 bg-transparent text-slate-100">
      <a href="#">
        <Icon height={42} className="hover:h-11.5 duration-600" />
      </a>
      <div className="flex gap-4">
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
              className={`absolute bottom-2 left-0 h-0.5 block bg-linear-to-r from-indigo-500 to-indigo-900 transition-all duration-400 ${
                active === item ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
