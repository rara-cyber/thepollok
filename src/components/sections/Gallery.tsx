import Image from "next/image";
import { Instagram } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES, FOOTER } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-40 bg-earth-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12 md:mb-20">
          <div className="flex justify-center">
            <SectionLabel>GALLERY</SectionLabel>
          </div>
          <SectionHeading className="mt-2">Moments that stay.</SectionHeading>
        </FadeIn>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
          {GALLERY_IMAGES.map((src, i) => (
            <FadeIn key={src} delay={i * 0.05}>
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <Instagram
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Instagram link */}
        <FadeIn className="text-center mt-10">
          <a
            href={FOOTER.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-[0.1em] text-earth-600 hover:text-terracotta transition-colors"
          >
            Follow along{" "}
            <span className="underline underline-offset-4">@thepollok</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
