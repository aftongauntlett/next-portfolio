"use client";

import AnimatedList from "@components/AnimatedList";
import { motion } from "framer-motion";

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

/**
 * Skills section displays categorized tech, design, and core skills.
 * Uses motion for animated reveal and global classes for consistency.
 */
export default function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <div className="skills-grid" role="list">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="skills-category">{category}</h3>
            <AnimatedList as="ul" className="skills-list">
              {items.map((skill) => (
                <motion.li
                  key={skill}
                  className="skills-pill"
                  tabIndex={0}
                  aria-label={skill}
                >
                  {skill}
                </motion.li>
              ))}
            </AnimatedList>
          </div>
        ))}
      </div>
    </section>
  );
}
