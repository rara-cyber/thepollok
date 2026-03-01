"use client";

import { motion } from "framer-motion";
import { BOOKING } from "@/lib/constants";
import FadeInV2 from "../ui/FadeInV2";
import { MagneticButtonStyled } from "../ui/MagneticButton";
import { WaveDividerCurved } from "../ui/WaveDivider";
import { staggerContainer } from "@/lib/animations";

export default function BookingV2() {
  // Particle positions for decorative effect - deterministic based on index
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: ((i * 17) % 100),
    y: ((i * 23) % 100),
    size: (i % 4) + 2,
    delay: (i % 10) * 0.3,
  }));

  return (
    <section
      id="booking-v2"
      className="relative py-24 md:py-32 bg-gradient-organic overflow-hidden"
    >
      {/* Wave divider top */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <WaveDividerCurved color="var(--color-cream-dark)" height={60} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute bg-[var(--color-coral)] rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Label */}
          <FadeInV2 direction="up">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-coral)] mb-4 block">
              {BOOKING.label}
            </span>
          </FadeInV2>

          {/* Heading */}
          <FadeInV2 direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-forest)] mb-6">
              {BOOKING.heading}
            </h2>
          </FadeInV2>

          {/* Body */}
          <FadeInV2 direction="up" delay={0.2}>
            <p className="font-sans text-lg text-[var(--color-earth-700)] max-w-xl mx-auto mb-10">
              {BOOKING.body}
            </p>
          </FadeInV2>

          {/* CTA with glow effect */}
          <FadeInV2 direction="scale" delay={0.3}>
            <div className="relative inline-block">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-[var(--color-coral)] rounded-full blur-xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "scale(1.3)" }}
              />

              {/* Button */}
              <MagneticButtonStyled
                href="#booking"
                variant="secondary"
                className="relative animate-pulse-glow"
              >
                {BOOKING.cta}
              </MagneticButtonStyled>
            </div>
          </FadeInV2>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-[var(--color-coral-light)] opacity-20 blob-mask animate-float" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[var(--color-moss-light)] opacity-15 blob-mask-alt animate-float-slow" />

      {/* Curved decorative line */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 opacity-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="var(--color-forest)"
          d="M0,40 Q180,60 360,40 T720,40 T1080,40 T1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </section>
  );
}
