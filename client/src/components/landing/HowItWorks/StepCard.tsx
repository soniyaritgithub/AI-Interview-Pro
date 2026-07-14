import { motion } from "framer-motion";
import type { StepItem } from "./howItWorksData";

interface Props {
  step: StepItem;
}

export default function StepCard({ step }: Props) {
  const Icon = step.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.05]
      backdrop-blur-2xl
      p-8
      transition-all
      duration-500
      hover:border-violet-500/40
      hover:bg-white/[0.08]
      "
    >
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-violet-500/10
        to-cyan-500/10
        "
      />

      <div className="relative z-10">
        <div
          className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-violet-500/20
          "
        >
          <Icon
            className="text-violet-400"
            size={30}
          />
        </div>

        <div
          className="
          mb-4
          text-sm
          font-semibold
          text-violet-400
          "
        >
          Step {step.id}
        </div>

        <h3
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          {step.title}
        </h3>

        <p
          className="
          mt-4
          leading-8
          text-slate-400
          "
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}