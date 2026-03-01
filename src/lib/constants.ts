export const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Retreat", href: "#retreat" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book Now", href: "#booking" },
] as const;

export const HERO = {
  label: "YOGA · PILATES · WELLNESS RETREATS",
  heading: "Come back to yourself.",
  subheading: "Bali wellness retreats for women who are ready for more.",
  cta: "Discover the Journey",
} as const;

export const STORY = {
  label: "OUR STORY",
  heading: "She built this for you.",
  body: [
    "I didn't plan to start a retreat brand. I was a woman who had lost her spark — buried under expectations, routines, and the weight of always being 'fine.'",
    "A trip to Bali changed everything. Not because the place was beautiful — but because for the first time in years, I could hear myself again.",
    "thepollok was born from that moment. It's my invitation to you: come as you are. Leave as the woman you were always meant to be.",
  ],
  signature: "— Nathalie",
} as const;

export const EXPERIENCE = {
  label: "THE EXPERIENCE",
  heading: "Feel everything.",
  cards: [
    {
      label: "MORNING FLOW",
      text: "Start each day grounded. Vinyasa and breathwork as the sun rises over the valley.",
      image: "/images/experience-1.jpg",
    },
    {
      label: "NOURISH",
      text: "Plant-based Balinese cuisine crafted to restore and energize.",
      image: "/images/experience-2.jpg",
    },
    {
      label: "STILLNESS",
      text: "Sound healing, meditation, and journaling to quiet the noise.",
      image: "/images/experience-3.jpg",
    },
    {
      label: "EXPLORE",
      text: "Sacred temples, hidden waterfalls, and moments of wonder.",
      image: "/images/experience-4.jpg",
    },
    {
      label: "CONNECT",
      text: "Deep conversations, shared laughter, and friendships that last beyond the retreat.",
      image: "/images/experience-5.jpg",
    },
    {
      label: "RESTORE",
      text: "Breathe in the ocean air. Let the island hold you while you remember who you are.",
      image: "/images/experience-6.jpg",
    },
  ],
} as const;

export const RETREAT = {
  label: "THE RETREAT",
  bannerHeading: "7 Days. One Transformation.",
  heading: "Your week with us.",
  schedule: [
    { time: "6:30 AM", activity: "Sunrise yoga & breathwork" },
    { time: "8:00 AM", activity: "Nourishing breakfast" },
    { time: "10:00 AM", activity: "Workshop or excursion" },
    { time: "12:30 PM", activity: "Lunch & free time" },
    { time: "4:00 PM", activity: "Pilates or restorative flow" },
    { time: "6:00 PM", activity: "Sunset meditation" },
    { time: "7:00 PM", activity: "Community dinner" },
  ],
  inclusions: [
    "7 nights private villa accommodation",
    "Daily yoga, pilates & breathwork sessions",
    "All meals — plant-based Balinese cuisine",
    "2 excursions (temple visit + waterfall hike)",
    "Sound healing ceremony",
    "Journaling & reflection workshops",
    "Airport transfers",
  ],
} as const;

export const GALLERY_IMAGES = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I came to find peace and found myself. This week changed my life.",
    name: "Sarah",
    detail: "34, London",
  },
  {
    quote:
      "Nathalie creates a space where you can truly let go. I've never felt so held and so free at the same time.",
    name: "Maria",
    detail: "41, Berlin",
  },
  {
    quote:
      "I was skeptical about retreats. Now I tell everyone to go. The yoga, the food, the connections — everything was perfect.",
    name: "Lisa",
    detail: "29, Amsterdam",
  },
] as const;

export const BOOKING = {
  label: "BEGIN YOUR JOURNEY",
  heading: "Your transformation starts with one step.",
  body: "Spaces are limited to 8 women per retreat to keep the experience intimate and personal. Book a free discovery call with Nathalie.",
  cta: "Book Your Call",
} as const;

export const FOOTER = {
  brand: "thepollok",
  tagline: "Yoga · Pilates · Wellness Retreats · Bali",
  copyright: `© ${new Date().getFullYear()} thepollok. All rights reserved.`,
  instagram: "https://instagram.com/thepollok",
  email: "mailto:hello@thepollok.com",
} as const;
