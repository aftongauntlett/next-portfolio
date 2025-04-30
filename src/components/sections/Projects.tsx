import Button from "@components/Button";
import type { JSX } from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

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
    <div role="list" className="grid md:grid-cols-2 gap-6">
      {projects.map((proj) => (
        <article key={proj.title} role="listitem" className="card hover-shadow">
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="leading-relaxed my-3">{proj.description}</p>
          <Button
            href="#project"
            text=" View project"
            icon={<HiOutlineArrowTopRightOnSquare className="w-4 h-4" />}
          />
        </article>
      ))}
    </div>
  );
}
