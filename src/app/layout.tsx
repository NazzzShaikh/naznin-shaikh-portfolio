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
  title: "Naznin Shaikh | Developer Portfolio",
  description: "Naznin Shaikh's professional developer portfolio. Backend Developer and Machine Learning Enthusiast.",
  icons: {
    icon: "/favicon.png",
  },
};

import BackgroundEffect from "@/components/BackgroundEffect";
import IntroAnimation from "@/components/IntroAnimation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <IntroAnimation />
        <BackgroundEffect />
        {children}
      </body>
    </html>
  );
}
