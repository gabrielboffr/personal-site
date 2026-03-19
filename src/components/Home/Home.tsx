const Home = () => {
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

  return (
    <div className="flex items-center justify-center bg-transparent text-slate-100 px-24 gap-12 h-[calc(100vh-64px)] w-5/6 mx-auto">
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-transparent border border-blue-500/50 rounded-2xl px-4 py-1.5 w-min text-nowrap font-semibold text-xs text-primary-soft tracking-widest">
          BEM VINDO AO MEU PORTFÓLIO
        </div>
        <h1 className="text-5xl font-extrabold">
          Construindo{" "}
          <span className="bg-clip-text bg-linear-to-r from-blue-400 to-blue-900 text-transparent">
            Experiências Digitais
          </span>
        </h1>
        <div className="flex flex-col w-9/12 gap-4">
          <p className="text-sm font-light text-justify">
            Transformo ideias em aplicações web modernas, unindo código limpo,
            performance e uma experiência de usuário bem pensada. Sempre
            buscando evoluir e criar soluções que realmente fazem diferença.
          </p>
          <div className="">
            <a href="https://linkedin.com/in/gabrielboffr"></a>
            <a href="https://github.com/gabrielboffr">Github</a>
            <a href="https://gabrielboffr.dev">Site</a>
            <a href="mailto:gabrielbraupp@gmail.com">Email</a>
          </div>
          <div className="flex gap-8 w-1/3 items-center justify-center mx-auto">
            <a
              href="https://linkedin.com/in/gabrielboffr"
              className="bg-indigo-500 px-4 py-2 rounded-xl w-full text-center shadow-glow"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gabrielboffr"
              className="bg-indigo-500 px-4 py-2 rounded-xl w-full text-center shadow-glow duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="relative rounded-3xl border border-white/10 bg-[#050505]/80 overflow-hidden shadow-2xl group w-full">
        <div className="flex justify-between h-8 bg-surface p-6">
          <div className="flex gap-2 items-center">
            <div className="rounded-full h-3 w-3 bg-red-400"></div>
            <div className="rounded-full h-3 w-3 bg-yellow-400"></div>
            <div className="rounded-full h-3 w-3 bg-green-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full h-3 w-3 bg-gray-800"></div>
            <code className="text-xs text-code-props">Portfolio.tsx</code>
          </div>
        </div>
        <code>
          <div className="bg-background p-8">
            {code.map((line, i) => (
              <div key={i} className="flex">
                <div className="pl-4 text-right mr-6 line-number select-none italic opacity-20">
                  0{i + 1}
                </div>
                <div>
                  {line.map((token, j) => (
                    <span key={j} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </code>
      </div>
    </div>
  );
};

export default Home;
