"use client";

import { motion } from "framer-motion";
import { blobVariants } from "@/lib/animations";

interface BlobProps {
  color?: string;
  size?: number;
  className?: string;
  opacity?: number;
  delay?: number;
  pathIndex?: number;
}

// Pre-defined blob paths for variety
const blobPaths = [
  "M60,15 C80,15 95,30 95,55 C95,80 80,95 55,95 C30,95 15,80 15,55 C15,30 30,15 60,15 Z",
  "M50,10 C75,10 90,25 90,50 C90,75 75,90 50,90 C25,90 10,75 10,50 C10,25 25,10 50,10 Z",
  "M55,20 C78,20 92,38 88,62 C84,85 65,96 42,90 C19,84 8,63 15,40 C22,17 32,20 55,20 Z",
  "M45,15 C70,12 88,30 90,55 C92,80 72,95 47,93 C22,91 8,70 12,45 C16,20 20,18 45,15 Z",
];

export default function Blob({
  color = "var(--color-coral-light)",
  size = 200,
  className = "",
  opacity = 0.4,
  delay = 0,
  pathIndex = 0,
}: BlobProps) {
  const safeIndex = pathIndex % blobPaths.length;

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`absolute ${className}`}
      style={{ opacity }}
      initial="initial"
      animate="animate"
      variants={blobVariants}
      transition={{ delay }}
    >
      <motion.path
        d={blobPaths[safeIndex]}
        fill={color}
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.95, 1] }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          delay,
        }}
      />
    </motion.svg>
  );
}

// Preset blob configurations for common use cases
export function BlobPink({ size = 300, className = "", pathIndex = 0 }: { size?: number; className?: string; pathIndex?: number }) {
  return (
    <Blob
      color="var(--color-coral-light)"
      size={size}
      opacity={0.3}
      className={className}
      pathIndex={pathIndex}
    />
  );
}

export function BlobMoss({ size = 250, className = "", pathIndex = 1 }: { size?: number; className?: string; pathIndex?: number }) {
  return (
    <Blob
      color="var(--color-moss-light)"
      size={size}
      opacity={0.25}
      className={className}
      pathIndex={pathIndex}
    />
  );
}

export function BlobBlush({ size = 200, className = "", pathIndex = 2 }: { size?: number; className?: string; pathIndex?: number }) {
  return (
    <Blob
      color="var(--color-blush)"
      size={size}
      opacity={0.5}
      className={className}
      pathIndex={pathIndex}
    />
  );
}
