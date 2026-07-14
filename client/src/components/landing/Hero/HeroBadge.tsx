import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { badgeVariants } from "../../../animations/hero";


export default function HeroBadge() {
  return (
  <motion.div
  variants={badgeVariants}
  initial="hidden"
  animate="visible"
    className="
flex
justify-start
lg:justify-start

w-full

-mt-8
"
    >
      <div
        className="
inline-flex
items-center
gap-2

rounded-full

border
border-violet-500/20

bg-white/5
backdrop-blur-xl

px-4
sm:px-5

py-2
sm:py-2.5

text-xs
sm:text-sm

font-medium

text-violet-200

shadow-lg
shadow-violet-500/10

transition-all
duration-300

hover:-translate-y-0.5
hover:border-violet-400/40
hover:bg-white/10
"
      >
        <Sparkles
          className="
            h-4
w-4

sm:h-5
sm:w-5

shrink-0
            text-violet-400
          "
        />

        <span>
          AI Powered Interview Copilot
        </span>
      </div>
    </motion.div>
  );
}