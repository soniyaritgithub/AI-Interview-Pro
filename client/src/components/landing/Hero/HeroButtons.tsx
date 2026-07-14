import { motion } from "framer-motion";

import Button from "../../ui/Button/Button";
import { buttonVariants } from "../../../animations/hero";

export default function HeroButtons() {
  return (
   <motion.div
  variants={buttonVariants}
  initial="hidden"
  animate="visible"
 className="
mt-10

flex

flex-col
sm:flex-row

gap-4
sm:gap-5

w-full
sm:w-auto

items-stretch
sm:items-center
"
>
    <Button
  className="
w-full
sm:w-auto

min-w-[190px]

h-12
lg:h-14

px-8
"
>
  Start Free Interview
</Button>
<Button
  variant="outline"
 className="
w-full
sm:w-auto

min-w-[190px]

h-12
lg:h-14

px-8
"
>
  Watch Demo
</Button>
</motion.div>
);
}