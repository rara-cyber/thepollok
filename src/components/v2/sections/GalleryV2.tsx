"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import FadeInV2 from "../ui/FadeInV2";
import { staggerContainer } from "@/lib/animations";

export default function GalleryV2() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Masonry-like layout with varying sizes and rotations
  const layoutConfig = [
    { rotation: -1, span: "col-span-1 row-span-2" },
    { rotation: 2, span: "col-span-1 row-span-1" },
    { rotation: -1.5, span: "col-span-1 row-span-1" },
    { rotation: 1, span: "col-span-1 row-span-2" },
    { rotation: -0.5, span: "col-span-1 row-span-1" },
    { rotation: 1.5, span: "col-span-1 row-span-1" },
    { rotation: -2, span: "col-span-1 row-span-1" },
    { rotation: 0.5, span: "col-span-1 row-span-2" },
  ];

  return (
    <section
      id="gallery-v2"
      className="relative py-24 md:py-32 bg-[var(--color-cream-dark)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInV2 direction="up">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-coral)] mb-4 block">
              Gallery
            </span>
          </FadeInV2>
          <FadeInV2 direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-forest)]">
              Moments of wonder
            </h2>
          </FadeInV2>
        </div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(150px,auto)]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {GALLERY_IMAGES.map((image, index) => {
            const config = layoutConfig[index];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                className={`relative group overflow-hidden ${config.span}`}
                initial={{ opacity: 0, rotate: config.rotation, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: config.rotation, scale: 1 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Image container */}
                <div className="relative w-full h-full min-h-[200px] rounded-[var(--radius-lg)] overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay with caption on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-forest)]/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Decorative corner accent */}
                  <motion.div
                    className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/50"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[var(--color-coral-light)] opacity-15 blob-mask animate-float-slow" />
    </section>
  );
}
