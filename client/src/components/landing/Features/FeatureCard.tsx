import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  index: number;
}
export default function FeatureCard({
  title,
  description,
  icon: Icon,
  accent,
  index,
}: FeatureCardProps) {
    return (
      <motion.div
  initial={{
    opacity: 0,
    y: 40,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 0.55,
    delay: index * 0.08,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-white/[0.05]
    backdrop-blur-2xl
    p-6
    sm:p-7
    lg:p-8
    min-h-[260px]
    sm:min-h-[280px]
    lg:min-h-[300px]
    transition-all
    duration-500
    hover:-translate-y-3
    hover:scale-[1.02]
    hover:border-violet-500/30
    hover:bg-white/[0.06]
  "
>
  {/* Glow */}
<div
  className="
    absolute

    -right-10
    -top-10

    h-32
    w-32

    rounded-full

    blur-3xl

    opacity-0

    scale-75

    group-hover:opacity-40
    group-hover:scale-100

    transition-all
    duration-700
  "
  style={{
    background: accent,
  }}
/>
 {/* Step 3 - Icon wrapper yahan aayega */}

 {/* Icon Wrapper */}
<div
  className="
    relative

    flex

    h-16
    w-16

    items-center
    justify-center

    rounded-2xl

    border
    border-white/10

    bg-white/5
  "
  style={{
    color: accent,
  }}
>
  <motion.div
    whileHover={{
      rotate: 8,
      scale: 1.12,
    }}
    transition={{
      duration: 0.25,
    }}
  >
    <Icon size={30} />
  </motion.div>
</div>

  {/* Step 4 - Title yahan aayega */}
  {/* Title */}
<motion.h3
  whileHover={{
    x: 3,
  }}
  className="
    mt-8

    text-xl
    sm:text-2xl

    font-semibold

    text-white
  "
>
  {title}
</motion.h3>

{/* Description */}
<p
  className="
    mt-4

    text-sm
    sm:text-base

    leading-7

    text-slate-400
  "
>
  {description}
</p>

{/* Animated Border */}
<div
  className="
    mt-8

    h-[2px]

    overflow-hidden

    rounded-full

    bg-white/10
  "
>
  <motion.div
    initial={{
      width: 0,
    }}
    whileInView={{
      width: "100%",
    }}
    viewport={{
      once: true,
    }}
    transition={{
      delay: index * 0.12,
      duration: 0.8,
    }}
    className="
      h-full

      rounded-full
    "
    style={{
      background: accent,
    }}
  />
</div>

</motion.div>
);
}
        