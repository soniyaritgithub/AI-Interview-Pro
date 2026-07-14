import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },

  visible: (index: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      delay: index * 0.15,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export const glowVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

/* ==========================================
   Premium Browser Entrance Animation
   (Linear / Stripe Style)
========================================== */

export const browserVariants: Variants = {
  hidden: {
    opacity: 0,

    y: 60,

    scale: 0.94,

    rotateX: -12,

    filter: "blur(16px)",
  },

  visible: {
    opacity: 1,

    y: 0,

    scale: 1,

    rotateX: 0,

    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};