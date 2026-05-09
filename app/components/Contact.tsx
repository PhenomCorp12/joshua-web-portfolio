"use client";

import { Mail, MessageCircle, Briefcase, Send } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Have a project in mind or an opportunity to discuss? I&apos;d love to
          hear from you. Choose the channel that works best.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Email Card */}
        <Link
          href="mailto:chidiebube95@gmail.com"
          className="group glass-card-hover rounded-2xl p-8 text-center flex flex-col items-center gap-4"
        >
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
              theme === "light"
                ? "bg-primary-100 group-hover:bg-primary-200"
                : "bg-primary-900/30 group-hover:bg-primary-900/50"
            }`}
          >
            <Mail
              size={24}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg font-display">Email Me</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              chidiebube95@gmail.com
            </p>
          </div>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Send Message <Send size={14} />
          </span>
        </Link>

        {/* WhatsApp Card */}
        <Link
          href="https://wa.me/2348072536380"
          target="_blank"
          rel="noopener noreferrer"
          className="group glass-card-hover rounded-2xl p-8 text-center flex flex-col items-center gap-4"
        >
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
              theme === "light"
                ? "bg-green-100 group-hover:bg-green-200"
                : "bg-green-900/30 group-hover:bg-green-900/50"
            }`}
          >
            <MessageCircle
              size={24}
              className="text-green-600 dark:text-green-400"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg font-display">WhatsApp</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              +234 807 253 6380
            </p>
          </div>
          <span className="text-sm font-medium text-green-600 dark:text-green-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Start Chat <Send size={14} />
          </span>
        </Link>

        {/* Resume Card */}
        <Link
          href="/images/resume.pdf"
          download
          className="group glass-card-hover rounded-2xl p-8 text-center flex flex-col items-center gap-4 sm:col-span-2 lg:col-span-1"
        >
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
              theme === "light"
                ? "bg-accent-100 group-hover:bg-accent-200"
                : "bg-accent-900/30 group-hover:bg-accent-900/50"
            }`}
          >
            <Briefcase
              size={24}
              className="text-accent-600 dark:text-accent-400"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg font-display">
              Download Resume
            </h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              PDF — Full experience &amp; skills
            </p>
          </div>
          <span className="text-sm font-medium text-accent-600 dark:text-accent-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Download <Send size={14} />
          </span>
        </Link>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-sm text-[var(--muted)] mb-4">
          Prefer to fill out a form instead?
        </p>
        <Link
          href="mailto:chidiebube95@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
        >
          <Mail size={18} />
          Hire Me
        </Link>
      </div>
    </section>
  );
}
