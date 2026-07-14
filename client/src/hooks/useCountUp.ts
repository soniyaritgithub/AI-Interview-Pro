import {
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

export default function useCountUp(
  value: number
) {
  // Motion value starts from 0
  const count = useMotionValue(0);

  // Round value to nearest integer
  const rounded = useTransform(
    count,
    (latest) => Math.round(latest)
  );

  useEffect(() => {
    // Animate from 0 → target value
    const controls = animate(
      count,
      value,
      {
        duration: 1.6,
        ease: "easeOut",
      }
    );

    // Cleanup
    return () => controls.stop();
  }, [count, value]);

  return rounded;
}