import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-40 bg-earth-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12 md:mb-20">
          <div className="flex justify-center">
            <SectionLabel>{EXPERIENCE.label}</SectionLabel>
          </div>
          <SectionHeading className="mt-2">{EXPERIENCE.heading}</SectionHeading>
        </FadeIn>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[320px]">
          {EXPERIENCE.cards.map((card, i) => {
            // Asymmetric column spans for editorial feel:
            // Row 1: 5 cols, 4 cols, 3 cols
            // Row 2: 3 cols, 4 cols, 5 cols
            const spanClasses = [
              "md:col-span-5",
              "md:col-span-4",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-4",
              "md:col-span-5",
            ][i];

            return (
              <FadeIn
                key={card.label}
                delay={i * 0.08}
                className={`relative overflow-hidden group ${spanClasses}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover img-warm transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="font-serif text-xs tracking-[0.2em] uppercase text-white/80 mb-1">
                      {card.label}
                    </p>
                    <p className="font-sans font-light text-sm text-white/90 leading-relaxed max-w-xs">
                      {card.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
