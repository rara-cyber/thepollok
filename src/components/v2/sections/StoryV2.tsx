"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STORY } from "@/lib/constants";
import FadeInV2 from "../ui/FadeInV2";
import { FloatingBlobsMini } from "../decorative/FloatingBlobs";

export default function StoryV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      id="story-v2"
      ref={containerRef}
      className="relative py-24 md:py-32 bg-[var(--color-cream)] overflow-hidden"
    >
      {/* Decorative blobs */}
      <FloatingBlobsMini className="opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div style={{ y: imageY }}>
            <FadeInV2 direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)]">
                  <img
                    src="/images/story-portrait.jpg"
                    alt="Nathalie, founder of thepollok"
                    className="w-full h-full object-cover img-warm"
                  />
                </div>
                {/* Subtle accent shape */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--color-coral-light)] opacity-20 -z-10 rounded-[var(--radius-xl)]"
                />
              </div>
            </FadeInV2>
          </motion.div>

          {/* Text Column */}
          <div>
            <FadeInV2 direction="right">
              {/* Label */}
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-coral)] mb-4 block">
                {STORY.label}
              </span>

              {/* Heading */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-forest)] mb-6 leading-tight">
                {STORY.heading}
              </h2>

              {/* Body paragraphs */}
              <div className="space-y-4 mb-8">
                {STORY.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-sans text-base text-[var(--color-earth-700)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <p className="font-serif text-lg text-[var(--color-moss)] italic">
                {STORY.signature}
              </p>
            </FadeInV2>
          </div>
        </div>
      </div>
    </section>
  );
}
