"use client";

import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

const skills = [
  { name: "React", level: 90, color: "from-sky-400 to-blue-500" },
  { name: "TypeScript", level: 85, color: "from-blue-500 to-indigo-600" },
  {
    name: "Next.js",
    level: 88,
    color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white",
  },
  { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-teal-500" },
  { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
  { name: "AngularJS", level: 65, color: "from-red-500 to-pink-600" },
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Vercel",
  "Figma",
  "REST APIs",
  "Responsive Design",
  "Chrome DevTools",
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const { theme } = useTheme();

  return (
    <section id="skills" ref={sectionRef} className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="section-subtitle mx-auto">
          The technologies and tools I use daily to build exceptional front-end
          experiences.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Skill Bars */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold font-display tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            Core Technologies
          </h3>
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span
                  className={`font-medium ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  }`}
                >
                  {skill.name}
                </span>
                <span
                  className={`${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className={`h-2 rounded-full overflow-hidden ${
                  theme === "light" ? "bg-gray-200" : "bg-gray-800"
                }`}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div>
          <h3 className="text-lg font-semibold font-display tracking-tight flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            Tools &amp; Ecosystem
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl border hover:shadow-md transition-all duration-300 cursor-default ${
                  theme === "light"
                    ? "bg-gray-100 text-gray-700 border-gray-200 hover:border-primary-300 hover:shadow-primary-500/5"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:border-primary-600 hover:shadow-primary-500/10"
                }`}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Fun fact or CTA */}
          <div
            className={`mt-8 p-6 rounded-2xl bg-gradient-to-br border ${
              theme === "light"
                ? "from-primary-50 to-accent-50 border-primary-100"
                : "from-primary-950/30 to-accent-950/20 border-primary-800/30"
            }`}
          >
            <p
              className={`text-sm leading-relaxed ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <span
                className={`font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                Always learning.
              </span>{" "}
              Currently diving deeper into server components, animations with
              Framer Motion, and exploring the latest React 19 features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
