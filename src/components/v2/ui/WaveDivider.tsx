"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface WaveDividerProps {
  color?: string;
  height?: number;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  color = "var(--color-cream)",
  height = 80,
  flip = false,
  className = "",
}: WaveDividerProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{
        height,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <motion.path
        fill={color}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
        d="M0,64 C240,120 480,0 720,64 C960,128 1200,0 1440,64 L1440,120 L0,120 Z"
      />
    </svg>
  );
}

// Alternative wave styles
export function WaveDividerSoft({
  color = "var(--color-cream)",
  height = 100,
  flip = false,
  className = "",
}: WaveDividerProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{
        height,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <motion.path
        fill={color}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 1.8, ease: "easeOut" },
          opacity: { duration: 0.5 },
        }}
        d="M0,40 C360,100 1080,0 1440,60 L1440,120 L0,120 Z"
      />
    </svg>
  );
}

export function WaveDividerCurved({
  color = "var(--color-cream)",
  height = 60,
  flip = false,
  className = "",
}: WaveDividerProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{
        height,
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <motion.path
        fill={color}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 1.2, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
        d="M0,32 Q360,64 720,32 Q1080,0 1440,32 L1440,80 L0,80 Z"
      />
    </svg>
  );
}
