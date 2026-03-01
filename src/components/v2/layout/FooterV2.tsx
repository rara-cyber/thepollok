"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { FOOTER } from "@/lib/constants";
import { WaveDividerSoft } from "../ui/WaveDivider";

export default function FooterV2() {
  return (
    <footer className="relative bg-[var(--color-forest)] text-[var(--color-cream)]">
      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <WaveDividerSoft color="var(--color-cream)" height={80} flip />
      </div>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-0.5 bg-[var(--color-coral)] mx-auto mb-8"
          />

          {/* Brand */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-2xl tracking-[0.08em] text-[var(--color-cream)] mb-3"
          >
            {FOOTER.brand}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm font-sans font-light tracking-wide text-[var(--color-cream)]/70 mb-8"
          >
            {FOOTER.tagline}
          </motion.p>

          {/* Social links with organic shapes */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mb-10"
          >
            <SocialLink href={FOOTER.instagram} icon={<Instagram size={18} strokeWidth={1.5} />} label="Instagram" />
            <SocialLink href={FOOTER.email} icon={<Mail size={18} strokeWidth={1.5} />} label="Email" />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full h-px bg-[var(--color-cream)]/20 mb-8 origin-center"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xs font-sans tracking-wide text-[var(--color-cream)]/40"
          >
            {FOOTER.copyright}
          </motion.p>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-moss)] opacity-20 blob-mask animate-float-slow"
        />
        <div
          className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--color-coral-dark)] opacity-10 blob-mask-alt animate-float"
        />
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="relative w-12 h-12 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {/* Organic background on hover */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-coral)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderRadius: "40% 60% 60% 40%" }}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />
      <span className="relative z-10 text-[var(--color-cream)]/80 group-hover:text-white transition-colors">
        {icon}
      </span>
    </motion.a>
  );
}
