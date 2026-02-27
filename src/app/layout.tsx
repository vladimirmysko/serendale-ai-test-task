import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const clashGrotesk = localFont({
  src: "../fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://serendale-ai-test-task.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    template: "%s | Serendale AI",
    default: "Serendale AI – Decentralized Intelligence",
  },

  description:
    "Serendale AI is a high-performance blockchain platform delivering 120K TPS, AI-powered data security, and Proof of Stake consensus — built for a truly decentralized, infinitely scalable future.",

  keywords: [
    "Serendale AI",
    "blockchain",
    "decentralized",
    "AI security",
    "Proof of Stake",
    "120K TPS",
    "smart contracts",
    "open protocol",
    "Web3",
    "decentralized intelligence",
    "scalable blockchain",
  ],

  authors: [{ name: "Serendale AI", url: siteUrl }],

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Serendale AI",
    title: "Serendale AI – Decentralized Intelligence",
    description:
      "High-performance blockchain with 120K TPS, AI-powered security, and Proof of Stake — decentralized intelligence at scale.",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Serendale AI – Decentralized Intelligence",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Serendale AI – Decentralized Intelligence",
    description:
      "High-performance blockchain with 120K TPS, AI-powered security, and Proof of Stake — decentralized intelligence at scale.",
    images: ["/hero-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        montserrat.variable,
        spaceGrotesk.variable,
        clashGrotesk.variable,
        "bg-black text-white",
      )}
    >
      <body>{children}</body>
    </html>
  );
}
