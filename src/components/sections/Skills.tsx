import type { JSX } from "react";

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
    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="">{category}</h3>
          <ul role="list" aria-label={category} className="space-y-2">
            {items.map((skill) => (
              <li key={skill} className="leading-relaxed">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
