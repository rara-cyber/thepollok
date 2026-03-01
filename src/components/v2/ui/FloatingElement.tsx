"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { floatVariants, floatVariantsSlow } from "@/lib/animations";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  slow?: boolean;
  xOffset?: number;
}

export default function FloatingElement({
  children,
  className = "",
  delay = 0,
  slow = false,
  xOffset = 0,
}: FloatingElementProps) {
  const variants = slow ? floatVariantsSlow : floatVariants;

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      variants={variants}
      style={{
        transform: `translateX(${xOffset}px)`,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
