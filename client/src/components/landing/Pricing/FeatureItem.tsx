import { motion } from "framer-motion";

import {
  Check,
  X,
} from "lucide-react";

import type {
  PricingFeature,
} from "./pricingData";

interface FeatureItemProps {
  feature: PricingFeature;
}

export default function FeatureItem({
  feature,
}: FeatureItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
     viewport={{
 once:false,
 amount:0
}}
      transition={{
        duration: 0.35,
      }}
      className="
        group

        flex

        items-center

        gap-4

        rounded-2xl

        border

        border-white/10

        bg-white/[0.03]

        px-4

        py-3

        backdrop-blur-xl

        transition-all

        duration-300

        hover:-translate-y-1

        hover:border-violet-500/30

        hover:bg-white/[0.05]
      "
    >
      <div
        className={`
          flex

          h-10
          w-10

          shrink-0

          items-center

          justify-center

          rounded-full

          transition-all

          duration-300

          ${
            feature.included
              ? "bg-emerald-500/15"
              : "bg-red-500/10"
          }
        `}
      >
        {feature.included ? (
          <Check
            size={18}
            className="text-emerald-400"
          />
        ) : (
          <X
            size={18}
            className="text-red-400"
          />
        )}
      </div>

      <p
        className={`
          flex-1

          text-sm

          leading-7

          transition-colors

          duration-300

          ${
            feature.included
              ? "text-slate-200"
              : "text-slate-500 line-through"
          }

          group-hover:text-white
        `}
      >
        {feature.text}
      </p>
    </motion.div>
  );
}