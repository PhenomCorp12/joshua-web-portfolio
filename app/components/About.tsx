"use client";
import { useTheme } from "./ThemeProvider";

export default function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className="section-container">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Photo */}
        <div className="flex-shrink-0 w-full lg:w-2/5">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 dark:from-primary-500/30 dark:to-accent-500/30 rounded-3xl blur-2xl" />
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img
                src="/images/about-photo.jpg"
                alt="Joshua Ijemba"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Fallback */}
              <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-primary-500/20 dark:text-primary-400/15">
                JI
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6 ${
              theme === "light"
                ? "border-primary-200 bg-primary-50 text-primary-700"
                : "border-primary-800 bg-primary-950/50 text-primary-300"
            }`}
          >
            About Me
          </div>

          <h2 className="section-title">
            I bring ideas to life{" "}
            <span className="gradient-text">through code</span>
          </h2>

          <div className="space-y-4 text-[var(--muted)] leading-relaxed">
            <p>
              Hey! I&apos;m Joshua — a Creative Developer based in Enugu,
              Nigeria, with a deep passion for crafting web experiences that are
              as beautiful as they are functional. I specialize in front-end
              development, bridging the gap between design and engineering.
            </p>
            <p>
              With expertise in React, Next.js, and TypeScript, I build
              applications that don&apos;t just work — they feel <em>right</em>.
              Every animation, every interaction, and every line of code is
              intentional.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new design
              trends, contributing to open-source projects, or sharing what I
              learn with the dev community. I believe great software starts with
              empathy for the user — and I bring that mindset to every project I
              touch.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Delivered", value: "10+" },
              { label: "Technologies", value: "8+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`text-center p-4 rounded-xl border ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-100"
                    : "border-gray-800 bg-gray-800/50"
                }`}
              >
                <div className="text-2xl sm:text-3xl font-bold font-display gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--muted)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
