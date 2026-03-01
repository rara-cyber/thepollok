"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HERO } from "@/lib/constants";
import { staggerContainer, wordVariants } from "@/lib/animations";
import { MagneticButtonStyled } from "../ui/MagneticButton";
import { FloatingBlobsHero } from "../decorative/FloatingBlobs";

export default function HeroV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Split heading into words for stagger animation
  const words = HERO.heading.split(" ");

  return (
    <section
      id="hero-v2"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-forest)]"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-poster.jpg')",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-forest)]/60 via-transparent to-[var(--color-forest)]/80" />
        <div className="absolute inset-0 bg-[var(--color-forest)]/40" />
      </motion.div>

      {/* Floating blobs */}
      <FloatingBlobsHero className="z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--color-coral-light)] mb-6"
        >
          {HERO.label}
        </motion.p>

        {/* Heading with word-by-word reveal */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto"
        >
          {HERO.subheading}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <MagneticButtonStyled href="#story-v2" variant="secondary">
            {HERO.cta}
          </MagneticButtonStyled>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            fill="var(--color-cream)"
            d="M0,64 C240,120 480,0 720,64 C960,128 1200,0 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
