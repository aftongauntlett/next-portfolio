"use client";

import { type JSX } from "react";
import AnimatedList from "@components/AnimatedList";
import ProjectCard from "@components/reusable/ProjectCard";

interface Project {
  title: string;
  tech: string;
  url: string;
  github: string;
  imgSrc: string;
  description: string;
  scenarios: string[];
}

const projects: Project[] = [
  {
    title: "Potomac Dining",
    tech: "Vue.js, BootstrapVue, Firebase",
    url: "https://potomacdining.com/",
    github: "https://github.com/alpharahl/potomac_dining",
    imgSrc: "/screenshots/potomac.png",
    description:
      "Built for a major Applebee’s franchisee with locations across the U.S., Potomac Dining is a custom Vue.js single-page app styled with BootstrapVue and backed by Firebase services. I owned the full lifecycle—requirements, Figma mockups, frontend build, and backend collaboration. The site still runs on my original build.",
    scenarios: [
      "Notification glitch: Traced and fixed a Cloud Function Pub/Sub trigger to reliably send reminder emails.",
      "Login flow repair: Diagnosed and corrected Firebase Auth token logic for smooth sign-ins.",
    ],
  },
  {
    title: "JC Auto Body",
    tech: "Next.js, React, TypeScript, Tailwind CSS, Firebase",
    url: "https://jcautobodyva.com/",
    github: "https://github.com/gauntletdesigns/jc-auto-body",
    imgSrc: "/screenshots/jc.png",
    description:
      "A statically-exported Next.js application for an auto repair shop, styled with Tailwind CSS. I handled requirements, Figma designs, Firebase Hosting setup, and responsive gallery + contact form implementation.",
    scenarios: [
      "Mobile navigation: Added click handler to close drawer on item selection for seamless UX.",
      "Zero-downtime deploy: Configured npm scripts and Firebase Hosting workflows for reliable updates.",
    ],
  },
  {
    title: "Astrid Beauty Salon",
    tech: "Vue.js, BootstrapVue, Firebase",
    url: "https://byastridbeautysalon.com/contactUs",
    github: "https://github.com/gauntletdesigns/astrid-beauty",
    imgSrc: "/screenshots/astrid.png",
    description:
      "My first client project: a Vue.js SPA styled with BootstrapVue for a local salon. I did wireframes, responsive design, shimmer placeholders, and CI deployments to Firebase Hosting.",
    scenarios: [
      "Button bug fix: Removed faulty component and refactored nav logic for smooth scrolling.",
      "Shimmer effect: Implemented CSS shimmer placeholder to improve load perception.",
    ],
  },
];

/**
 * Renders project cards with consistent spacing and reveal animations.
 */
export default function Projects(): JSX.Element {
  return (
    <>
      <p className="mb-6">
        Most of my recent work is under NDA; these entries are live client
        builds, volunteer projects, or passion experiments.
      </p>

      <div className="border-l-2 border-primary pl-4">
        <AnimatedList as="div" className="space-y-40" role="list">
          {projects.map((project, i) => (
            <ProjectCard key={project.url} project={project} index={i} />
          ))}
        </AnimatedList>
      </div>
    </>
  );
}
