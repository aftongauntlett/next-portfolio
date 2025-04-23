import Section from "@components/common/Section";

const projects = [
  {
    title: "Dataset Sharing Platform",
    description:
      "A Kaggle-style site to upload and explore datasets. Built with React, Flask, and PostgreSQL. Supports user uploads, comments, and a sleek search UI.",
    link: "#",
  },
  {
    title: "AI Chatbot Interface",
    description:
      "Customized chatbot UI integrating Claude Sonnet. Based on Chatbot-UI with prompt tuning, VSCode integration, and real-time query support.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section>
      <div className="space-y-10">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-text-dark dark:text-text-light">
                {proj.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 my-3">
                {proj.description}
              </p>
              <a
                href={proj.link}
                className="text-primary hover:underline text-sm font-medium dark:text-primary-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
