"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          theme === "light"
            ? "bg-[#fafafa] border-b border-gray-200 shadow-sm"
            : "bg-[#0f0f12] border-b border-gray-800 shadow-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl font-bold font-display tracking-tight transition-all duration-200 ${
                theme === "light" ? "text-primary-600" : "text-primary-400"
              }`}
            >
              Dev
              <span className="text-primary-600 dark:text-primary-400">
                Jay
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    theme === "light"
                      ? "text-gray-800 hover:bg-gray-100"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-2 flex items-center gap-2">
                <ThemeToggle />
                <Link
                  href="/#contact"
                  className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Mobile: Theme + Menu Toggle */}
            <div className="flex items-center gap-1 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "light"
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-sm h-full shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ${theme === "light" ? "bg-white" : "bg-[#1a1a1f]"}`}
        >
          <div className="flex flex-col pt-24 px-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all ${
                  theme === "light"
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-primary-600 dark:bg-primary-500 rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25"
              >
                <Briefcase size={18} />
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
