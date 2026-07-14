import { motion } from "framer-motion";

import { performanceMetrics } from "../../../../data/dashboardPreviewData";
import CountUp from "../../../common/CountUp";

export default function PerformanceCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
     className="
  w-full

  rounded-2xl
  lg:rounded-3xl

  border
  border-white/10

  bg-white/[0.04]

  backdrop-blur-xl

p-3
sm:p-4
md:p-5
lg:p-6

  shadow-lg
"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="
              text-base
              sm:text-lg

              font-semibold

              text-white
            "
          >
            Performance Overview
          </h3>

          <p
            className="
              mt-1

              text-xs
              sm:text-sm

              text-slate-400
            "
          >
            AI analysis of your latest interview
          </p>
        </div>

        <div
          className="
            rounded-full

            bg-emerald-500/15

            px-3
            py-1

            text-xs

            font-semibold

            text-emerald-400
          "
        >
          +12%
        </div>
      </div>

      {/* Metrics */}
      <div
        className="
          mt-6

          space-y-5
        "
      >
        {performanceMetrics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <div className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-xl
                    "
                    style={{
                      backgroundColor: `${item.color}20`,
                      color: item.color,
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm

                        font-medium

                        text-white
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        text-xs

                        text-slate-400
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <span
                  className="
                    text-sm
                    sm:text-base

                    font-bold

                    text-white
                  "
                >
                 <CountUp value={item.value} suffix="%" />
                </span>
              </div>

              {/* Progress */}
              <div
                className="
                  mt-3

                  h-2

                  overflow-hidden

                  rounded-full

                  bg-white/10
                "
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${item.value}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className="
                    h-full

                    rounded-full
                  "
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        className="
          mt-6

          flex
          flex-col

          gap-2

          rounded-xl

          border
          border-white/10

          bg-white/5

          p-4

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <p
            className="
              text-xs

              uppercase

              tracking-wider

              text-slate-500
            "
          >
            Overall Rating
          </p>

          <h4
            className="
              mt-1

              text-lg

              font-bold

              text-white
            "
          >
            Outstanding
          </h4>
        </div>

        <div
          className="
            rounded-full

            bg-violet-500/15

            px-4
            py-2

            text-sm

            font-semibold

            text-violet-300
          "
        >
          Top 5%
        </div>
      </div>
    </motion.section>
  );
}