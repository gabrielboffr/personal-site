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
        text: '"React", "TypeScript", "JavaScript", "NestJS", "PostgreSQL"',
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
    <div className="flex items-center justify-center bg-transparent text-slate-100 p-4 gap-12 h-[calc(100vh-56px)]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl">Gabriel Boff Raupp</h1>
          <h2 className="text-2xl">Desenvolvedor Web</h2>
          <p className="text-sm text-center w-10/12">
            Construo aplicações web modernas utilizando React, TypeScript e
            Javascript, com foco em criar soluções úteis, bem estruturadas e
            fáceis de manter
          </p>
        </div>
        <div className="flex gap-8 w-1/3 m-auto">
          <button className="bg-indigo-500 p-2 rounded-xl w-full">
            <a href="https://linkedin.com/in/gabrielboffr">LinkedIn</a>
          </button>
          <button className="bg-indigo-500 p-2 rounded-xl w-full">
            <a href="https://github.com/gabrielboffr">GitHub</a>
          </button>
        </div>
      </div>
      <div className="relative rounded-3xl border border-white/10 bg-[#050505]/80 overflow-hidden shadow-2xl group">
        <div className="flex justify-between h-8 bg-surface p-3">
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
          <div className="bg-surface p-3">
            {code.map((line, i) => (
              <div key={i} className="flex">
                <div className="w-6 text-right mr-4 line-number select-none italic">
                  {i + 1}
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
