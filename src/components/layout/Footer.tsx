import { Instagram, Mail } from "lucide-react";
import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-300 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-serif text-xl tracking-[0.08em] text-earth-200 mb-3">
          {FOOTER.brand}
        </p>
        <p className="text-sm font-sans font-light tracking-wide mb-8">
          {FOOTER.tagline}
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <a
            href={FOOTER.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-earth-100 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href={FOOTER.email}
            className="hover:text-earth-100 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
        </div>

        <div className="w-full h-px bg-earth-700 mb-8" />

        <p className="text-xs font-sans tracking-wide text-earth-500">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
