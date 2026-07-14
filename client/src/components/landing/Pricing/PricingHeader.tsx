import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PricingHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
 once:false,
 amount:0.05
}}
      transition={{
        duration: 0.7,
      }}
      className="mx-auto max-w-5xl text-center"
    >
      {/* Badge */}

      <div
        className="
          mx-auto

          inline-flex

          items-center

          gap-2

          rounded-full

          border

          border-violet-500/20

          bg-violet-500/10

          px-5

          py-2.5

          backdrop-blur-xl

          text-sm

          font-medium

          text-violet-300
        "
      >
        <Sparkles
          size={16}
          className="text-violet-400"
        />

        Pricing
      </div>

      {/* Heading */}

      <h2
        className="
          mt-8

          text-4xl

          font-bold

          leading-tight

          text-white

          sm:text-5xl

          lg:text-6xl

          text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
xl:text-7xl
        "
      >
        Choose Your

        <br />

        <span
          className="
            bg-gradient-to-r

            from-violet-400

            via-fuchsia-400

            to-cyan-400

            bg-clip-text

            text-transparent
          "
        >
          AI Interview Plan
        </span>
      </h2>

      {/* Subtitle */}

      <p
        className="
          mx-auto

          mt-8

          max-w-3xl

          text-base

          leading-8

          text-slate-400

          sm:text-lg
        "
      >
        Choose the perfect plan for your interview preparation.
        Practice AI mock interviews, improve your ATS score,
        receive personalized feedback and accelerate your career
        with an AI-powered platform built for modern developers.
      </p>
    </motion.div>
  );
}