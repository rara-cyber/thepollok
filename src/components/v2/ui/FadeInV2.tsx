"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInScale,
} from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right" | "scale";

const variantMap: Record<Direction, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  scale: fadeInScale,
};

interface FadeInV2Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
}

export default function FadeInV2({
  children,
  direction = "up",
  delay = 0,
  duration,
  className = "",
  once = true,
  margin = "-100px",
}: FadeInV2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });

  const baseVariant = variantMap[direction];

  const customVariant: Variants = {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...(typeof baseVariant.visible === "object" && "transition" in baseVariant.visible
          ? baseVariant.visible.transition
          : {}),
        delay,
        ...(duration ? { duration } : {}),
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}
