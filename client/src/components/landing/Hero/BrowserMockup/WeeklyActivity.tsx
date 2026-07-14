import { motion } from "framer-motion";
import {
  TrendingUp,
  CalendarDays,
} from "lucide-react";

import {
  weeklyActivity,
  dashboardFooter,
  dashboardSummary,
} from "../../../../data/dashboardPreviewData";

export default function WeeklyActivity() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="
        rounded-2xl
        lg:rounded-3xl

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-xl

        p-4
        sm:p-5
        lg:p-6

        shadow-lg
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CalendarDays
              size={18}
              className="text-violet-400"
            />

            <h3
              className="
                text-base
                sm:text-lg

                font-semibold

                text-white
              "
            >
              Weekly Activity
            </h3>
          </div>

          <p
            className="
              mt-1

              text-xs
              sm:text-sm

              text-slate-400
            "
          >
            Interview performance this week
          </p>
        </div>

        {/* Growth Badge */}
        <div
          className="
            flex
            items-center
            gap-2

            rounded-full

            bg-emerald-500/15

            px-3
            py-1
          "
        >
          <TrendingUp
            size={14}
            className="text-emerald-400"
          />

          <span
            className="
              text-xs

              font-semibold

              text-emerald-400
            "
          >
            {dashboardSummary.growth}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div
  className="
    mt-8

    flex
    items-end
    justify-between

    gap-2
    sm:gap-3

 h-24
sm:h-28
md:h-36
lg:h-48

  "
>
        {weeklyActivity.map((item, index) => (
          <div
            key={item.day}
            className="
              flex
              flex-1
              flex-col
              items-center
              justify-end

              gap-3
            "
          >
            <motion.div
              initial={{
                height: 0,
              }}
              animate={{
                height: `${item.value}%`,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="
                w-full

                rounded-full

                bg-gradient-to-t
                from-violet-600
                via-fuchsia-500
                to-cyan-400

                shadow-lg
                shadow-violet-500/20

                transition-all
                duration-300

                hover:brightness-110
              "
            />

            <span
              className="
                text-[10px]
                sm:text-xs

                font-medium

                text-slate-400
              "
            >
              {item.day}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
          mt-8

          grid
          grid-cols-2

          gap-3
          sm:gap-4
        "
      >
        {/* Interviews */}
        <div
          className="
            rounded-xl

            border
            border-white/10

            bg-white/5

            p-3
            sm:p-4
          "
        >
          <p
            className="
              text-[11px]

              uppercase

              tracking-wider

              text-slate-500
            "
          >
            Interviews
          </p>

          <h4
            className="
              mt-2

              text-xl
              sm:text-2xl

              font-bold

              text-white
            "
          >
            {dashboardFooter.interviews}
          </h4>
        </div>

        {/* Average Score */}
        <div
          className="
            rounded-xl

            border
            border-white/10

            bg-white/5

            p-3
            sm:p-4
          "
        >
          <p
            className="
              text-[11px]

              uppercase

              tracking-wider

              text-slate-500
            "
          >
            Avg Score
          </p>

          <h4
            className="
              mt-2

              text-xl
              sm:text-2xl

              font-bold

              text-white
            "
          >
            {dashboardFooter.averageScore}
          </h4>
        </div>
      </div>
    </motion.section>
  );
}