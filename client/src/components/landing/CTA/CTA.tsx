import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Brain,
  FileSearch,
  Mic,
} from "lucide-react";


export default function CTA() {
  return (
    <motion.section initial={{
  opacity:0,
  y:60,
}}

whileInView={{
  opacity:1,
  y:0,
}}

viewport={{
  once:true,
  amount:.2,
}}

transition={{
  duration:.8,
}} className="
relative

overflow-hidden

py-24

sm:py-28

lg:py-32

xl:py-36
">
   <div
className="
absolute

inset-0

-z-20

bg-[radial-gradient(circle_at_center,rgba(139,92,246,.15),transparent_70%)]

blur-3xl
"
/>
<div
className="
absolute

left-1/2

top-1/2

h-[550px]

w-[550px]

-translate-x-1/2

-translate-y-1/2

rounded-full

bg-violet-500/10

blur-[160px]
"
/>
<div
className="
absolute

inset-0

-z-10

bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]

bg-[size:42px_42px]

opacity-30
"
/>
<div
className="
mx-auto

max-w-[1500px]

px-5

sm:px-6

lg:px-8
"
>
    <motion.div initial={{
scale:.95,
opacity:0,
}}

whileInView={{
scale:1,
opacity:1,
}}

viewport={{
once:true,
}}

transition={{
delay:.2,
duration:.7,
}}
className="
relative

isolate

overflow-hidden

rounded-[40px]

border
border-white/10

ring-1
ring-white/10

bg-white/[0.05]

backdrop-blur-3xl

shadow-[0_30px_80px_rgba(0,0,0,.45)]

px-6
sm:px-10
lg:px-20

py-14
sm:py-16
lg:py-20

text-center
">
    <div
  className="
    pointer-events-none

    absolute

    -right-20
    -top-20

    h-72
    w-72

    rounded-full

    bg-violet-500/20

    blur-[120px]
  "
/>
   <div
className="
inline-flex

items-center

gap-2

rounded-full

border

border-violet-500/20

bg-violet-500/10

px-5

py-2.5
"
>
  <Sparkles
    size={18}
    className="text-violet-400"
  />

  <span>
    AI Powered Career Platform
  </span>
</div>
<h2
className="
mt-8

text-4xl

sm:text-5xl

lg:text-6xl

xl:text-7xl

font-bold

leading-[1.05]

tracking-tight

text-white
"
>
   Your Next Offer Starts

<br />

Today

<br />

<span
  className="
    bg-gradient-to-r

    from-violet-400

    via-fuchsia-400

    to-cyan-400

    bg-clip-text

    text-transparent
  "
>
  With AI Interview Copilot
</span>
</h2>
<p
className="
mx-auto

mt-8

max-w-3xl

text-base

sm:text-lg

leading-8

text-slate-400
"
>Practice realistic AI mock interviews, improve your ATS score,
receive personalized AI feedback and prepare confidently for
Google, Microsoft, Amazon, Adobe and top startups.</p>
<div
  className="
    mt-10

    flex
    flex-wrap

    justify-center

    gap-4
  "
>
  {[
    {
      icon: Brain,
      text: "AI Mock Interviews",
    },
    {
      icon: FileSearch,
      text: "ATS Resume Analysis",
    },
    {
      icon: Mic,
      text: "Communication Feedback",
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.text}
        className="
inline-flex

items-center

gap-2

rounded-full

border

border-white/10

bg-white/5

backdrop-blur-xl

px-5

py-3

text-sm

text-slate-300

transition-all

duration-300

hover:-translate-y-1

hover:border-violet-500/30

hover:bg-white/[0.08]
"
      >
        <Icon
          size={18}
          className="text-violet-400"
        />

        {item.text}
      </div>
    );
  })}
</div>
<div
  className="
    mt-12

    grid

    grid-cols-1

    gap-6

    sm:grid-cols-3
  "
>
  {[
    {
      value: "50K+",
      label: "AI Interviews",
    },
    {
      value: "98%",
      label: "Success Rate",
    },
    {
      value: "4.9★",
      label: "User Rating",
    },
  ].map((item) => (
    <div
      key={item.label}
      className="
group

rounded-3xl

border

border-white/10

bg-white/[0.05]

p-6

backdrop-blur-xl

transition-all

duration-500

hover:-translate-y-2

hover:border-violet-500/30

hover:bg-white/[0.07]
"
    >
      <h3
        className="
          text-3xl

          font-bold

          text-white
        "
      >
        {item.value}
      </h3>

      <p
        className="
          mt-2

          text-slate-400
        "
      >
        {item.label}
      </p>
    </div>
  ))}
</div>
<div
  className="
    mt-12

    flex

    flex-col

    items-center

    justify-center

    gap-5

    sm:flex-row
  "
>
  {/* Primary */}

  <motion.button
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.96,
    }}
    className="
      inline-flex

      items-center

      gap-3

      rounded-full

      bg-gradient-to-r

      from-violet-600

      to-fuchsia-600

      px-8

      py-4

      font-semibold

      text-white

      shadow-xl

      transition-all

      hover:shadow-[0_20px_60px_rgba(139,92,246,0.45)]
    "
  >
    Start Mock Interview

    <ArrowRight size={20} />
  </motion.button>

  {/* Secondary */}

  <motion.button
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.96,
    }}
    className="
      inline-flex

      items-center

      gap-3

      rounded-full

      border

      border-white/10

      bg-white/[0.05]

      px-8

      py-4

      text-white

      backdrop-blur-xl

      hover:bg-white/10
    "
  >
    <Play size={18} />

    Analyze Resume
  </motion.button>
</div>
<div
  className="
    mt-12

    flex

    flex-wrap

    justify-center

    gap-4

    text-sm

    text-slate-400
  "
>
  {[
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Meta",
    "OpenAI",
  ].map((company) => (
    <span
      key={company}
      className="
        flex

        items-center

        gap-4
      "
    >
      {company}

      <span className="last:hidden">
        •
      </span>
    </span>
  ))}
</div>
<div
  className="
mt-10

mx-auto

inline-flex

items-center

gap-3

rounded-full

border

border-emerald-500/20

bg-emerald-500/10

px-6

py-3

backdrop-blur-xl
"
>
  <CheckCircle2
    size={20}
    className="text-emerald-400"
  />

  <span
    className="
      text-sm

      text-slate-300
    "
  >
    Trusted by 50,000+ developers preparing for technical interviews.
  </span>

</div>

</motion.div>

</div>

</motion.section>
);
}