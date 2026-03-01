"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import FadeInV2 from "../ui/FadeInV2";
import { Quote } from "lucide-react";

export default function TestimonialsV2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials-v2"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[var(--color-cream)] to-[var(--color-blush)]/30 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-coral-light)] opacity-10 blob-mask animate-float-slow" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[var(--color-moss-light)] opacity-10 blob-mask-alt animate-float" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInV2 direction="up">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-coral)] mb-4 block">
              Testimonials
            </span>
          </FadeInV2>
          <FadeInV2 direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-forest)]">
              Words from the heart
            </h2>
          </FadeInV2>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeInV2 key={index} direction="up" delay={index * 0.15}>
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white rounded-[var(--radius-lg)] p-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                  {/* Quote accent */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-12 h-12 text-[var(--color-forest)]" strokeWidth={1} />
                  </div>

                  {/* Quote text */}
                  <p className="font-serif text-lg text-[var(--color-earth-700)] leading-relaxed mb-8 relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 bg-[var(--color-coral-light)]/50 rounded-full flex items-center justify-center">
                      <span className="font-serif text-lg text-[var(--color-forest)]">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans font-medium text-[var(--color-forest)]">
                        {testimonial.name}
                      </p>
                      <p className="font-sans text-sm text-[var(--color-earth-500)]">
                        {testimonial.detail}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[var(--color-coral-light)] via-[var(--color-moss-light)] to-[var(--color-coral-light)] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </div>
              </motion.div>
            </FadeInV2>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[var(--radius-lg)] p-8 shadow-lg"
            >
              {/* Quote accent */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-10 h-10 text-[var(--color-forest)]" strokeWidth={1} />
              </div>

              {/* Quote text */}
              <p className="font-serif text-lg text-[var(--color-earth-700)] leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--color-coral-light)]/50 rounded-full flex items-center justify-center">
                  <span className="font-serif text-lg text-[var(--color-forest)]">
                    {TESTIMONIALS[activeIndex].name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-medium text-[var(--color-forest)]">
                    {TESTIMONIALS[activeIndex].name}
                  </p>
                  <p className="font-sans text-sm text-[var(--color-earth-500)]">
                    {TESTIMONIALS[activeIndex].detail}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[var(--color-coral)] w-8"
                      : "bg-[var(--color-earth-300)] hover:bg-[var(--color-earth-400)]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-forest)] hover:bg-[var(--color-cream)] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-forest)] hover:bg-[var(--color-cream)] transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
