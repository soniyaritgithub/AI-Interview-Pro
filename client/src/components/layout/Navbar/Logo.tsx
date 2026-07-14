import { BrainCircuit } from "lucide-react";

export default function Logo() {
  return (
    <a
      href="/"
      className="
flex
items-center
gap-3
min-w-0
"
    >
      <div
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-500
        text-white
        shadow-lg
      "
      >
        <BrainCircuit size={22} />
      </div>

      <div>
        <h2 className="text-base
sm:text-lg font-bold text-white">
          AI Interview
        </h2>

        <p className="hidden sm:block text-xs text-slate-400 text-slate-400">
          Copilot Pro
        </p>
      </div>
    </a>
  );
}