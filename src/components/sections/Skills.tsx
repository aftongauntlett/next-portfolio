import type { JSX } from "react";
import Section from "@components/common/Section";

const skills: Record<string, string[]> = {
  "Languages & Frameworks": [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Sass",
    "React.js",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Python",
    "Flask",
    "TanStack Query",
  ],
  "UI/UX & Design Systems": [
    "Figma",
    "GSAP",
    "Framer",
    "Adobe XD",
    "Tailwind CSS",
    "Bootstrap",
    "Material Design",
    "Vuetify",
    "Responsive design",
    "Accessibility",
    "508 Compliance",
    "Storybook",
  ],
  "Developer Tools & Platforms": [
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Docker",
    "Postman",
    "Jenkins",
    "ArgoCD",
    "RESTful APIs",
    "CI/CD Exposure",
  ],
};

export default function Skills(): JSX.Element {
  return (
    <Section
      id="skills"
      aria-labelledby="skills-heading"
      className="space-y-12"
    >
      <h2
        id="skills-heading"
        className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300"
      >
        Skills
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-[clamp(1rem,2vw,1.125rem)]">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-text-dark dark:text-text-light">
              {category}
            </h3>
            <ul
              role="list"
              aria-label={category}
              className="space-y-2 text-text-dark dark:text-text-light"
            >
              {items.map((skill) => (
                <li key={skill} className="leading-relaxed">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
