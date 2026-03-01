import NavbarV2 from "@/components/v2/layout/NavbarV2";
import FooterV2 from "@/components/v2/layout/FooterV2";
import HeroV2 from "@/components/v2/sections/HeroV2";
import StoryV2 from "@/components/v2/sections/StoryV2";
import ExperienceV2 from "@/components/v2/sections/ExperienceV2";
import RetreatV2 from "@/components/v2/sections/RetreatV2";
import GalleryV2 from "@/components/v2/sections/GalleryV2";
import TestimonialsV2 from "@/components/v2/sections/TestimonialsV2";
import BookingV2 from "@/components/v2/sections/BookingV2";

export const metadata = {
  title: "thepollok | Modern Organic - Yoga · Pilates · Wellness Retreats · Bali",
  description:
    "Bali wellness retreats for women who are ready for more. Experience yoga, pilates, and transformation in paradise.",
};

export default function V2Page() {
  return (
    <main className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <NavbarV2 />

      {/* Sections */}
      <HeroV2 />
      <StoryV2 />
      <ExperienceV2 />
      <RetreatV2 />
      <GalleryV2 />
      <TestimonialsV2 />
      <BookingV2 />

      {/* Footer */}
      <FooterV2 />
    </main>
  );
}
