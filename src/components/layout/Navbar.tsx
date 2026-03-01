"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-earth-100/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 md:h-20">
        {/* Brand */}
        <a
          href="#hero"
          className={`font-serif text-lg tracking-[0.08em] transition-colors duration-500 ${
            scrolled ? "text-earth-800" : "text-white"
          }`}
        >
          thepollok
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.label === "Book Now" ? (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-sans uppercase tracking-[0.15em] px-5 py-2 border transition-all duration-500 ${
                  scrolled
                    ? "border-earth-800 text-earth-800 hover:bg-earth-800 hover:text-earth-100"
                    : "border-white text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-sans uppercase tracking-[0.12em] transition-colors duration-500 hover:opacity-70 ${
                  scrolled ? "text-earth-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-500 ${
            scrolled ? "text-earth-800" : "text-white"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 bg-earth-100 z-[100] flex flex-col items-center justify-center gap-8 transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-earth-800"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="font-serif text-2xl text-earth-800 tracking-wide hover:text-terracotta transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
