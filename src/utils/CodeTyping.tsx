import { useEffect, useMemo, useState } from "react";

type Token = {
  text: string;
  className: string;
};

type CodeLine = Token[];

type Props = {
  code: CodeLine[];
};

export function CodeTyping({ code }: Props) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  const lineTexts = useMemo(
    () => code.map((line) => line.map((token) => token.text).join("")),
    [code]
  );

  useEffect(() => {
    if (!code.length) return;

    const currentLineText = lineTexts[visibleLines] || "";

    if (visibleLines >= code.length) return;

    if (visibleChars < currentLineText.length) {
      const timeout = setTimeout(() => {
        setVisibleChars((prev) => prev + 1);
      }, 22);

      return () => clearTimeout(timeout);
    }

    const nextLineTimeout = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
      setVisibleChars(0);
    }, 180);

    return () => clearTimeout(nextLineTimeout);
  }, [visibleChars, visibleLines, code.length, lineTexts]);

  function renderTypedLine(line: CodeLine, charsToShow: number) {
    let remaining = charsToShow;

    return line.map((token, index) => {
      if (remaining <= 0) return null;

      const visibleText = token.text.slice(0, remaining);
      remaining -= visibleText.length;

      return (
        <span key={index} className={token.className}>
          {visibleText}
        </span>
      );
    });
  }

  return (
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
        <div className="bg-background p-8 font-mono">
          {code.map((line, i) => {
            const isPastLine = i < visibleLines;
            const isCurrentLine = i === visibleLines;

            if (!isPastLine && !isCurrentLine) return null;

            return (
              <div key={i} className="flex min-h-7">
                <div className="pl-4 text-right mr-6 line-number select-none italic opacity-20 w-10">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  {isPastLine &&
                    line.map((token, j) => (
                      <span key={j} className={token.className}>
                        {token.text}
                      </span>
                    ))}

                  {isCurrentLine && (
                    <>
                      {renderTypedLine(line, visibleChars)}
                      <span className="inline-block w-2 h-[1.1em] ml-0.5 translate-y-0.5 bg-blue-400 animate-pulse" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </code>
    </div>
  );
}
