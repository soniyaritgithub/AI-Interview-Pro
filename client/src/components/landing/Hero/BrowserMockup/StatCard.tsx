import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import CountUp from "../../../common/CountUp";


interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  accent,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
     className="
  group

  relative

  w-full

  overflow-hidden
min-h-[115px]
sm:min-h-[130px]
md:min-h-[145px]
lg:min-h-[185px]

  rounded-2xl
  lg:rounded-3xl

  border
  border-white/10

  bg-white/[0.04]

  backdrop-blur-xl

  p-4
  sm:p-5

  flex
  flex-col
  justify-between

  shadow-lg

  transition-all
  duration-300

  hover:border-violet-500/30
  hover:bg-white/[0.06]
"
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none

          absolute
          -right-8
          -top-8

          h-24
          w-24

          rounded-full

          blur-3xl

          opacity-20

          group-hover:opacity-40

          transition-opacity
          duration-300
        "
        style={{
          background: accent,
        }}
      />

      {/* Top */}
      <div className="flex items-start justify-between">
        <div
          className="
            flex

          h-8
w-8

sm:h-9
sm:w-9

lg:h-11
lg:w-11

            items-center
            justify-center

            rounded-xl

            border
            border-white/10

            bg-white/5
          "
          style={{
            color: accent,
          }}
        >
          <Icon size={20} />
        </div>

        <ArrowUpRight
          size={16}
          className="
            text-slate-500

            transition-transform
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>

      {/* Value */}
     <h3
className="
mt-5

text-xl
sm:text-2xl
md:text-3xl
lg:text-4xl

font-bold

tracking-tight

text-white
"
>
     <CountUp
  value={Number(value.replace(/[^\d]/g, ""))}
  suffix="%"
/>
      </h3>

      {/* Title */}
     <p
className="
mt-2

text-sm

font-medium

text-slate-400
"
>
        {title}
      </p>

      {/* Progress */}
      <div
        className="
          mt-5

          h-1.5

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
            width: "85%",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full"
          style={{
            background: accent,
          }}
        />
      </div>
    </motion.div>
  );
}