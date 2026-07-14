import { useState } from "react";

import { motion } from "framer-motion";

import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";

import { pricingPlans } from "./pricingData";
import PricingHeader from "./PricingHeader";


export default function Pricing() {
    const [yearly, setYearly] = useState(false);
    return (
       <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: false,
    amount: 0.05,
    margin: "-100px",
  }}

transition={{
  duration: 0.7,
}} id="pricing" className="
relative

isolate
scroll-mt-24
overflow-hidden

py-24
sm:py-28
lg:py-32
py-24
sm:py-28
lg:py-32
xl:py-36

xl:py-36

"
><div
  className="
    absolute

    inset-0

    -z-20

    bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]

    blur-3xl
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

   max-w-7xl

    px-5

    sm:px-6

    lg:px-8
  "
>
    <PricingHeader />
    
<PricingToggle
  yearly={yearly}
  onToggle={() => setYearly(!yearly)}
/>

<div
  className="
    mt-20

    grid

    w-full

    grid-cols-1

    md:grid-cols-2

    xl:grid-cols-3

    gap-6

    lg:gap-8

    items-stretch
  "
>
  {pricingPlans.map((plan) => (
    <PricingCard
      key={plan.id}
      plan={plan}
      yearly={yearly}
    />
  ))}
</div>

<p
  className="
    mt-16

    text-center

    text-sm

    text-slate-500
  "
>
  Trusted by thousands of developers preparing for Google,
  Microsoft, Amazon, Adobe and top AI companies.
</p>
</div>
</motion.section>
);
}
