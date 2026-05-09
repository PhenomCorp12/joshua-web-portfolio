import CaseStudyLayout from "@/app/components/CaseStudyLayout";

export default function WikiPageProCaseStudy() {
  return (
    <CaseStudyLayout
      title="WikiPage Pro"
      subtitle="Professional Wikipedia Page Creation Service Landing Page"
      heroImage="/images/wikipage-preview.jpg"
      overview={{
        problem:
          "WikiPage Pro needed a high-converting landing page to showcase their Wikipedia page creation services. The challenge was building a site that conveyed professionalism, trust, and expertise while making it easy for potential clients to understand the service tiers and get started.",
        role: "I designed and developed the entire landing page from scratch — from wireframing the layout to implementing the full front-end. I focused on creating a clean, modern design with clear information hierarchy and smooth user flow.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      }}
      process={[
        {
          step: "Research & Planning",
          description:
            "Analyzed competitor landing pages in the Wikipedia services niche. Identified key user needs: service clarity, pricing transparency, and social proof. Created a sitemap and user flow diagram.",
        },
        {
          step: "Design & Prototyping",
          description:
            "Designed wireframes and high-fidelity mockups with a focus on typography, whitespace, and a professional color palette. Prioritized mobile responsiveness from the start.",
        },
        {
          step: "Development",
          description:
            "Built the page using Next.js for performance and SEO, TypeScript for type safety, and Tailwind CSS for rapid styling. Implemented responsive layouts, smooth scroll navigation, and optimized images.",
        },
      ]}
      solution={[
        "Built a modular, component-based architecture for easy future updates",
        "Implemented server-side rendering for improved SEO and initial load time",
        "Created reusable UI components that maintain visual consistency",
        "Optimized all assets and images for fast page loading across devices",
        "Added subtle animations to enhance the user experience without being distracting",
      ]}
      results="The final landing page successfully communicated the brand's value proposition with a polished, professional appearance. The clean codebase allows the client to easily update content and add new service offerings in the future."
      liveUrl="https://wikipage-pro.vercel.app"
      githubUrl="https://github.com/yourusername/wikipage-pro"
    />
  );
}