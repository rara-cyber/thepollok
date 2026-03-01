import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { STORY } from "@/lib/constants";

export default function Story() {
  return (
    <section id="story" className="py-20 md:py-40 bg-earth-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Image — 55% */}
          <FadeIn className="md:col-span-7">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <Image
                src="/images/story-portrait.jpg"
                alt="Nathalie Pollok"
                fill
                className="object-cover img-warm"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </FadeIn>

          {/* Text — 45% */}
          <FadeIn className="md:col-span-5" delay={0.15}>
            <SectionLabel>{STORY.label}</SectionLabel>
            <SectionHeading className="mb-8">{STORY.heading}</SectionHeading>

            <div className="space-y-5">
              {STORY.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans font-light text-earth-700 leading-[1.8] text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-8 font-serif italic text-earth-600 text-lg">
              {STORY.signature}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
