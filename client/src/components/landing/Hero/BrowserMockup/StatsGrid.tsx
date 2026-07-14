import { motion } from "framer-motion";

import StatCard from "./StatCard";

import { dashboardStats } from "../../../../data/dashboardPreviewData";

export default function StatsGrid() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        delayChildren: 1.25,
        staggerChildren: 0.12,
      }}
      className="
        grid

        grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4

        gap-3
        lg:gap-4

        w-full
      "
    >
      {dashboardStats.map((stat, index) => {
        const hideOnMobile =
          index >= 2
            ? "hidden lg:block"
            : "block";

        return (
          <motion.div
            key={stat.title}
            className={hideOnMobile}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <StatCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              accent={stat.accent}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}