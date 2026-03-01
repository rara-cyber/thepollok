# Product Requirements Document (PRD)

## thepollok — Lifestyle Retreat Landing Page (MVP)

**Version:** 1.0  
**Date:** March 1, 2026  
**Status:** MVP — Design & Frontend Only

---

## 1. Project Overview

### 1.1 What is thepollok?

thepollok is a lifestyle retreat brand founded by Nathalie Pollok, a yoga, pilates, and lagree coach focused on women's empowerment. The brand hosts wellness retreats in Bali that blend yoga, pilates, mindfulness, and self-discovery for women aged 26–50.

### 1.2 Brand Philosophy

> "Do you want to travel with me? Not just to beautiful places. But back to yourself. To the woman you were meant to be. To the life you feel inside. The spark that might have become quiet… But you still feel it. A small voice saying: There is more."

The brand is deeply personal, emotional, and rooted in feminine strength. It's not about fitness — it's about reconnection.

### 1.3 MVP Scope

This is a **single-page landing page MVP** to present to the client. It is **frontend only** — no backend, no authentication, no payments. We use placeholder/mockup content for now. The goal is to nail the design, layout, and emotional feel so the client can approve it before we build out the full product.

**What we ARE building:**
- A single responsive landing page with 7 sections
- Smooth scroll navigation
- Embedded Cal.com booking widget
- Placeholder images and mockup copy
- Mobile-first responsive design

**What we are NOT building yet:**
- Supabase backend
- Stripe payments
- User authentication
- CMS or admin panel
- Instagram API integration (we mock this with static images)

---

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| UI Library | React 18+ |
| Styling | Tailwind CSS 3+ with daisyUI |
| Booking | Cal.com embed (iframe or embed snippet) |
| Deployment | Vercel |
| Package Manager | npm or pnpm |

### 2.1 Project Setup Instructions

```bash
npx create-next-app@latest thepollok --typescript --tailwind --app --src-dir
cd thepollok
npm install daisyui
```

Configure `tailwind.config.ts` with the custom earth-tone theme (see Section 4).

### 2.2 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Main landing page (assembles all sections)
│   └── globals.css         # Tailwind imports + custom CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed top navigation
│   │   └── Footer.tsx      # Footer with links + socials
│   ├── sections/
│   │   ├── Hero.tsx        # Fullscreen video hero
│   │   ├── Story.tsx       # About Nathalie / brand story
│   │   ├── Experience.tsx  # What guests experience
│   │   ├── Retreat.tsx     # Yoga/retreat details + schedule
│   │   ├── Gallery.tsx     # Photo gallery / IG grid
│   │   ├── Testimonials.tsx # Social proof quotes
│   │   └── Booking.tsx     # CTA + Cal.com embed
│   └── ui/
│       ├── SectionLabel.tsx    # Small uppercase label ("OUR STORY")
│       ├── SectionHeading.tsx  # Large editorial heading
│       ├── FadeIn.tsx          # Scroll-triggered fade-in wrapper
│       └── ParallaxImage.tsx   # Subtle parallax scroll image
├── lib/
│   └── constants.ts        # Mockup text content, image paths
└── public/
    ├── images/             # Placeholder images (use Unsplash)
    │   ├── hero-poster.jpg
    │   ├── story-portrait.jpg
    │   ├── experience-1.jpg
    │   ├── experience-2.jpg
    │   ├── experience-3.jpg
    │   ├── retreat-1.jpg
    │   ├── retreat-2.jpg
    │   ├── gallery-1.jpg through gallery-8.jpg
    │   └── testimonial-bg.jpg
    └── video/
        └── hero.mp4        # Placeholder hero video
```

---

## 3. Design Direction

### 3.1 Design Reference

The primary design reference is **COMO Shambhala Estate** (https://www.comohotels.com/bali/como-shambhala-estate). Study this page carefully before implementing. Key patterns to replicate:

1. **Full-width hero** with video/image background and centered minimal text overlay
2. **Editorial layout** — alternating image + text blocks, asymmetric grid compositions
3. **Generous whitespace** — sections breathe with large padding (120px–200px vertical padding between sections)
4. **Typography-driven design** — elegant serif headings, thin sans-serif body text
5. **Image-forward** — photography does the heavy lifting, text is minimal
6. **Subtle animations** — fade-in on scroll, no flashy transitions
7. **Muted earth palette** — warm browns, creams, sage greens, soft whites

### 3.2 Design Principles

- **Let visuals speak.** Every section should be at least 60% imagery, 40% text or less.
- **Minimalism = luxury.** Fewer words, more space, larger images.
- **Slow and intentional.** The page should feel like taking a deep breath. No urgency, no aggressive CTAs.
- **Feminine but not soft.** Strong, grounded, earthy — not pastel pink.
- **Mobile-first.** The majority of the target audience will view on mobile via Instagram links.

### 3.3 Aesthetic Direction

- **Tone:** Luxury wellness / editorial / organic natural
- **Mood:** Like flipping through a high-end wellness magazine at a Balinese villa
- **Unforgettable element:** The seamless flow from cinematic hero video into the story — it should feel like entering a different world

### 3.3 Design Manifesto — "Quiet Earth"

> This is the visual philosophy that should guide every design decision. Read it, internalize it, and let it inform spacing, animation timing, color choices, and layout instincts.

**Quiet Earth** is a design philosophy rooted in stillness and warmth. It draws from the visual language of Balinese landscapes — volcanic stone, sun-dried clay, morning mist over rice terraces, the grain of teak wood. Every element on the page should feel as if it was placed there by someone who took a very long time to decide.

Space is the primary material. Not emptiness — but intentional breathing room. The way a Japanese garden uses negative space to make a single stone feel monumental. Sections should feel like turning pages in a coffee table book — each one a composition that could stand alone as a photograph.

Color is muted but alive. Not desaturated to the point of lifelessness — warm, as if light is always filtering through linen curtains at golden hour. Earth tones should feel rich, not muddy. The palette should evoke the specific warmth of Bali: volcanic soil, dried palm fronds, unbleached cotton, weathered bamboo.

Typography whispers. Headlines are thin, spaced wide, and breathe. Body text is light, never dense. Text is a secondary element — the images, the space, the rhythm of the scroll should communicate first. Words arrive to confirm what the visitor already feels.

Motion is slow and intentional. Nothing bounces. Nothing springs. Elements arrive like incense smoke — they drift into place. Scroll animations should feel like a slow exhale. The page should make you want to scroll slowly.

Texture matters. Subtle grain overlays, soft shadows, and the occasional organic line (a hand-drawn divider, an imperfect circle) prevent the page from feeling sterile. This is digital craft that remembers the physical world.

**The unforgettable detail:** When someone lands on this page, they should feel their shoulders drop. That's the design goal. Not "wow" — but "ahh."

### 3.4 Anti-AI-Slop Guidelines

The following patterns are explicitly forbidden. They make websites look AI-generated and generic:

- **No Inter, Roboto, Arial, or system fonts** — use distinctive serif + sans-serif pairings
- **No purple gradients on white backgrounds** — this is a Bali retreat, not a SaaS dashboard
- **No evenly-spaced symmetrical grids everywhere** — use asymmetry, overlap, and grid-breaking
- **No generic hero with centered text + gradient overlay** — the hero should have compositional intention
- **No card-grid-of-three pattern** — vary layouts between sections, use editorial asymmetry
- **No heavy drop shadows on cards** — if shadows exist, they should be barely visible and warm
- **No emoji or generic icons** — use minimal symbols (✦, ·, —) or custom SVG if needed
- **No overuse of rounded corners** — the COMO reference uses sharp or very subtle rounding
- **No cookie-cutter component library look** — DaisyUI is for utility, not for defining the aesthetic

**Instead, aim for:**
- Subtle grain/noise texture overlay on backgrounds (CSS `background-image` with SVG noise)
- Organic touches: a hand-drawn horizontal divider, an imperfect circle motif
- Unexpected spatial choices: an image that bleeds off one edge, text aligned to an unusual grid line
- Layered depth: elements with slightly different scroll speeds, overlapping image + text compositions
- Warm photography filters applied via CSS (slight desaturation + warm tone shift)

---

## 4. Design System

### 4.1 Color Palette

Define these as CSS variables in `globals.css` AND as a custom daisyUI theme in `tailwind.config.ts`:

```
Primary Colors:
- Warm Cream (background):    #F5F0E8
- Deep Earth (headings):      #3D3229
- Warm Tan (accents):         #C4A882
- Soft Sage (secondary):      #A8B5A0

Neutral Colors:
- Off White (alt background): #FAF8F4
- Medium Brown (body text):   #6B5E52
- Light Sand (borders):       #E8DFD1
- Dark Brown (nav/footer):    #2C2420

Accent:
- Muted Gold (CTAs/buttons):  #B8976A
- Terracotta (hover states):  #C4835A
```

### 4.2 Typography

Use Google Fonts. Import in `layout.tsx` using `next/font/google`. The combination should feel editorial and luxurious — like a high-end travel magazine, not a tech startup.

> CRITICAL: Do NOT use Inter, Roboto, Arial, Open Sans, Poppins, Space Grotesk, or any overused system font. These immediately make a page look AI-generated. The font pairing must feel like a deliberate choice by a human designer.

**Primary pairing:**

```
Headings:     "Cormorant Garamond" — weight 300 (light), 400, 500
              Elegant serif with high contrast. Used for all section headings.
              Letter-spacing: 0.04em for uppercase labels, normal for headings.
              NEVER use bold weight — rely on size and spacing for hierarchy.

Body Text:    "Karla" — weight 300 (light), 400
              Clean, modern sans-serif. Warm and readable.
              Line-height: 1.8 for body paragraphs.

Accent/Label: "Cormorant Garamond" — weight 400, uppercase, tracked out
              Used for small section labels like "OUR STORY", "THE EXPERIENCE"
              Letter-spacing: 0.2em, font-size: 12–14px
              Always preceded by a thin horizontal line: — OUR STORY
```

**Alternative pairing (if a more unique feel is desired):**

```
Headings:     "Playfair Display" — more dramatic serifs, strong editorial feel
Body Text:    "Jost" — geometric sans with personality, avoids generic look
```

**Typography rules:**
- All text should feel airy — never dense or heavy
- Max content width for text: max-w-xl or max-w-2xl
- Headlines: text-3xl md:text-5xl lg:text-6xl, font-light, tracking-wide
- Line heights: leading-relaxed (1.625) for body, leading-tight (1.25) for headlines

### 4.3 Spacing Scale

Use Tailwind's spacing but with these section-level guidelines:

```
Section vertical padding:     py-24 (96px) mobile, py-40 (160px) desktop
Between heading and content:  mb-12 to mb-16
Between content blocks:       gap-8 to gap-12
Max content width:            max-w-6xl (1152px) for text sections
Full-bleed images:            w-full, no max-width constraint
```

### 4.4 Textures & Atmospheric Details

**Grain overlay (global):** Apply a subtle film grain across the entire page using a CSS pseudo-element or a fixed overlay div. This prevents the page from feeling sterile/digital.

```css
/* Add to globals.css */
.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}
```

**Section transitions:** Instead of hard-cut between sections, use subtle gradient fades between background colors. E.g., `--color-cream` into `--color-warm-white` should feel seamless.

**Organic dividers:** Between some sections, instead of a hard line, use a thin SVG wave or hand-drawn style horizontal line. Keep it very subtle — 1px, `--color-sand` colored. This adds craft and warmth.

**Image warm filter (apply to all images):**
```css
.img-warm {
  filter: saturate(0.9) brightness(1.02) sepia(0.05);
}
```

### 4.5 Image Treatment

- All images should use `object-cover` for consistent aspect ratios
- Use subtle `brightness-95` or a warm overlay for color consistency
- Rounded corners: `rounded-none` (sharp edges = luxury editorial feel)
- No borders or shadows on images

### 4.5 Buttons

```
Primary CTA:
- Background: Muted Gold (#B8976A)
- Text: White, uppercase, Karla 400, letter-spacing 0.15em, text-sm
- Padding: px-10 py-4
- Border-radius: rounded-none (sharp rectangle)
- Hover: Background shifts to Terracotta (#C4835A), transition-all duration-500
- No box-shadow

Secondary/Ghost:
- Background: transparent
- Border: 1px solid Deep Earth (#3D3229)
- Text: Deep Earth, uppercase, tracked
- Hover: Background fills with Deep Earth, text turns cream
```

### 4.6 Animations

Use CSS animations or framer-motion. Keep it subtle:

```
Fade-in on scroll:
- Elements fade from opacity-0 to opacity-100
- Translate from y-8 (32px below) to y-0
- Duration: 800ms, ease-out
- Stagger children by 150ms delay
- Trigger: when element enters viewport (IntersectionObserver or framer-motion whileInView)

Parallax images:
- Subtle only — background-attachment: fixed OR translateY at 0.1x scroll speed
- Only on desktop (disable on mobile for performance)

Hero video:
- Auto-plays muted, loops
- Slow zoom-in effect (scale from 1.0 to 1.05 over 20 seconds, CSS animation)

Page transitions:
- None needed for MVP (single page)
```

### 4.7 DaisyUI Configuration

In `tailwind.config.ts`, configure a custom daisyUI theme:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Karla", "sans-serif"],
      },
      colors: {
        earth: {
          50: "#FAF8F4",
          100: "#F5F0E8",
          200: "#E8DFD1",
          300: "#D4C5AD",
          400: "#C4A882",
          500: "#B8976A",
          600: "#8B7355",
          700: "#6B5E52",
          800: "#3D3229",
          900: "#2C2420",
        },
        sage: {
          DEFAULT: "#A8B5A0",
          light: "#C2CCBC",
        },
        terracotta: "#C4835A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        thepollok: {
          primary: "#B8976A",
          secondary: "#A8B5A0",
          accent: "#C4835A",
          neutral: "#3D3229",
          "base-100": "#F5F0E8",
          "base-200": "#FAF8F4",
          "base-300": "#E8DFD1",
          "base-content": "#3D3229",
          info: "#A8B5A0",
          success: "#A8B5A0",
          warning: "#C4A882",
          error: "#C4835A",
        },
      },
    ],
  },
};

export default config;
```

---

## 5. Page Sections — Detailed Specs

The page is ONE continuous scroll with 7 distinct sections plus a navbar and footer. Each section below includes: purpose, layout, content, and responsive behavior.

---

### 5.1 Navbar

**Purpose:** Minimal fixed navigation for anchor links to each section.

**Layout:**
- Fixed at top, `z-50`
- Background: transparent on hero, transitions to `bg-earth-100/95 backdrop-blur-md` after scrolling past hero
- Height: `h-16` mobile, `h-20` desktop
- Left: Brand name "thepollok" in Cormorant Garamond, lowercase, text-lg, tracked
- Right: Navigation links (desktop) or hamburger menu (mobile)
- Links: Story, Experience, Retreat, Gallery, Book Now

**Behavior:**
- Background changes on scroll (use IntersectionObserver on hero section)
- Text color: white on hero (transparent nav), dark earth after scroll
- "Book Now" link is styled as a small bordered button
- Mobile: hamburger icon opens a fullscreen overlay menu with centered links on cream background

**Mockup Content:**
```
Brand: thepollok
Links: Story | Experience | Retreat | Gallery | Book Now
```

---

### 5.2 Hero Section

**Purpose:** Immediate emotional impact. This is the first impression — cinematic, immersive, aspirational.

**Layout:**
- Full viewport height: `h-screen` (100vh)
- Background: auto-playing muted video, looped, with `object-cover`
- Dark overlay: `bg-black/30` gradient overlay for text readability
- Content: vertically and horizontally centered
- Subtle slow zoom animation on the video (scale 1.0 to 1.05, 20s, infinite alternate)

**Content (centered):**
```
Small label:    "YOGA · PILATES · WELLNESS RETREATS"
               (Cormorant Garamond, uppercase, tracked, text-sm, text-white/80)

Main heading:   "Come back to yourself."
               (Cormorant Garamond, font-light, text-5xl md:text-7xl, text-white)

Subheading:     "Bali wellness retreats for women who are ready for more."
               (Karla, font-light, text-lg, text-white/80, mt-6)

CTA Button:     "Discover the Journey"
               (Ghost style: border-white text-white, mt-10)
               Scrolls down to Story section on click
```

**Scroll indicator:**
- Small animated chevron or line at the bottom center, pulsing downward

**Video placeholder:**
- For MVP, use a free stock video. Search for: "Bali rice terrace drone shot" or "woman yoga sunrise" on Pexels/Coverr
- Fallback: use `hero-poster.jpg` as a static image for slow connections (poster attribute on video)

**Responsive:**
- Mobile: text-3xl heading, reduce padding
- Video may be replaced with static image on very slow connections

---

### 5.3 Story Section

**Purpose:** Introduce Nathalie and the brand. Emotional, personal, creates trust and connection.

**Layout — inspired by COMO's editorial split layout:**

```
Desktop (2-column asymmetric):
┌─────────────────────────────────────────────────┐
│                                                 │
│   [IMAGE: Nathalie portrait]    [TEXT COLUMN]    │
│   Takes up ~55% width          Takes up ~45%    │
│   Full height of section       Vertically        │
│   object-cover                 centered           │
│                                                 │
└─────────────────────────────────────────────────┘

Mobile (stacked):
┌──────────────┐
│   [IMAGE]    │
│              │
├──────────────┤
│   [TEXT]     │
│              │
└──────────────┘
```

**Content:**
```
Section label:  "OUR STORY"
               (uppercase, tracked, text-xs, text-earth-400, mb-4)

Heading:        "She built this for you."
               (Cormorant Garamond, font-light, text-4xl md:text-5xl, text-earth-800)

Body text:
"I didn't plan to start a retreat brand. I was a woman who had lost her spark —
buried under expectations, routines, and the weight of always being 'fine.'

A trip to Bali changed everything. Not because the place was beautiful — but
because for the first time in years, I could hear myself again.

thepollok was born from that moment. It's my invitation to you: come as you are.
Leave as the woman you were always meant to be."

Signature:      "— Nathalie"
               (Cormorant Garamond, italic, text-earth-600)
```

**Image:** Warm, natural portrait photo. Placeholder: Use an Unsplash image of a woman in a natural Bali setting.

---

### 5.4 Experience Section

**Purpose:** Show what guests will feel and do. Visual-first, minimal text.

**Layout — inspired by COMO's grid/mosaic approach:**

```
Desktop:
┌─────────────────────────────────────────────────────┐
│ Section label + heading (centered)                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  │
│  │              │  │              │  │          │  │
│  │   IMAGE 1    │  │   IMAGE 2    │  │ IMAGE 3  │  │
│  │   tall       │  │   square     │  │ tall     │  │
│  │              │  │              │  │          │  │
│  │              │  ├──────────────┤  │          │  │
│  │              │  │   IMAGE 4    │  │          │  │
│  │              │  │   square     │  │          │  │
│  └──────────────┘  └──────────────┘  └──────────┘  │
│                                                     │
│  Each image has a small text overlay at the bottom  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Use CSS Grid: `grid-cols-3` with varying row spans to create the asymmetric mosaic.

**Content — 4 Experience Cards:**

```
Card 1 - Image: yoga at sunrise
  Label: "MORNING FLOW"
  Text:  "Start each day grounded. Vinyasa and breathwork as the sun rises over the valley."

Card 2 - Image: healthy food/bowl
  Label: "NOURISH"
  Text:  "Plant-based Balinese cuisine crafted to restore and energize."

Card 3 - Image: woman meditating / sound bowl
  Label: "STILLNESS"
  Text:  "Sound healing, meditation, and journaling to quiet the noise."

Card 4 - Image: Bali temple or waterfall
  Label: "EXPLORE"
  Text:  "Sacred temples, hidden waterfalls, and moments of wonder."
```

**Text overlay style:**
- Bottom of each image card
- Small label: uppercase, tracked, Cormorant Garamond, text-xs
- Description: Karla light, text-sm, max 2 lines
- Background: subtle gradient from transparent to black/40 at bottom

**Responsive:**
- Mobile: single column stack, each card full-width with aspect-ratio-[3/4]

---

### 5.5 Retreat Section

**Purpose:** Practical details about the retreat — schedule, what's included, location.

**Layout:**

```
Desktop:
┌────────────────────────────────────────────────────┐
│                                                    │
│  [FULL-WIDTH IMAGE: aerial shot of retreat villa]  │
│  With text overlay, centered                       │
│                                                    │
├────────────────────────────────────────────────────┤
│                                                    │
│  Section label + heading (centered)                │
│                                                    │
│  ┌──────────────┐              ┌──────────────┐   │
│  │  A DAY WITH  │              │  WHAT'S      │   │
│  │  US          │              │  INCLUDED    │   │
│  │              │              │              │   │
│  │  6:30  ...   │              │  ✦ 7 nights  │   │
│  │  8:00  ...   │              │  ✦ Daily yoga │   │
│  │  10:00 ...   │              │  ✦ Meals     │   │
│  │  ...         │              │  ✦ ...       │   │
│  └──────────────┘              └──────────────┘   │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Full-width image banner at top of section:**
```
Image: Aerial/drone shot of Balinese villa surrounded by jungle
Overlay text (centered):
  "7 Days. One Transformation."
  (Cormorant Garamond, font-light, text-5xl, text-white)
```

**Two-column content below:**

**Left column — "A Day With Us":**
```
6:30 AM    Sunrise yoga & breathwork
8:00 AM    Nourishing breakfast
10:00 AM   Workshop or excursion
12:30 PM   Lunch & free time
4:00 PM    Pilates or restorative flow
6:00 PM    Sunset meditation
7:00 PM    Community dinner
```

Style: Each time in Cormorant Garamond italic (text-earth-400), description in Karla. Laid out as a clean vertical timeline with a thin vertical line on the left.

**Right column — "What's Included":**
```
✦  7 nights private villa accommodation
✦  Daily yoga, pilates & breathwork sessions
✦  All meals — plant-based Balinese cuisine
✦  2 excursions (temple visit + waterfall hike)
✦  Sound healing ceremony
✦  Journaling & reflection workshops
✦  Airport transfers
```

Style: Use a small decorative marker (✦ or a small diamond) instead of bullet points. Karla light, generous line-height.

**Responsive:**
- Mobile: stacked single column
- Full-width image becomes shorter (aspect-ratio-[16/9] instead of [21/9])

---

### 5.6 Gallery Section

**Purpose:** Visual social proof. A curated grid of beautiful images that feels like an Instagram feed.

**Layout:**

```
Desktop — 4 columns, 2 rows:
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│  1  │ │  2  │ │  3  │ │  4  │
└─────┘ └─────┘ └─────┘ └─────┘
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│  5  │ │  6  │ │  7  │ │  8  │
└─────┘ └─────┘ └─────┘ └─────┘

Mobile — 2 columns, 4 rows
```

- 8 images in a grid
- Square aspect ratio (`aspect-square`)
- Small gap: `gap-1` or `gap-2` for tight mosaic feel
- Subtle hover: slight zoom (scale-105) + dark overlay with Instagram icon
- Below grid: centered link "Follow along @thepollok" linking to Instagram

**Placeholder images:** Use Unsplash images matching these themes:
1. Yoga pose outdoors
2. Bali rice terraces
3. Healthy food bowl
4. Woman laughing
5. Tropical flowers
6. Pool with jungle view
7. Meditation/candles
8. Sunset over ocean

**Testimonials sub-section (below gallery):**

```
3 testimonial cards in a horizontal scroll or 3-column grid:

"I came to find peace and found myself. This week changed my life."
— Sarah, 34, London

"Nathalie creates a space where you can truly let go. I've never
felt so held and so free at the same time."
— Maria, 41, Berlin

"I was skeptical about retreats. Now I tell everyone to go. The
yoga, the food, the connections — everything was perfect."
— Lisa, 29, Amsterdam
```

Style: Each on a cream/off-white card with large decorative quotation marks in Cormorant Garamond (text-8xl, text-earth-200). Name and details in small Karla text.

---

### 5.7 Booking Section

**Purpose:** Convert interest into action. Warm, inviting CTA with Cal.com embed.

**Layout:**

```
Desktop:
┌────────────────────────────────────────────────────┐
│  Background: bg-earth-800 (dark brown inverted)    │
│                                                    │
│         Section label: "BEGIN YOUR JOURNEY"        │
│                                                    │
│         Heading: "Your transformation              │
│                   starts with one step."           │
│                                                    │
│         Body: "Spaces are limited to 8 women       │
│         per retreat to keep the experience          │
│         intimate and personal. Book a free          │
│         discovery call with Nathalie."              │
│                                                    │
│         [CTA BUTTON: "Book Your Call"]              │
│                                                    │
│         OR                                         │
│                                                    │
│         [Embedded Cal.com widget]                  │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Implementation:**
- Background: `bg-earth-800` (dark brown) with cream text for contrast — inverted color scheme
- Cal.com integration: Use `@calcom/embed-react` package or a simple iframe
- For MVP: if no Cal.com link is available yet, show the CTA button as a placeholder that links to `#` with a `mailto:` fallback

**Cal.com embed setup:**
```bash
npm install @calcom/embed-react
```

```tsx
import Cal from "@calcom/embed-react";

<Cal
  calLink="thepollok/discovery-call"
  style={{ width: "100%", height: "100%", overflow: "scroll" }}
  config={{ layout: "month_view", theme: "light" }}
/>
```

**Responsive:**
- Mobile: Full-width, CTA button may be preferred over embedded calendar
- Calendar embed should be hidden on mobile with a "Book Your Call" button linking to Cal.com directly instead

---

### 5.8 Footer

**Purpose:** Clean wrap-up with essential links and social.

**Layout:**
```
┌────────────────────────────────────────────────────┐
│  bg-earth-900 (darkest brown), text-earth-300      │
│                                                    │
│  thepollok                                         │
│                                                    │
│  Yoga · Pilates · Wellness Retreats · Bali         │
│                                                    │
│  [IG icon]  [Email icon]                           │
│                                                    │
│  ─────────────────────────────────────────         │
│                                                    │
│  © 2026 thepollok. All rights reserved.            │
│                                                    │
└────────────────────────────────────────────────────┘
```

- Minimal. No mega-footer. Just brand, tagline, social icons, copyright.
- Social icons: simple line-style SVG icons (Instagram + email)
- Padding: `py-16`

---

## 6. Responsive Breakpoints

Follow Tailwind's default breakpoints:

```
Mobile:    < 768px  (default — design here first)
Tablet:    md (768px+)
Desktop:   lg (1024px+)
Wide:      xl (1280px+)
```

**Key responsive rules:**
- Navbar: hamburger menu below `md`, horizontal links at `md+`
- Hero: `text-3xl` mobile, `text-7xl` desktop
- Two-column sections: stack to single column below `md`
- Gallery grid: `grid-cols-2` mobile, `grid-cols-4` desktop
- Section padding: `py-20` mobile, `py-40` desktop
- Full-bleed images: always full-width regardless of breakpoint

---

## 7. Placeholder Content & Assets

Since this is an MVP with mockup content, use these free resources:

### 7.1 Images
Source from **Unsplash** (free, no attribution required for web use). Download and place in `public/images/`. Search terms:
- "bali rice terrace" — hero poster, retreat section
- "woman yoga outdoor" — hero, experience
- "bali villa pool" — retreat section
- "healthy food bowl bali" — experience
- "woman portrait natural light" — story section
- "tropical flowers" — gallery
- "bali temple" — experience, gallery
- "sunset ocean bali" — gallery
- "meditation candles" — gallery
- "woman laughing outdoor" — gallery

### 7.2 Video
Source from **Pexels** or **Coverr** (free stock video):
- Search: "bali drone", "yoga sunrise", "tropical nature cinematic"
- Keep it under 15MB for fast loading
- Format: MP4, H.264 encoded
- Resolution: 1920x1080 minimum

### 7.3 Icons
Use **Lucide React** for any icons needed:
```bash
npm install lucide-react
```

---

## 8. Performance Requirements

- **Lighthouse score:** Target 90+ on Performance, Accessibility, Best Practices
- **First Contentful Paint:** Under 1.5 seconds
- **Video:** Lazy-load, use `poster` attribute for immediate visual while video loads
- **Images:** Use Next.js `<Image>` component for automatic optimization, lazy loading, and WebP conversion
- **Fonts:** Use `next/font/google` for zero-layout-shift font loading
- **Animations:** Use `will-change` and `transform` only (GPU-accelerated), avoid animating layout properties

---

## 9. SEO & Metadata

Configure in `layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "thepollok — Yoga & Wellness Retreats in Bali",
  description:
    "Come back to yourself. Intimate yoga, pilates, and wellness retreats in Bali for women ready for more. Founded by Nathalie Pollok.",
  keywords: [
    "yoga retreat bali",
    "women wellness retreat",
    "pilates retreat bali",
    "thepollok",
  ],
  openGraph: {
    title: "thepollok — Come Back to Yourself",
    description: "Intimate yoga & wellness retreats in Bali for women.",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
};
```

---

## 10. Implementation Priority

**IMPORTANT FOR CLAUDE CODE:** Before implementing, read the frontend-design skill at `/mnt/skills/public/frontend-design/SKILL.md`. It contains critical guidelines for avoiding generic AI aesthetics and creating production-grade interfaces. The design direction in this PRD ("Quiet Earth") aligns with the skill's emphasis on intentional minimalism — execute with restraint, precision, and meticulous attention to spacing, typography, and subtle details.

Build in this order:

```
Phase 1 — Structure (Day 1):
  ✦ Project setup (Next.js + Tailwind + daisyUI + fonts)
  ✦ Tailwind config with custom theme
  ✦ Root layout with fonts and metadata
  ✦ Navbar component (with scroll behavior)
  ✦ Basic page.tsx assembling empty section shells
  ✦ Footer component

Phase 2 — Hero + Story (Day 1-2):
  ✦ Hero section with video background
  ✦ Story section with asymmetric layout
  ✦ FadeIn animation component
  ✦ Download and place placeholder images/video

Phase 3 — Experience + Retreat (Day 2):
  ✦ Experience mosaic grid
  ✦ Retreat section with schedule + inclusions
  ✦ Full-width image banner

Phase 4 — Gallery + Booking + Polish (Day 3):
  ✦ Gallery grid with hover effects
  ✦ Testimonials cards
  ✦ Booking section with Cal.com placeholder
  ✦ Smooth scroll navigation
  ✦ Responsive testing and fixes
  ✦ Performance optimization
```

---

## 11. Acceptance Criteria

The MVP is complete when:

1. Page loads with cinematic hero video and overlay text
2. Navbar transitions from transparent to solid on scroll
3. All 7 sections render with placeholder content and images
4. Scroll-triggered fade-in animations work on all sections
5. Navbar links smooth-scroll to correct sections
6. Mobile hamburger menu works with fullscreen overlay
7. Fully responsive from 375px mobile to 1440px+ desktop
8. Earth-tone color scheme is consistent throughout
9. Typography matches spec (Cormorant Garamond + Karla)
10. Cal.com embed or placeholder CTA is functional
11. Lighthouse Performance score is 85 or higher
12. Deploys successfully to Vercel

---

## 12. Future Roadmap (Post-MVP)

These are NOT in scope for this build but are noted for planning:

- **Supabase backend** — user accounts, retreat listings, inquiry forms
- **Stripe integration** — deposit payments and full retreat bookings
- **Instagram API** — live feed integration replacing static gallery
- **CMS** — allow Nathalie to update content, images, retreat dates
- **Blog/Journal** — SEO content around wellness, yoga, Bali
- **Multi-language** — German version (Nathalie's audience may include DACH region)
- **Retreat detail pages** — individual pages per retreat with pricing, dates, availability
- **Email capture** — newsletter signup with Mailchimp/Resend integration

---

*End of PRD — thepollok MVP v1.0*
