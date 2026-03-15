const Home = () => {
  return (
    <div className="flex flex-col items-center bg-background text-slate-100 p-4 gap-6">
      <div className="flex flex-col max-w-1/2 items-center gap-3">
        <h1 className="text-4xl">Gabriel Boff Raupp</h1>
        <h2 className="text-xl">Desenvolvedor Web</h2>
        <p className="text-xs text-center">
          Construo aplicações web modernas utilizando React, TypeScript e
          Javascript, com foco em criar soluções úteis, bem estruturadas e
          fáceis de manter
        </p>
      </div>
      <div className="flex flex-row gap-8">
        <button>
          <a className="" href="#">
            Ver Projetos
          </a>
        </button>
        <button>
          <a
            className=""
            href="https://linkedin.com/in/gabrielboffr"
            target="blank"
          >
            LinkedIn
          </a>
        </button>
        <button>
          <a className="" href="https://github.com/gabrielboffr" target="blank">
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
