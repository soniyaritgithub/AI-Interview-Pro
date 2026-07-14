import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import Rating from "./Rating";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  icon: LucideIcon;
  accent: string;
  index: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  review,
  icon: Icon,
  accent,
  index,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/[0.05]

        backdrop-blur-2xl

        p-6
        sm:p-7
        lg:p-8

        shadow-[0_20px_60px_rgba(0,0,0,0.35)]

        transition-all
        duration-500

        hover:border-violet-500/30
      "
    >
      {/* Gradient Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-3xl

          p-[1px]

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
        style={{
          background: `linear-gradient(135deg, ${accent}, transparent 70%)`,
        }}
      >
        <div className="h-full w-full rounded-3xl bg-[#0b1020]" />
      </div>

      {/* Glow */}
      <div
        className="
          pointer-events-none

          absolute
          -right-12
          -top-12

          h-44
          w-44

          rounded-full

          blur-3xl

          opacity-0

          scale-75

          transition-all
          duration-700

          group-hover:opacity-40
          group-hover:scale-100
        "
        style={{
          background: accent,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Top */}
        <div className="flex items-start justify-between gap-5">
          {/* Avatar + Info */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                border
                border-white/10

                bg-white/5

                font-bold

                text-white
              "
              style={{
                borderColor: accent,
              }}
            >
              {avatar}
            </div>

            <div>
              <h3
                className="
                  text-lg
                  sm:text-xl

                  font-semibold

                  text-white
                "
              >
                {name}
              </h3>

              <p
                className="
                  mt-1

                  text-sm

                  text-slate-400
                "
              >
                {role}
              </p>

              <p
                className="
                  text-xs

                  uppercase

                  tracking-wider

                  text-violet-300
                "
              >
                {company}
              </p>
            </div>
          </div>

          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/5
            "
            style={{
              color: accent,
            }}
          >
            <Icon size={26} />
          </motion.div>
        </div>

        {/* Rating */}
        <div className="mt-6">
          <Rating
            rating={rating}
            size={18}
          />
        </div>

        {/* Review */}
        <p
          className="
            mt-6

            text-sm
            sm:text-base

            leading-8

            text-slate-300
          "
        >
          "{review}"
        </p>

        {/* Bottom Line */}
        <div
          className="
            mt-8

            h-px

            overflow-hidden

            rounded-full

            bg-white/10
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            className="h-full rounded-full"
            style={{
              background: accent,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}