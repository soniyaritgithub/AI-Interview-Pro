import { motion } from "framer-motion";

import {
  Mail,
  ArrowRight,
} from "lucide-react";
export default function FooterNewsletter() {
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
  delay: 0.3,
}}
className="
relative

w-full

overflow-hidden

rounded-3xl

border
border-white/10

bg-white/[0.04]

backdrop-blur-2xl

p-6
sm:p-7
lg:p-8

shadow-[0_25px_60px_rgba(0,0,0,0.35)]
">
    <div className="
pointer-events-none

absolute

-right-20
-top-20

h-52
w-52

rounded-full

bg-violet-500/20

blur-3xl
"
/>
<div className="
relative

z-10
"
>
    <div className="
inline-flex

items-center

gap-2

rounded-full

border

border-violet-500/20

bg-violet-500/10

px-4

py-2

backdrop-blur-xl
"
>
    <Mail
size={16}
className="text-violet-300"
/>
<span
className="
text-xs

font-semibold

uppercase

tracking-[0.25em]

text-violet-300
"
>
Newsletter
</span>
</div>
<h3 className="
mt-6

text-2xl
sm:text-3xl

font-bold

leading-tight

text-white
"
>Stay Updated with
AI Interview Tips</h3>
<p className="
mt-4

text-sm
sm:text-base

leading-8

text-slate-400
"
>Get interview preparation tips, AI updates, resume advice and product releases delivered directly to your inbox.</p>
<form className="
mt-8

flex

flex-col

gap-4

sm:flex-row
"
><div className="
relative

flex-1
"
><Mail
size={18}
className="
absolute

left-4

top-1/2

-translate-y-1/2

text-slate-500
"
/>
<input type="email"

placeholder="Enter your email"

className="
w-full

rounded-2xl

border

border-white/10

bg-white/[0.04]

py-4

pl-12

pr-4

text-sm

text-white

placeholder:text-slate-500

outline-none

transition-all

focus:border-violet-500

focus:ring-2

focus:ring-violet-500/20
"
/></div>
<motion.button type="submit"

whileHover={{
  scale: 1.03,
}}

whileTap={{
  scale: 0.97,
}} className="
inline-flex

items-center

justify-center

gap-2

rounded-2xl

bg-gradient-to-r

from-violet-600

to-fuchsia-600

px-7

py-4

font-semibold

text-white

shadow-lg

transition-all

hover:shadow-violet-500/30
">Subscribe <ArrowRight size={18} /></motion.button>
</form>
<p className="
mt-5

text-xs

leading-6

text-slate-500
"
>No spam. Unsubscribe anytime. We respect your privacy.</p>
</div>
</motion.div>
  );
}