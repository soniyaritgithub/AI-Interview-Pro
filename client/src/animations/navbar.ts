import type { Variants } from "framer-motion";

export const drawerVariants: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  staggerChildren: 0.08,
  delayChildren: 0.1,
},
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.25,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};