import { motion } from "framer-motion";

import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import PerformanceCard from "./PerformanceCard";
import WeeklyActivity from "./WeeklyActivity";

export default function DashboardPreview() {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },

        visible: {
          opacity: 1,
          y: 0,

          transition: {
            delay: 0.9,
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="
        relative

        w-full
        min-w-0

        overflow-hidden

        rounded-2xl
        lg:rounded-3xl

        bg-gradient-to-br
        from-slate-900
        via-slate-900/95
        to-slate-800/90

        p-3
        sm:p-4
        md:p-5
        lg:p-6
        xl:p-7
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_45%)]

          opacity-80
        "
      />

      <div
        className="
          relative
          z-10

          space-y-3
          sm:space-y-4
          md:space-y-5
          lg:space-y-6
        "
      >
        {/* Header */}
        <DashboardHeader />

        {/* Stats */}
        <StatsGrid />

        {/* Performance */}
        <PerformanceCard />

        {/* Weekly Chart */}
        <WeeklyActivity />
      </div>
    </motion.div>
  );
}