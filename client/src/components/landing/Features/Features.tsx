import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";

import { features } from "../../../data/featuresData";




/* -------------------------------------------------------------------------- */
/*                                Component                                   */
/* -------------------------------------------------------------------------- */

export default function Features() {
  return (
    <motion.section
     id="features"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        isolate

        w-full

        overflow-hidden

        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          -z-10

          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_55%)]

          blur-3xl
        "
      />

      {/* Container */}
      <div
        className="
          mx-auto

          w-full

          max-w-[1500px]

          px-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-20
        "
      >
        {/* Heading */}
        <div
          className="
            mx-auto

            max-w-4xl

            text-center
          "
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              inline-flex

              items-center
              gap-2

              rounded-full

              border
              border-violet-500/20

              bg-violet-500/10

              px-4
              py-2

              text-[11px]
              sm:text-xs

              font-semibold

              uppercase

              tracking-[0.28em]

              text-violet-300

              backdrop-blur-xl
            "
          >
            Platform Features
          </motion.span>

          <motion.h2
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
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-6

              font-bold

              tracking-tight

              text-white

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl

              leading-[1.08]
            "
          >
            Everything You Need
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
              To Crack Every Interview
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mx-auto

              mt-8

              max-w-3xl

              text-sm
              sm:text-base
              lg:text-lg

              leading-8

              text-slate-400
            "
          >
            Practice AI-powered interviews, improve your resume,
            enhance communication skills and monitor your progress
            through a premium dashboard built for developers.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        {/* Part 1B yahin se continue hoga */}
     <div
  className="
    mt-16
    sm:mt-20
    lg:mt-24

    grid

    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-2
    xl:grid-cols-3

    gap-5
    sm:gap-6
    md:gap-7
    lg:gap-8
    xl:gap-9
  "
>
  {features.map((feature, index) => (
    <FeatureCard
      key={feature.id}
      title={feature.title}
      description={feature.description}
      icon={feature.icon}
      accent={feature.accent}
      index={index}
    />
  ))}
</div>

  </div>
</motion.section>
  );
}