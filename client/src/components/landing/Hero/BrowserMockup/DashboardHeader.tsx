import { motion } from "framer-motion";
import {
  CalendarDays,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { dashboardSummary } from "../../../../data/dashboardPreviewData";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.1,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="
        flex
        flex-col
        gap-5

        md:flex-row
        md:items-start
        md:justify-between
      "
    >
      {/* Left Content */}
      <div className="min-w-0 flex-1">
        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-violet-500/20

            bg-violet-500/10

            px-3
            py-1.5

            backdrop-blur-xl

            shadow-lg
          "
        >
          <Sparkles
            size={14}
            className="text-violet-400"
          />

          <span
            className="
              text-[11px]
              sm:text-xs

              font-semibold

              tracking-wide

              uppercase

              text-violet-300
            "
          >
            {dashboardSummary.badge}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-4

            leading-tight

            font-bold

            tracking-tight

            text-white

            text-base
            sm:text-lg
            md:text-xl
            lg:text-3xl
          "
        >
          {dashboardSummary.title.split(" ").slice(0, 2).join(" ")}
          <br />
          {dashboardSummary.title.split(" ").slice(2).join(" ")}
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-3

            max-w-md

            text-sm
            sm:text-[15px]
            lg:text-base

            leading-7

            text-slate-400
          "
        >
          {dashboardSummary.subtitle}
        </p>
      </div>

      {/* Status Card */}
      <motion.div
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          hidden
          md:flex

          shrink-0

          items-center
          gap-4

          rounded-2xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          px-4
          py-3

          shadow-xl
        "
      >
        {/* Icon */}
        <div
          className="
            flex

            h-11
            w-11

            items-center
            justify-center

            rounded-xl

            bg-violet-500/15

            text-violet-400
          "
        >
          <CalendarDays size={22} />
        </div>

        {/* Text */}
        <div>
          <p
            className="
              text-[11px]

              uppercase

              tracking-[0.18em]

              text-slate-500
            "
          >
            Status
          </p>

          <div
            className="
              mt-1

              flex
              items-center

              gap-2
            "
          >
            <CheckCircle2
              size={16}
              className="text-emerald-400"
            />

            <span
              className="
                text-sm

                font-semibold

                text-white
              "
            >
              {dashboardSummary.status}
            </span>
          </div>

          <p
            className="
              mt-1

              text-xs

              text-slate-500
            "
          >
            AI engine active • {dashboardSummary.growth}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}