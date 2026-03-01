import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { RETREAT } from "@/lib/constants";

export default function Retreat() {
  return (
    <section id="retreat" className="bg-earth-100">
      {/* Full-width banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src="/images/retreat-banner.jpg"
          alt="Retreat villa aerial view"
          fill
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-serif font-light text-3xl md:text-5xl lg:text-6xl text-white text-center px-6">
            {RETREAT.bannerHeading}
          </h2>
        </div>
      </div>

      {/* Schedule + Inclusions */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-40">
        <FadeIn className="text-center mb-12 md:mb-20">
          <div className="flex justify-center">
            <SectionLabel>{RETREAT.label}</SectionLabel>
          </div>
          <SectionHeading className="mt-2">{RETREAT.heading}</SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Schedule */}
          <FadeIn>
            <h3 className="font-serif text-lg tracking-[0.1em] uppercase text-earth-700 mb-8">
              A Day With Us
            </h3>
            <div className="space-y-6">
              {RETREAT.schedule.map((item) => (
                <div key={item.time} className="flex gap-6 items-baseline">
                  <span className="font-serif italic text-earth-400 text-sm w-20 shrink-0">
                    {item.time}
                  </span>
                  <span className="font-sans font-light text-earth-700 text-base">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Inclusions */}
          <FadeIn delay={0.15}>
            <h3 className="font-serif text-lg tracking-[0.1em] uppercase text-earth-700 mb-8">
              What&apos;s Included
            </h3>
            <ul className="space-y-4">
              {RETREAT.inclusions.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-earth-400 text-sm mt-0.5">✦</span>
                  <span className="font-sans font-light text-earth-700 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
