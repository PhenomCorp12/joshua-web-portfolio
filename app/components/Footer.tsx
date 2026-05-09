"use client";
import Link from "next/link";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiLinkerd, SiInstagram } from "@icons-pack/react-simple-icons";
import { useTheme } from "./ThemeProvider";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/PhenomCorp12", icon: SiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/joshua-ijemba", icon: SiLinkerd },
  { name: "Instagram", href: "https://www.instagram.com/joshuaijemba?igsh=MWtreGVpZ3g1cWx0YQ==", icon: SiInstagram },
  { name: "WhatsApp", href: "https://wa.me/2348072536380", icon: MessageCircle },
  { name: "Email", href: "mailto:chidiebube95@gmail.com", icon: Mail },
];

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold font-display tracking-tight hover:opacity-80 transition-opacity"
            >
              Dev<span className="text-primary-600 dark:text-primary-400">Jay</span>
            </Link>
            <p className="text-sm text-[var(--muted)] mt-2">
              Creative Developer — Building the web, one pixel at a time.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-[var(--muted)] hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`p-3 rounded-full text-[var(--muted)] transition-all duration-300 ${
                    theme === "light"
                      ? "bg-gray-100 hover:bg-primary-100 text-primary-600"
                      : "bg-gray-800 hover:bg-primary-900/30 hover:text-primary-400"
                  }`}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} Joshua Ijemba. All rights reserved.</p>
          <p>
            Designed &amp; built using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}