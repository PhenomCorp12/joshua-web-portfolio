"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const projects = [
  {
    id: "wikipage-pro",
    title: "WikiPage Pro",
    subtitle: "Professional Wikipedia Page Creation Service",
    description:
      "A full-service landing page for a company that creates and manages Wikipedia brand pages, featuring service showcases, SEO optimization, and a streamlined client onboarding flow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/wikipage-preview.jpg",
    liveUrl: "https://wikipagepro.com/",
    githubUrl: "https://github.com/PhenomCorp12/wikipagepro",
    color: "from-primary-500 to-accent-500",
  },
  {
    id: "easytask",
    title: "EasyTask",
    subtitle: "Enterprise Task Management App",
    description:
      "A frictionless task management platform for enterprise teams. Users can create, assign, and track tasks with an intuitive interface built for productivity at scale.",
    tech: ["AngularJS", "Vanilla CSS"],
    image: "/images/easytask-preview.jpg",
    liveUrl: "https://easytask-seven.vercel.app/",
    githubUrl: "https://github.com/PhenomCorp12/easytask",
    color: "from-accent-500 to-primary-500",
  },
  {
    id: "wealthbridge",
    title: "WealthBridge",
    subtitle: "Investment Banking Dashboard",
    description:
      "A React-based investment banking application with tiered account management and real-time interest generation tracking on active investments.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    image: "/images/wealthbridge-preview.jpg",
    liveUrl: "https://wealthridge-investment.vercel.app/",
    githubUrl: "https://github.com/PhenomCorp12/wealthridge-investment",
    color: "from-primary-600 to-accent-600",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <section id="work" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle mx-auto">
          A selection of projects that showcase my approach to building
          performant, beautiful, and user-focused web applications.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <Link
                href={`/case-studies/${project.id}`}
                className="relative w-full lg:w-3/5 overflow-hidden rounded-2xl gradient-border"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  {/* Fallback gradient */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <span className="text-4xl font-bold text-white/80">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end justify-between p-6 transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-white font-semibold text-lg">
                    View Case Study
                  </span>
                  <ArrowUpRight className="text-white" size={24} />
                </div>
              </Link>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-primary-600 dark:text-primary-400">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-700" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {project.subtitle}
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full border text-[var(--foreground)] ${
                        theme === "light"
                          ? "bg-gray-100 border-gray-200"
                          : "bg-gray-800 border-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <SiGithub size={16} />
                    Source Code
                  </Link>
                  <Link
                    href={`/case-studies/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                  >
                    Case Study
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
