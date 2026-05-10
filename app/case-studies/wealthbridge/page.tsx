import CaseStudyLayout from "@/app/components/CaseStudyLayout";

export default function WealthBridgeCaseStudy() {
  return (
    <CaseStudyLayout
      title="WealthBridge"
      subtitle="Investment Banking Dashboard Application"
      heroImage="/images/wealthbridge-preview.jpg"
      overview={{
        problem:
          "WealthBridge required an investment banking dashboard where users could manage different account tiers, track active investments, and see real-time interest generation. The interface needed to handle complex financial data while remaining approachable.",
        role: "I architected and developed the front-end application, designing the dashboard layout and implementing all interactive features, including tier management and interest calculation displays.",
        tech: ["Next.js", "TypeScript", "Supabase"],
      }}
      process={[
        {
          step: "Data Modeling & Architecture",
          description:
            "Designed the data structure for user accounts, investment tiers, and interest calculations. Planned the Supabase database schema to efficiently handle real-time data updates.",
        },
        {
          step: "Dashboard Design",
          description:
            "Created wireframes for the dashboard layout focusing on data visualization. Designed clear card-based layouts for different account tiers with prominent display of key metrics.",
        },
        {
          step: "Full-Stack Implementation",
          description:
            "Built the front-end with Next.js and TypeScript, integrated Supabase for authentication and data storage, and implemented real-time updates for interest generation tracking.",
        },
      ]}
      solution={[
        "Developed a role-based dashboard with different views for account tiers",
        "Integrated Supabase for secure authentication and real-time database operations",
        "Built interactive data visualizations for interest growth tracking",
        "Implemented responsive layouts that work across all device sizes",
        "Added TypeScript for enhanced code reliability and developer experience",
      ]}
      results="WealthBridge delivered a powerful yet intuitive investment banking experience. The tiered account system with real-time interest tracking provided users with clear visibility into their investment performance, all within a clean, modern interface."
      liveUrl="https://wealthridge-investment.vercel.app/"
      githubUrl="https://github.com/PhenomCorp12/wealthridge-investment"
    />
  );
}