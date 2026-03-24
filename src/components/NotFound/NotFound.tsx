import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative flex max-h-dvh lg:max-h-screen items-center justify-center overflow-hidden px-6 py-16 text-slate-100 my-auto h-dvh lg:h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-80 w-80 -translate-x-1/2 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-[-8%] right-[8%] h-72 w-72 rounded-full bg-blue-700/18 blur-3xl" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full max-w-3xl rounded-3xl border border-blue-300/15 bg-background p-8 text-center shadow-[0_0_80px_rgba(59,130,246,0.15)] backdrop-blur-md sm:p-12"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.4em] text-blue-300/85 sm:text-sm">
          ERRO DE ROTA
        </p>
        <h1 className="mb-4 text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-400 sm:text-7xl">
          404
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base text-slate-300 sm:text-lg">
          Essa URL não existe no portfólio. Talvez você tenha digitado o
          endereço errado.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="w-full rounded-xl border border-border bg-primary-default/80 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white shadow-glow transition hover:scale-[1.03] hover:bg-blue-500 sm:w-auto"
          >
            VOLTAR PARA INÍCIO
          </Link>
          <Link
            to="/#contato"
            className="w-full rounded-xl border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-slate-200 transition hover:scale-[1.03] hover:bg-white/12 sm:w-auto"
          >
            IR PARA CONTATO
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default NotFound;
