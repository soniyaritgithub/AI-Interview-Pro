import { motion } from "framer-motion";
import StepCard from "./StepCard";
import { howItWorksData } from "./howItWorksData";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
      relative
      overflow-hidden
      py-24
      sm:py-28
      lg:py-32
      "
    >
      <div
        className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]
        "
      />

      <div
        className="
        mx-auto
        max-w-[1500px]
        px-5
        sm:px-6
        lg:px-8
        "
      >
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
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <span
            className="
            inline-flex
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-5
            py-2
            text-sm
            font-medium
            text-violet-300
            "
          >
            How It Works
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-white
            sm:text-5xl
            lg:text-6xl
            "
          >
            Crack Interviews in
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
              {" "}
              4 Simple Steps
            </span>
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
            "
          >
            Experience AI-powered interview preparation with personalized
            questions, real-time feedback, ATS insights and performance tracking.
          </p>
        </motion.div>

        <div
          className="
          mt-20
          grid
          gap-8
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          "
        >
          {howItWorksData.map((step) => (
            <StepCard
              key={step.id}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}