import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://thepollok.com"
  ),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${karla.variable} font-sans antialiased`}
      >
        {children}
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
