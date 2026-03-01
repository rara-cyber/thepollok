import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BOOKING } from "@/lib/constants";

export default function Booking() {
  const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK;

  return (
    <section id="booking" className="py-20 md:py-40 bg-earth-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex justify-center">
            <SectionLabel light>{BOOKING.label}</SectionLabel>
          </div>
          <SectionHeading light className="mt-2">
            {BOOKING.heading}
          </SectionHeading>
          <p className="font-sans font-light text-earth-300 leading-[1.8] text-base mt-6 max-w-xl mx-auto">
            {BOOKING.body}
          </p>
          <div className="mt-10">
            <Button
              variant="primary"
              href={calLink || "#"}
              target={calLink ? "_blank" : undefined}
              rel={calLink ? "noopener noreferrer" : undefined}
            >
              {BOOKING.cta}
            </Button>
          </div>
          {!calLink && (
            <p className="text-earth-500 text-xs mt-6 font-sans">
              Cal.com booking will be enabled via NEXT_PUBLIC_CALCOM_LINK
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
