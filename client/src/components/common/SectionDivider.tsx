import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative

        w-full

        overflow-hidden

        py-10
        sm:py-12
        md:py-14
        lg:py-16
      "
    >
      {/* Gradient Glow */}
      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          h-8

          w-80
          sm:w-[28rem]
          lg:w-[40rem]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          blur-3xl

          opacity-70

          bg-gradient-to-r
          from-transparent
          via-violet-500/40
          to-transparent
        "
      />

      {/* Divider Line */}
      <div
        className="
          relative

          mx-auto

          h-px

          w-full

          max-w-7xl

          overflow-hidden

          bg-white/10
        "
      >
        <motion.div
          initial={{
            x: "-100%",
          }}
          whileInView={{
            x: "100%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2.5,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0

            w-40
            sm:w-52
            lg:w-72

            bg-gradient-to-r
            from-transparent
            via-violet-400/90
            to-transparent
          "
        />
      </div>

      {/* Left Fade */}
      <div
        className="
          pointer-events-none

          absolute

          left-0
          top-0

          h-full

          w-16
          sm:w-20
          lg:w-28

          bg-gradient-to-r
          from-[#020617]
          via-[#020617]/80
          to-transparent
        "
      />

      {/* Right Fade */}
      <div
        className="
          pointer-events-none

          absolute

          right-0
          top-0

          h-full

          w-16
          sm:w-20
          lg:w-28

          bg-gradient-to-l
          from-[#020617]
          via-[#020617]/80
          to-transparent
        "
      />
    </motion.div>
  );
}