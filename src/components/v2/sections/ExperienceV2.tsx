"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import FadeInV2 from "../ui/FadeInV2";
import { staggerContainer, cardHover } from "@/lib/animations";
import Blob from "../ui/Blob";

export default function ExperienceV2() {
  // Bento grid layout mapping
  const bentoLayout = [
    { col: "col-span-2", row: "row-span-2" }, // Large
    { col: "col-span-1", row: "row-span-1" }, // Small
    { col: "col-span-1", row: "row-span-1" }, // Small
    { col: "col-span-1", row: "row-span-2" }, // Tall
    { col: "col-span-2", row: "row-span-1" }, // Wide
    { col: "col-span-1", row: "row-span-1" }, // Small
  ];

  return (
    <section
      id="experience-v2"
      className="relative py-24 md:py-32 bg-[var(--color-cream-dark)] overflow-hidden"
    >
      {/* Morphing blob background */}
      <div className="absolute top-1/4 left-1/4 opacity-20">
        <Blob color="var(--color-coral-light)" size={400} opacity={0.3} pathIndex={0} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-20">
        <Blob color="var(--color-moss-light)" size={300} opacity={0.25} delay={2} pathIndex={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInV2 direction="up">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-coral)] mb-4 block">
              {EXPERIENCE.label}
            </span>
          </FadeInV2>
          <FadeInV2 direction="up" delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-forest)]">
              {EXPERIENCE.heading}
            </h2>
          </FadeInV2>
        </div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {EXPERIENCE.cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-[var(--radius-lg)] cursor-pointer ${bentoLayout[index].col} ${bentoLayout[index].row}`}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)]/80 via-[var(--color-forest)]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Label */}
                <motion.span
                  className="font-sans text-xs uppercase tracking-[0.15em] text-[var(--color-coral-light)] mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {card.label}
                </motion.span>

                {/* Text */}
                <motion.p
                  className="font-sans text-sm md:text-base text-white/90 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {card.text}
                </motion.p>
              </div>

              {/* Hover accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-coral)]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
