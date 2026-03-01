"use client";

import { motion } from "framer-motion";
import { RETREAT } from "@/lib/constants";
import FadeInV2 from "../ui/FadeInV2";
import WaveDivider from "../ui/WaveDivider";
import { staggerContainer } from "@/lib/animations";

export default function RetreatV2() {
  return (
    <section
      id="retreat-v2"
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
    >
      {/* Wave divider top */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <WaveDivider color="var(--color-cream-dark)" height={80} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInV2 direction="up">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-coral)] mb-4 block">
              {RETREAT.label}
            </span>
          </FadeInV2>
          <FadeInV2 direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-forest)] mb-4">
              {RETREAT.heading}
            </h2>
          </FadeInV2>
          <FadeInV2 direction="up" delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-[var(--color-moss)]">
              {RETREAT.bannerHeading}
            </p>
          </FadeInV2>
        </div>

        {/* Schedule cards in arc arrangement */}
        <div className="relative mb-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {RETREAT.schedule.map((item, index) => {
              // Create arc effect with varying transforms
              const rotations = [-2, -1, 0, 1, 0, -1, 2];
              const yOffset = [0, 10, 20, 10, 0, 10, 20];

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rotations[index] || 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    rotate: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div
                    className="bg-white p-6 rounded-[var(--radius-lg)] shadow-md hover:shadow-xl transition-shadow duration-300"
                    style={{
                      transform: `translateY(${yOffset[index] || 0}px)`,
                    }}
                  >
                    {/* Time badge */}
                    <div className="inline-block px-3 py-1 bg-[var(--color-coral-light)]/30 rounded-full mb-3">
                      <span className="font-sans text-xs font-medium text-[var(--color-coral-dark)]">
                        {item.time}
                      </span>
                    </div>

                    {/* Activity */}
                    <p className="font-sans text-sm text-[var(--color-earth-700)]">
                      {item.activity}
                    </p>

                    {/* Decorative dot */}
                    <motion.div
                      className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-moss)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Inclusions */}
        <FadeInV2 direction="up" delay={0.3}>
          <div className="bg-[var(--color-forest)] rounded-[var(--radius-xl)] p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-cream)] mb-8">
              What&apos;s Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {RETREAT.inclusions.map((inclusion, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-2 h-2 bg-[var(--color-coral)] rounded-full flex-shrink-0" />
                  <span className="font-sans text-sm text-[var(--color-cream)]/90">
                    {inclusion}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInV2>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-40 -left-20 w-40 h-40 bg-[var(--color-coral-light)] opacity-20 blob-mask animate-float" />
      <div className="absolute bottom-40 -right-20 w-48 h-48 bg-[var(--color-moss-light)] opacity-20 blob-mask-alt animate-float-reverse" />
    </section>
  );
}
