"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background image with zoom */}
      <div className={`absolute inset-0 ${prefersReducedMotion ? "" : "hero-zoom"}`}>
        <Image
          src="/images/hero-poster.jpg"
          alt="Bali wellness retreat"
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-serif text-sm tracking-[0.2em] uppercase text-white/80 mb-6"
        >
          {HERO.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl"
        >
          {HERO.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-sans font-light text-lg text-white/80 mt-6 max-w-xl"
        >
          {HERO.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10"
        >
          <Button variant="ghost-light" href="#story">
            {HERO.cta}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/60" size={24} strokeWidth={1} />
        </motion.div>
      </div>
    </section>
  );
}
