"use client";

import { motion } from "framer-motion";
import type { JSX } from "react";

const skills: Record<string, string[]> = {
  Frameworks: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Python",
    "Flask",
    "Jest",
    "TanStack Query",
  ],
  Design: [
    "Tailwind CSS",
    "Bootstrap",
    "Material Design",
    "Vuetify",
    "Figma",
    "Adobe XD",
    "Framer",
    "Storybook",
    "GSAP",
    "Responsive design",
    "508 Compliance",
    "Accessibility (WCAG)",
  ],
  Development: [
    "CI/CD Exposure",
    "RESTful APIs",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Docker",
    "Postman",
    "Jenkins",
    "ArgoCD",
    "PostgreSQL",
    "VSCode",
    "Webstorm",
    "ESLint",
    "Prettier",
  ],
  Core: [
    "Human Centered Design",
    "Agile",
    "Leadership",
    "Team Building",
    "Mentoring",
    "Code Reviews",
    "Scrum",
    "Problem Solving",
    "Debugging",
    "Collaboration",
    "Communication",
  ],
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Skills(): JSX.Element {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-4 space-y-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Object.entries(skills).map(([category, items]) => (
        <motion.div key={category} variants={item}>
          <h3 className="text-lg font-semibold mb-3 text-gray-200">
            {category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <motion.li
                key={skill}
                variants={item}
                className="px-3 py-1 border border-gray-300 text-sm rounded-md text-gray-100 hover:text-teal-300 hover:bg-slate-900 cursor-default"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
