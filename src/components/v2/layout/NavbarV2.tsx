"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MagneticButton from "../ui/MagneticButton";

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-v2");
    if (!hero) {
      // Fallback to scroll position
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Brand with decorative blob */}
        <a
          href="#hero-v2"
          className="relative group"
        >
          <motion.div
            className="absolute -inset-3 rounded-[var(--radius-md)] bg-[var(--color-coral-light)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{ borderRadius: "40% 60% 60% 40%" }}
          />
          <span
            className={`relative font-serif text-xl tracking-[0.08em] transition-colors duration-500 ${
              scrolled ? "text-[var(--color-forest)]" : "text-white"
            }`}
          >
            thepollok
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link, index) =>
            link.label === "Book Now" ? (
              <MagneticButton key={link.href} strength={0.2}>
                <a
                  href={link.href}
                  className={`relative px-6 py-3 rounded-[var(--radius-md)] font-sans text-sm uppercase tracking-[0.12em] transition-all duration-300 overflow-hidden ${
                    scrolled
                      ? "bg-[var(--color-forest)] text-[var(--color-cream)] hover:bg-[var(--color-moss-dark)]"
                      : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                  }`}
                  style={{ borderRadius: "24px" }}
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              </MagneticButton>
            ) : (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative font-sans text-sm uppercase tracking-[0.12em] transition-colors duration-500 group ${
                  scrolled ? "text-[var(--color-earth-700)]" : "text-white/90"
                }`}
              >
                {link.label}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--color-coral)] transition-all duration-300 ${
                    scrolled ? "" : "bg-white/50"
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[var(--color-cream)] text-[var(--color-forest)]"
              : "bg-white/10 text-white"
          }`}
          whileTap={{ scale: 0.95 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile fullscreen overlay with organic design */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-cream)] z-[100] flex flex-col items-center justify-center"
          >
            {/* Decorative blobs */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-coral-light)] opacity-20 blob-mask animate-float" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-moss-light)] opacity-20 blob-mask-alt animate-float-reverse" />

            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-earth-200)] text-[var(--color-forest)]"
              whileTap={{ scale: 0.95 }}
              aria-label="Close menu"
            >
              <X size={20} />
            </motion.button>

            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className={`font-serif text-2xl text-[var(--color-forest)] tracking-wide hover:text-[var(--color-coral)] transition-colors ${
                    link.label === "Book Now"
                      ? "mt-4 px-8 py-3 bg-[var(--color-forest)] text-[var(--color-cream)] rounded-[var(--radius-md)] hover:bg-[var(--color-moss-dark)] hover:text-white"
                      : ""
                  }`}
                  style={link.label === "Book Now" ? { borderRadius: "24px" } : {}}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
