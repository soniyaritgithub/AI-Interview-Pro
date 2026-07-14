import { motion } from "framer-motion";

interface PricingToggleProps {
  yearly: boolean;
  onToggle: () => void;
}

export default function PricingToggle({
  yearly,
  onToggle,
}: PricingToggleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
     viewport={{
 once:false,
 amount:0
}}
      transition={{
        duration: 0.5,
      }}
      className="
  mt-10
  sm:mt-12
  lg:mt-14

  flex
  justify-center

  w-full

  px-4
"
    >
      <div
        className="
relative

flex

w-full
max-w-[360px]
sm:max-w-[420px]

items-center

rounded-full

border
border-white/10

bg-white/[0.05]

backdrop-blur-2xl

p-1

sm:p-1.5

shadow-[0_20px_60px_rgba(0,0,0,.35)]
"
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          className={`
            absolute

            top-1
bottom-1

sm:top-1.5
sm:bottom-1.5

            rounded-full

            bg-gradient-to-r

            from-violet-600

            to-fuchsia-600

            shadow-[0_15px_45px_rgba(139,92,246,.45)]

            ${
              yearly
                ? "left-1/2 right-1.5"
                : "left-1.5 right-1/2"
            }
          `}
        />

        <button
          type="button"
          onClick={() => {
            if (yearly) onToggle();
          }}
          className="
relative

z-10

flex-1

min-w-0

rounded-full

px-3
sm:px-5
lg:px-7

py-2.5
sm:py-3

text-xs
sm:text-sm

font-semibold

transition-all

duration-300
"
        >
          <span
            className={
              yearly
                ? "text-slate-300"
                : "text-white"
            }
          >
            Monthly
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (!yearly) onToggle();
          }}
          className="
relative

z-10

flex-1

min-w-0

rounded-full

px-3
sm:px-5
lg:px-7

py-2.5
sm:py-3

text-xs
sm:text-sm

font-semibold

transition-all

duration-300
"
        >
          <div
            className="
flex

flex-wrap

items-center

justify-center

gap-1
sm:gap-2
"
          >
            <span
              className={
                yearly
                  ? "text-white"
                  : "text-slate-300"
              }
            >
              Yearly
            </span>

            <span
              className="
rounded-full

bg-emerald-500/20

px-2

py-0.5

text-[8px]
sm:text-[10px]

font-bold

uppercase

tracking-wide

text-emerald-300

whitespace-nowrap
"
            >
              Save 20%
            </span>
          </div>
        </button>
      </div>
    </motion.div>
  );
}