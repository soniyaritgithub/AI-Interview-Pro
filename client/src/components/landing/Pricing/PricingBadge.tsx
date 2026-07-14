import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PricingBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        absolute

    left-1/2

    top-4

    -translate-x-1/2

    z-20

    w-auto
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none

          absolute

          inset-0

          rounded-full

          bg-violet-500/30

          blur-xl
        "
      />

      {/* Badge */}
      <div
        className="
          relative

          inline-flex

          items-center

          gap-2

          rounded-full

          border

          border-violet-400/30

          bg-gradient-to-r

          from-violet-600

          via-fuchsia-600

          to-cyan-600

          px-6

          py-2.5

          backdrop-blur-2xl

          shadow-[0_10px_35px_rgba(139,92,246,0.45)]
        "
      >
        <Sparkles
          size={16}
          className="text-white"
        />

        <span
          className="
            whitespace-nowrap

            text-xs

            sm:text-sm

            font-semibold

            tracking-wide

            text-white
          "
        >
          Most Popular
        </span>
      </div>
    </motion.div>
  );
}