import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Ijemba | Creative Developer",
  description:
    "Creative Front-End Developer crafting stunning web experiences with React, Next.js, and modern technologies. Available for hire.",
  keywords: [
    "front-end developer",
    "creative developer",
    "react developer",
    "next.js developer",
    "web developer nigeria",
    "joshua ijemba",
    "portfolio",
  ],
  authors: [{ name: "Joshua Ijemba" }],
  openGraph: {
    title: "Joshua Ijemba | Creative Developer",
    description:
      "Creative Front-End Developer crafting stunning web experiences with React, Next.js, and modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${clashDisplay.variable} font-sans antialiased bg-noise`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}