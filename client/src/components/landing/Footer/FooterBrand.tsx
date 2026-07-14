import { motion } from "framer-motion";

import {
  Sparkles,
} from "lucide-react";

import SocialLinks from "./SocialLinks";

export default function FooterBrand() {
  return (
    <motion.div initial={{
  opacity: 0,
  y: 40,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
  once: true,
}}

transition={{
  duration: 0.6,
}}
className="
flex

flex-col

items-start

w-full

max-w-xl
">
    <div
className="
flex

items-center

gap-4
"
>
    <div
className="
flex

h-14
w-14

sm:h-16
sm:w-16

items-center
justify-center

rounded-2xl

border
border-violet-500/20

bg-violet-500/10

backdrop-blur-xl
"
>
    <Sparkles
size={30}
className="text-violet-400"
/>
</div>

{/* Brand Text */}
<div>
  <h2
    className="
      text-xl
      sm:text-2xl

      font-bold

      text-white
    "
  >
    AI Interview Copilot
  </h2>

  <p
    className="
      mt-1

      text-sm

      text-slate-400
    "
  >
    AI Powered Interview Preparation Platform
  </p>
</div>

</div>
<motion.p initial={{
  opacity: 0,
}}

whileInView={{
  opacity: 1,
}}

viewport={{
  once: true,
}}

transition={{
  delay: 0.2,
}} 
className="
mt-8

max-w-md

text-sm

sm:text-base

leading-8

text-slate-400
">
    Practice AI interviews, improve your ATS score,
master communication skills and track your
progress through a premium interview platform
designed for modern developers.
</motion.p>
<motion.div initial={{
  opacity: 0,
  y: 20,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
  once: true,
}}

transition={{
  delay: 0.3,
}}
className="
mt-8

inline-flex

items-center

gap-3

rounded-full

border

border-white/10

bg-white/[0.05]

backdrop-blur-xl

px-5

py-3
">
      <div
    className="
      h-2.5
      w-2.5
      rounded-full
      bg-emerald-400
    "
  />

  <span
    className="
      text-xs
      sm:text-sm
      text-slate-300
    "
  >
    Trusted by developers preparing for top tech companies.
  </span>

</motion.div>

<SocialLinks />

</motion.div>

);
}