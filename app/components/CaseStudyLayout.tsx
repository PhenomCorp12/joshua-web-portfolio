"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useTheme } from "./ThemeProvider";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: {
    problem: string;
    role: string;
    tech: string[];
  };
  process: {
    step: string;
    description: string;
  }[];
  solution: string[];
  results: string;
  liveUrl: string;
  githubUrl: string;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  heroImage,
  overview,
  process,
  solution,
  results,
  liveUrl,
  githubUrl,
}: CaseStudyProps) {
  const { theme } = useTheme();
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to My Work
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--muted)] mt-3">
          {subtitle}
        </p>

        {/* Hero Image */}
        <div className="mt-10 rounded-2xl overflow-hidden gradient-border">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-6xl font-bold text-white/80">
                {title.charAt(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold font-display tracking-tight mb-6">
            Overview
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                The Problem
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {overview.problem}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                My Role
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {overview.role}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {overview.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-medium rounded-full border text-[var(--foreground)] ${
                      theme === "light"
                        ? "bg-gray-100 border-gray-200"
                        : "bg-gray-800 border-gray-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold font-display tracking-tight mb-6">
            The Process
          </h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 p-6 rounded-2xl border ${
                  theme === "light"
                    ? "bg-gray-50 border-gray-200"
                    : "bg-gray-800/30 border-gray-800"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    theme === "light"
                      ? "bg-primary-100 text-primary-600"
                      : "bg-primary-900/30 text-primary-400"
                  }`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{item.step}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold font-display tracking-tight mb-6">
            The Solution
          </h2>
          <ul className="space-y-3">
            {solution.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[var(--muted)] leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
            Results &amp; Takeaways
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">{results}</p>
        </section>

        {/* Links */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25"
          >
            <ExternalLink size={18} />
            View Live Project
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 text-[var(--foreground)] rounded-full transition-all duration-300"
          >
            <SiGithub size={18} />
            View Source Code
          </a>
        </div>

        {/* Hire CTA */}
        <div
          className={`mt-16 p-8 rounded-2xl bg-gradient-to-br border text-center ${
            theme === "light"
              ? "from-primary-50 to-accent-50 border-primary-200 "
              : "from-primary-950/30 to-accent-950/20 border-primary-800/30"
          }`}
        >
          <h3 className="text-xl font-bold font-display">
            Interested in similar results?
          </h3>
          <p className="text-sm text-[var(--muted)] mt-2 mb-6">
            Let&apos;s discuss how I can bring your next project to life.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}
