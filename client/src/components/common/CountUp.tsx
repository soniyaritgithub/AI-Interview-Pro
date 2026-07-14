import {
  motion,
  useMotionValueEvent,
} from "framer-motion";

import { useRef } from "react";

import useCountUp from "../../hooks/useCountUp";

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  value,
  suffix = "",
  className = "",
}: CountUpProps) {
  const rounded = useCountUp(value);

  const spanRef = useRef<HTMLSpanElement>(null);

  useMotionValueEvent(
    rounded,
    "change",
    (latest) => {
      if (!spanRef.current) return;

      spanRef.current.textContent =
        `${latest}${suffix}`;
    }
  );

  return (
    <motion.span
      ref={spanRef}
      className={className}
      suppressHydrationWarning
    >
      0{suffix}
    </motion.span>
  );
}