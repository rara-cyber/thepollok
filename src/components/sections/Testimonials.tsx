import FadeIn from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-40 bg-earth-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeIn key={testimonial.name} delay={i * 0.15}>
              <div className="bg-earth-50 p-8 md:p-10 relative">
                {/* Decorative quote mark */}
                <span
                  className="font-serif text-8xl text-earth-200 absolute top-4 left-6 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="relative z-10 pt-10">
                  <p className="font-sans font-light text-earth-700 leading-[1.8] text-base italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="font-serif text-sm text-earth-800">
                      — {testimonial.name}
                    </p>
                    <p className="font-sans text-xs text-earth-500 mt-1">
                      {testimonial.detail}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
