"use client";

import Link from "next/link";
import { ArrowDown, Mail, Download, MessageCircle } from "lucide-react";
import {
  SiGithub,
  SiLinkerd,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/PhenomCorp12", icon: SiGithub },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/joshua-ijemba",
    icon: SiLinkerd,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/joshuaijemba?igsh=MWtreGVpZ3g1cWx0YQ==",
    icon: SiInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2348072536380",
    icon: MessageCircle,
  },
];

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section className="mt-8 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow dark:bg-hero-glow-dark rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-500/10 dark:bg-accent-400/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-primary-500/8 dark:bg-primary-400/12 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Floating tech badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[15%] left-[10%] text-xs sm:text-sm font-mono text-primary-500/30 dark:text-primary-400/20 animate-float">
          &lt;React /&gt;
        </span>
        <span className="absolute top-[25%] right-[12%] text-xs sm:text-sm font-mono text-accent-500/30 dark:text-accent-400/20 animate-float-delayed">
          .next.js
        </span>
        <span className="absolute bottom-[20%] left-[15%] text-xs sm:text-sm font-mono text-primary-500/25 dark:text-primary-400/15 animate-float">
          TypeScript
        </span>
        <span className="absolute bottom-[30%] right-[10%] text-xs sm:text-sm font-mono text-accent-500/25 dark:text-accent-400/15 animate-float-delayed">
          tailwind.config
        </span>
      </div>

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-20">
        {/* Photo */}
        <div className="flex-shrink-0 animate-fade-in">
          <div className="gradient-border rounded-full">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              {/* Replace with your image */}
              <img
                src="/images/hero-photo.jpg"
                alt="Joshua Ijemba"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Fallback placeholder */}
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-primary-500/30 dark:text-primary-400/20">
                JI
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-slide-up">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-6 ${
              theme === "light"
                ? "border-primary-200 bg-primary-50 text-primary-800"
                : "border-primary-800 bg-primary-950/50 text-primary-300"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for hire
          </div>

          <h1 className="section-title text-balance">
            Creative <span className="gradient-text">Developer</span>
          </h1>

          <p className="section-subtitle text-balance">
            Hi, my name is Joshua Ijemba. I craft visually stunning,
            high-performance web experiences using React, Next.js, and modern
            front-end technologies. Focused on clean code, smooth animations,
            and interfaces that users love.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              href="mailto:chidiebube95@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
            >
              <Mail
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              Hire Me
            </Link>
            <Link
              href="/images/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 text-[var(--foreground)] rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              Download Resume
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-[var(--muted)]" />
      </div>
    </section>
  );
}
