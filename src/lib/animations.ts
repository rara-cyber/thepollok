import type { Variants, Transition } from "framer-motion";

// ─── Spring Configurations ─────────────────────────────────────────────────────
export const springGentle: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 15,
};

export const springStiff: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

// ─── Fade Variants ──────────────────────────────────────────────────────────────
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Stagger Container ──────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ─── Word-by-Word Animation ─────────────────────────────────────────────────────
export const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Float Animation ────────────────────────────────────────────────────────────
export const floatVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const floatVariantsSlow: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-15, 15, -15],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// ─── Blob Animation ─────────────────────────────────────────────────────────────
export const blobVariants: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: [1, 1.05, 1],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// ─── Card Hover ─────────────────────────────────────────────────────────────────
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: springGentle,
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: springBouncy,
  },
};

// ─── Magnetic Button ────────────────────────────────────────────────────────────
export const magneticHover = (x: number, y: number) => ({
  x: x * 0.3,
  y: y * 0.3,
  transition: springStiff,
});

// ─── Path Draw (for SVG lines) ──────────────────────────────────────────────────
export const pathDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

// ─── Scale Reveal ───────────────────────────────────────────────────────────────
export const scaleReveal: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Slide In Variants ──────────────────────────────────────────────────────────
export const slideInFromBottom: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Parallax ───────────────────────────────────────────────────────────────────
export const parallaxY = (offset: number): Variants => ({
  visible: {
    y: offset,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
});
