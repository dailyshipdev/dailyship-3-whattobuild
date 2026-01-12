import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatToBuild - Get 3 shippable ideas in 20 seconds",
  description: "Pick your time + skill → get 3 shippable ideas. No auth, no modals, just build.",
  openGraph: {
    title: "WhatToBuild - Get 3 shippable ideas in 20 seconds",
    description: "Pick your time + skill → get 3 shippable ideas. No auth, no modals, just build.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WhatToBuild - Get 3 shippable ideas in 20 seconds",
    description: "Pick your time + skill → get 3 shippable ideas. No auth, no modals, just build.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
