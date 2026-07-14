import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Trophy,
  Mic,
} from "lucide-react";

import { cardVariants } from "../../../animations/hero";
import useParallax from "../../../hooks/useParallax";


const cards = [
  {
    title: "AI Score",
    value: "98 / 100",
    icon: Sparkles,
    className: "top-8 -right-16 xl:-right-20",
  },
  {
    title: "Live Analysis",
    value: "Realtime",
    icon: Brain,
    className: "top-1/2 -left-16 xl:-left-20 -translate-y-1/2",
  },
  {
    title: "Success Rate",
    value: "92%",
    icon: Trophy,
    className: "bottom-20 -right-14 xl:-right-16",
  },
  {
    title: "Voice AI",
    value: "Excellent",
    icon: Mic,
    className: "bottom-8 -left-18 xl:-left-24",
  },
];

export default function FloatingCards() {
  const { x, y } = useParallax();
  return (
    <>
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
transform:
`translate(${x*1.4}px,${y*1.4}px)`
}}
            className={`
  hidden
  xl:flex

  absolute
  ${card.className}

  z-20

  items-center
  gap-3

  w-44
  xl:w-52

  rounded-2xl

  border
  border-white/10

  bg-slate-900/80

  backdrop-blur-xl

  px-4
  py-3

  shadow-[0_20px_40px_rgba(0,0,0,0.35)]

  pointer-events-auto

  transition-all
  duration-300
`}
          >
            {/* Icon */}
            <div
              className="
                flex

                h-11
                w-11

                shrink-0

                items-center
                justify-center

                rounded-xl

                bg-violet-500/20

                text-violet-400
              "
            >
              <Icon size={20} />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.18em]

                  text-slate-400
                "
              >
                {card.title}
              </p>

              <h4
                className="
                  mt-1

                  truncate

                  text-sm
                  xl:text-base

                  font-semibold

                  text-white
                "
              >
                {card.value}
              </h4>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}