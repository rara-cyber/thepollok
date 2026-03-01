"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CurvedLineProps {
  color?: string;
  strokeWidth?: number;
  width?: number;
  height?: number;
  className?: string;
  variant?: "default" | "playful" | "elegant";
}

export default function CurvedLine({
  color = "var(--color-coral)",
  strokeWidth = 3,
  width = 200,
  height = 100,
  className = "",
  variant = "default",
}: CurvedLineProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const paths = {
    default: "M0,50 Q50,0 100,50 T200,50",
    playful: "M0,80 Q40,20 80,80 T160,80 T240,40",
    elegant: "M0,60 C50,20 100,100 150,60 S250,20 300,60",
  };

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={`absolute ${className}`}
      fill="none"
    >
      <motion.path
        d={paths[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
      />
    </svg>
  );
}

// Decorative line that spans full width
export function CurvedLineFull({
  color = "var(--color-coral-light)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      fill="none"
      style={{ height: 60 }}
    >
      <motion.path
        d="M0,30 Q180,10 360,30 T720,30 T1080,30 T1440,30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
      />
    </svg>
  );
}

// Animated dots along a curved path
export function CurvedLineWithDots({
  color = "var(--color-moss)",
  dotColor = "var(--color-coral)",
  className = "",
}: {
  color?: string;
  dotColor?: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const dotPositions = [0, 0.25, 0.5, 0.75, 1];

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 60"
      width={300}
      height={60}
      className={`absolute ${className}`}
      fill="none"
    >
      <motion.path
        d="M0,30 Q75,10 150,30 T300,30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
        transition={{
          pathLength: { duration: 1.5, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
      />
      {dotPositions.map((pos, index) => (
        <motion.circle
          key={index}
          cx={pos * 300}
          cy={30}
          r={4}
          fill={dotColor}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{
            delay: 0.5 + index * 0.1,
            duration: 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}
