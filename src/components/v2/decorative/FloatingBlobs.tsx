"use client";

import Blob from "../ui/Blob";

interface FloatingBlobsProps {
  className?: string;
}

interface BlobConfig {
  color: string;
  size: number;
  left: string;
  top: string;
  delay: number;
  opacity: number;
  pathIndex: number;
}

export default function FloatingBlobs({ className = "" }: FloatingBlobsProps) {
  const blobs: BlobConfig[] = [
    {
      color: "var(--color-coral-light)",
      size: 300,
      left: "5%",
      top: "10%",
      delay: 0,
      opacity: 0.3,
      pathIndex: 0,
    },
    {
      color: "var(--color-moss-light)",
      size: 200,
      left: "80%",
      top: "20%",
      delay: 1,
      opacity: 0.25,
      pathIndex: 1,
    },
    {
      color: "var(--color-blush)",
      size: 250,
      left: "15%",
      top: "60%",
      delay: 2,
      opacity: 0.35,
      pathIndex: 2,
    },
    {
      color: "var(--color-coral)",
      size: 180,
      left: "75%",
      top: "70%",
      delay: 1.5,
      opacity: 0.2,
      pathIndex: 3,
    },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: blob.left,
            top: blob.top,
            animationDelay: `${blob.delay}s`,
          }}
        >
          <Blob
            color={blob.color}
            size={blob.size}
            opacity={blob.opacity}
            delay={blob.delay}
            pathIndex={blob.pathIndex}
          />
        </div>
      ))}
    </div>
  );
}

// Smaller variant for sections
export function FloatingBlobsMini({ className = "" }: FloatingBlobsProps) {
  const blobs: BlobConfig[] = [
    {
      color: "var(--color-coral-light)",
      size: 150,
      left: "0%",
      top: "20%",
      delay: 0,
      opacity: 0.25,
      pathIndex: 0,
    },
    {
      color: "var(--color-moss-light)",
      size: 120,
      left: "90%",
      top: "50%",
      delay: 1.5,
      opacity: 0.2,
      pathIndex: 1,
    },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute animate-float-slow"
          style={{
            left: blob.left,
            top: blob.top,
            animationDelay: `${blob.delay}s`,
          }}
        >
          <Blob
            color={blob.color}
            size={blob.size}
            opacity={blob.opacity}
            delay={blob.delay}
            pathIndex={blob.pathIndex}
          />
        </div>
      ))}
    </div>
  );
}

// Hero-specific blobs with parallax effect
export function FloatingBlobsHero({ className = "" }: FloatingBlobsProps) {
  const blobs: (BlobConfig & { depth: number })[] = [
    {
      color: "var(--color-coral-light)",
      size: 400,
      left: "-5%",
      top: "5%",
      delay: 0,
      opacity: 0.2,
      depth: 0.5,
      pathIndex: 0,
    },
    {
      color: "var(--color-moss-light)",
      size: 300,
      left: "85%",
      top: "15%",
      delay: 1,
      opacity: 0.15,
      depth: 0.8,
      pathIndex: 1,
    },
    {
      color: "var(--color-blush-dark)",
      size: 350,
      left: "70%",
      top: "60%",
      delay: 2,
      opacity: 0.25,
      depth: 0.3,
      pathIndex: 2,
    },
    {
      color: "var(--color-sage-light)",
      size: 200,
      left: "10%",
      top: "70%",
      delay: 1.5,
      opacity: 0.2,
      depth: 0.6,
      pathIndex: 3,
    },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: blob.left,
            top: blob.top,
            animationDelay: `${blob.delay}s`,
            animationDuration: `${6 + blob.depth * 4}s`,
          }}
        >
          <Blob
            color={blob.color}
            size={blob.size}
            opacity={blob.opacity}
            delay={blob.delay}
            pathIndex={blob.pathIndex}
          />
        </div>
      ))}
    </div>
  );
}
