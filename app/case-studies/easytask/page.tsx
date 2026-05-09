import CaseStudyLayout from "@/app/components/CaseStudyLayout";

export default function EasyTaskCaseStudy() {
  return (
    <CaseStudyLayout
      title="EasyTask"
      subtitle="Enterprise Task Management Application"
      heroImage="/images/easytask-preview.jpg"
      overview={{
        problem:
          "Teams needed a simple yet powerful task management tool that didn't require extensive onboarding. The goal was to create an app where users could quickly add tasks, mark them as complete, and manage their workflow without friction.",
        role: "As the sole front-end developer, I built the entire user interface and application logic. I focused on creating an intuitive user experience with clear task states and smooth interactions.",
        tech: ["AngularJS", "Vanilla CSS"],
      }}
      process={[
        {
          step: "Understanding the Workflow",
          description:
            "Mapped out the core task lifecycle: creation, assignment, status updates, and completion. Identified the minimal viable features needed for an MVP while ensuring the interface remained clean.",
        },
        {
          step: "UI Design",
          description:
            "Designed a minimal, distraction-free interface with clear visual hierarchy. Used color coding for task statuses and ensured the layout worked seamlessly on both desktop and mobile.",
        },
        {
          step: "Development & Testing",
          description:
            "Developed the application using AngularJS, implementing two-way data binding for real-time task updates. Used vanilla CSS for lightweight, fast-loading styles without external dependencies.",
        },
      ]}
      solution={[
        "Created a single-page application with fast task creation and editing",
        "Implemented intuitive drag-and-drop for task reordering and status changes",
        "Built responsive layouts that work equally well for desktop and mobile teams",
        "Designed clear visual states: pending, in-progress, and completed tasks",
        "Kept the tech stack lightweight for optimal performance",
      ]}
      results="EasyTask successfully provided a frictionless task management experience. Users particularly appreciated the clean interface and how quickly they could start managing tasks without tutorials or documentation."
      liveUrl="https://easytask-app.vercel.app"
      githubUrl="https://github.com/yourusername/easytask"
    />
  );
}