import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}
export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div initial={{
  opacity: 0,
  y: 30,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
  once: true,
}}

transition={{
  duration: 0.5,
}}
className="
group

overflow-hidden

rounded-3xl

border
border-white/10

bg-white/[0.04]

backdrop-blur-xl

transition-all
duration-300

hover:border-violet-500/30

hover:bg-white/[0.06]
">
    <button type="button"

onClick={() => setOpen(!open)}
className="
flex

w-full

items-center

justify-between

gap-6

px-6

py-6

text-left
">
    <h3
className="
text-base

sm:text-lg

font-semibold

text-white
"
>
{question }
</h3>
<div
className="
flex

h-10
w-10

items-center

justify-center

rounded-full

border

border-white/10

bg-white/[0.05]
"
>
    {open ? (
  <Minus
    size={18}
    className="text-violet-300"
  />
) : (
  <Plus
    size={18}
    className="text-violet-300"
  />
)}
</div>
</button>
<AnimatePresence>
    {open && ( <motion.div initial={{
  height: 0,
  opacity: 0,
}}

animate={{
  height: "auto",
  opacity: 1,
}}

exit={{
  height: 0,
  opacity: 0,
}}

transition={{
  duration: 0.35,
}} className="
overflow-hidden
">
    <p
className="
px-6

pb-6

text-sm

sm:text-base

leading-8

text-slate-400
"
>
{answer}
</p>
</motion.div>
)}
</AnimatePresence>
</motion.div>
);
}