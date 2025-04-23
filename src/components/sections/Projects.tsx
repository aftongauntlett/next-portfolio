import type { JSX } from "react";
import Section from "@components/common/Section";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
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

export default function Projects(): JSX.Element {
  return (
    <Section
      id="projects"
      aria-labelledby="projects-heading"
      className="space-y-10"
    >
      <h2
        id="projects-heading"
        className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300"
      >
        Projects
      </h2>

      <div role="list" className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <article
            key={proj.title}
            role="listitem"
            className="card hover-shadow"
          >
            <h3 className="text-xl font-semibold text-text-dark dark:text-text-light">
              {proj.title}
            </h3>
            <p className="leading-relaxed text-text-dark dark:text-text-light my-3">
              {proj.description}
            </p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
              aria-label={`View project ${proj.title}`}
            >
              View project →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
