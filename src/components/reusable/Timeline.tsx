import type { JSX } from "react";
import { motion } from "framer-motion";

interface Job {
  company: string;
  title: string;
  dates: string;
  description: string[];
}

const jobs: Job[] = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Engineer",
    dates: "Mar 2022 - May 2025",
    description: [
      "Contributed the migrating a large Angular & Express codebase into a modular React/TypeScript stack, boosting performance and maintainability. Introduced TanStack Query to slash data-fetch iteration by 30%, implemented ESLint/Prettier formatting with Husky pre-commit hooks to enforce code quality, and led a Figma redesign of the flagship app - earning an industry award for UI innovation.",
    ],
  },
  {
    company: "IronClad",
    title: "UI Developer",
    dates: "Jan 2022 - Mar 2022",
    description: [
      "Participated in preliminary preparations for a React-based intelligence platform - evaluating front-end stacks, prototyping initial UI components, and producing foundational Figma wireframes to help establish a scalable design system.",
    ],
  },
  {
    company: "Global Dimensions",
    title: "Front-End Developer",
    dates: "October 2021 - Mar 2022",
    description: [
      "Developed accessible, interactive front-end interfaces for geospatial analytics applications with Vue.js and Vuetify. Partnered closely with designers to implement responsive layouts, sophisticated map components, and animations, all tuned for performance and 508 compliance.",
    ],
  },
  {
    company: "Gauntlet Designs, LLC",
    title: "Founder & Developer",
    dates: "August 2020 - January 2025",
    description: [
      "Founded Gauntlet Designs to help small businesses launch affordable, responsive web presences. From farmers markets and local artists to healthcare providers and salons -  what began as a volunteer effort grew into a boutique studio. I used a combination of Vue.js, Next.js, Firebase, Vercel, Figma, WordPress and Squarespace - based on trending technology, cost efficiency, and client needs.",
    ],
  },
];

export default function Timeline(): JSX.Element {
  const list = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-gray-700">
        {jobs.map(({ company, title, dates, description }, i) => (
          <div key={i} className="mb-12 pl-12 relative group">
            <div
              className={
                i === 0
                  ? "bg-teal-300 absolute left-[11px] top-0 w-3 h-3 rounded-full transition-shadow duration-200 ease-out group-hover:shadow-[0_0_8px_4px_rgba(45,212,191,0.5)]"
                  : "bg-gray-300 group-hover:bg-teal-300 absolute left-[11px] top-0 w-3 h-3 rounded-full transition-shadow duration-200 ease-out group-hover:shadow-[0_0_8px_4px_rgba(45,212,191,0.5)]"
              }
            />
            <h3 className="text-lg font-medium text-white transition-colors group-hover:text-teal-300">
              {title} <span className="font-normal">@ {company}</span>
            </h3>
            <time className="block text-sm text-gray-400 mb-2">{dates}</time>
            <div className="space-y-3">
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {description.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="flex items-start"
                  >
                    <p className="ml-3 text-gray-200 leading-snug">{b}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
