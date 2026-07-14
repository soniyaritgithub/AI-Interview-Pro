import { motion } from "framer-motion";

import PricingBadge from "./PricingBadge";

import FeatureItem from "./FeatureItem";

import type { PricingPlan } from "./pricingData";

interface PricingCardProps {
  plan: PricingPlan;
  yearly: boolean;
}
export default function PricingCard({
  plan,
  yearly,
}: PricingCardProps) {
  return (
    <motion.div initial={{
  opacity: 0,
  y: 50,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

viewport={{
    once:false,
    amount:0.05
}}

transition={{
  duration: 0.6,
}} className="
group

relative

flex

w-full

min-w-0

flex-col

overflow-hidden

rounded-[32px]

border

border-white/10

bg-white/[0.05]

backdrop-blur-2xl

shadow-xl

transition-all

duration-500

hover:-translate-y-3

hover:border-violet-500/30

hover:shadow-[0_25px_70px_rgba(139,92,246,0.30)]
"><div
  className="
    pointer-events-none

    absolute

    inset-0

    rounded-[32px]

    bg-gradient-to-br

    from-violet-500/10

    via-transparent

    to-cyan-500/10
  "
/>
<div
  className="
    pointer-events-none

    absolute

    -top-24
    -right-20

   h-44

w-44

sm:h-56

sm:w-56

    rounded-full

    bg-violet-500/20

    blur-[120px]

    opacity-0

    transition-all

    duration-500

    group-hover:opacity-100
  "
/>
<div
  className="
    relative

    z-10

    flex

    w-full

    min-w-0

    flex-1

    flex-col

    p-6

    sm:p-8

    lg:p-10
  "
>{plan.popular && (
  <div
    className="
      absolute

     top-6

      -translate-x-1/2

      z-30
    "
  >
    <PricingBadge />
  </div>
)}

<h3
  className="
    mt-14

    text-2xl

    font-bold

    text-white
  "
>
  {plan.name}
</h3>
<p
  className="
    mt-4

    text-sm

    leading-7

    text-slate-400
  "
>
  {plan.description}
</p>
<div
  className="
    mt-8

    flex

    items-end

    gap-2
  "
>
    <h2
  className="
    text-4xl

sm:text-5xl

    font-bold

    text-white
  "
>
  ₹{yearly ? plan.yearlyPrice : plan.monthlyPrice}
</h2>
<span
  className="
    mb-1

    text-slate-400
  "
>
  /month
</span></div>
<motion.button
  whileHover={{
    scale: 1.03,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="
    mt-10

    w-full
max-w-full
    rounded-2xl

    bg-gradient-to-r

    from-violet-600

    to-fuchsia-600

    px-6

   py-4

sm:py-4

text-sm

sm:text-base

    font-semibold

    text-white

    transition-all

    duration-300

    hover:shadow-[0_20px_60px_rgba(139,92,246,.40)]
  "
>
  {plan.cta}
</motion.button>
<div
  className="
    my-10

    h-px

    bg-gradient-to-r

    from-transparent

    via-white/10

    to-transparent
  "
/>
<div
  className="
    flex

    w-full

    min-w-0

    flex-col

    gap-4
  "
>
  {plan.features.map((feature) => (
    <FeatureItem
      key={feature.text}
      feature={feature}
    />
  ))}
</div>

<p
className="
mt-10

pt-6

border-t

border-white/10

text-center

text-xs

sm:text-sm

text-slate-500
"
>
  No credit card required • Cancel anytime
</p>
</div></motion.div>
);
}