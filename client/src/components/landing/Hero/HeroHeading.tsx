import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../animations/hero";

interface HeroHeadingProps {
  title: string;
  highlight: string;
}

export default function HeroHeading({
  title,
  highlight,
}: HeroHeadingProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
     className="
mt-6

w-full

max-w-xl
lg:max-w-2xl
"
    >
      <h1
        className="
font-extrabold

tracking-[-0.04em]

leading-[0.95]

break-words

text-4xl
sm:text-5xl
md:text-5xl
lg:text-6xl
xl:text-7xl
2xl:text-[5rem]
"
      >
        <span className="text-white">
          {title}
        </span>

        <br />

        <span
         className="
animate-gradient

hero-gradient-glow

bg-gradient-to-r

from-violet-400
via-fuchsia-400
via-pink-400
to-cyan-400

bg-clip-text
text-transparent
"
        >
          {highlight}
        </span>
      </h1>
    </motion.div>
  );
}