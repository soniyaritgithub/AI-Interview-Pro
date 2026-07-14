import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../animations/hero";

interface HeroDescriptionProps {
  description: string;
}

export default function HeroDescription({
  description,
}: HeroDescriptionProps) {
  return (
    <motion.div
  variants={fadeUpVariants}
  initial="hidden"
  animate="visible"
  className="
mt-7

w-full
"
>
    <p
  className="
w-full

sm:max-w-xl
lg:max-w-xl

text-base
sm:text-lg
lg:text-xl

leading-7
lg:leading-8

text-slate-400

text-center
lg:text-left
"
>
  {description}
</p>
</motion.div>
);
}