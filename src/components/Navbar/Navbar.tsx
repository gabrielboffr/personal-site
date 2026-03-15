const Navbar = () => {
  return (
    <nav className="flex gap-8 justify-center p-4 bg-slate-950 text-slate-100">
      <p className="cursor-pointer">Home</p>
      <p className="cursor-pointer">Sobre</p>
      <p className="cursor-pointer">Tecnologias</p>
      <p className="cursor-pointer">Projeto</p>
      <p className="cursor-pointer">Experiência</p>
      <p className="cursor-pointer">Contato</p>
    </nav>
  );
};

export default Navbar;
