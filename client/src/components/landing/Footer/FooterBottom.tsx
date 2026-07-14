import { motion } from "framer-motion";

export default function FooterBottom() {
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
  duration: 0.6,
}} className="
mt-10

flex

flex-col

gap-6

border-t
border-white/10

pt-8

lg:flex-row

lg:items-center

lg:justify-between
">
  <div
className="
flex

flex-col

gap-2
"
>
  <p
className="
text-sm

text-slate-400
"
>
© {new Date().getFullYear()} AI Interview Copilot.
All rights reserved.
</p>
<p
className="
text-sm

text-slate-500
"
>
Made with ❤️ using React, TypeScript & Framer Motion.
</p>
</div>
<div
className="
flex

flex-wrap

items-center

gap-5

text-sm
"
>
  <a
href="#"
className="
text-slate-400

transition-all
duration-300

hover:text-violet-300
"
>
Privacy Policy
</a>
<a
href="#"
className="
text-slate-400

transition-all
duration-300

hover:text-violet-300
"
>
Terms of Service
</a>
<a
href="#"
className="
text-slate-400

transition-all
duration-300

hover:text-violet-300
"
>
Cookies
</a>
<a
href="#"
className="
text-slate-400

transition-all
duration-300

hover:text-violet-300
"
>
Contact
</a>
</div>
</motion.div>
);
}