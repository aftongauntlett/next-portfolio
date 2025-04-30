"use client";

import { motion } from "framer-motion";
import type { JSX } from "react";

const skills: Record<string, string[]> = {
  "Languages & Frameworks": [
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
  "UI/UX & Design Systems": [
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
    "Theming Systems",
  ],
  "Developer Tools & Platforms": [
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
    "npm/yarn",
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
      className="grid md:grid-cols-3 gap-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Object.entries(skills).map(([category, items]) => (
        <motion.div key={category} variants={item}>
          <h3 className="text-lg font-semibold mb-4 text-blue-200">
            {category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <motion.li
                key={skill}
                variants={item}
                className="px-3 py-1 border border-blue-300 text-sm rounded-md text-blue-100 hover:bg-blue-800/30 transition-colors duration-200"
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
