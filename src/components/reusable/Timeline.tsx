import type { JSX } from "react";
import { motion } from "framer-motion";

interface Job {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Engineer",
    dates: "Mar 2022 - May 2025",
    bullets: [
      "Built scalable front-end platforms with React.js, TypeScript, Python (Flask), and PostgreSQL",
      "Refactored legacy UI into modular components, cutting dev time and improving load performance by 30%",
      "Led adoption of TanStack Query to streamline developer workflows",
      "Developed and customized an internal chatbot using Chatbot UI; integrated with VSCode and optimized prompt settings and UX",
      "Supported front-end development for a Kaggle-style platform for dataset exploration and submission",
    ],
  },
  {
    company: "IronClad",
    title: "UI Developer",
    dates: "Jan 2022 - Mar 2022",
    bullets: [
      "Contributed to early development of a new intelligence platform, supporting stack evaluation and environment setup",
      "Helped establish React front-end architecture and created foundational Figma wireframes",
      "Developed reusable UI components with a focus on scale and consistency",
    ],
  },
  {
    company: "Global Dimensions",
    title: "Front-End Developer",
    dates: "October 2021 - Mar 2022",
    bullets: [
      "Built accessible, interactive front-end interfaces for geospatial analysis apps using Vue.js and Vuetify",
      "Developed responsive layouts, animations, and map-based components in collaboration with designers and engineers",
      "Ensured WCAG compliance, performance tuning, and modern design patterns across all UI work",
    ],
  },
  {
    company: "Gauntlet Designs, LLC",
    title: "Founder & Developer",
    dates: "August 2020 - January 2025",
    bullets: [
      "Designed and launched responsive websites and web apps for 15+ small businesses using Vue.js, Firebase, Figma, and Squarespace",
      "Delivered SEO-optimized, accessible user experiences with high-performance front-end builds",
      "Managed branding, UX strategy, client communication, and agile delivery end-to-end",
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
        {jobs.map(({ company, title, dates, bullets }, i) => (
          <div key={i} className="mb-12 pl-12 relative group">
            <div
              className="absolute left-[11px] top-0 w-3 h-3 rounded-full bg-teal-300
                      transition-shadow duration-200 ease-out
                      group-hover:shadow-[0_0_8px_4px_rgba(45,212,191,0.5)]"
            />
            <h3 className="text-lg font-medium text-white">
              {title} <span className="font-normal">@ {company}</span>
            </h3>
            <time className="block text-sm text-gray-400 mb-2">{dates}</time>
            <ul className="space-y-3">
              <motion.ul
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="flex items-start"
                  >
                    {/* fixed-width dash */}
                    <span className="inline-block w-3 h-[1px] bg-teal-300 flex-shrink-0 mt-2.5" />
                    <p className="ml-3 text-gray-200 leading-snug">{b}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
