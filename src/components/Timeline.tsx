"use client";

import { useState } from "react";
import type { JSX } from "react";
import { motion } from "framer-motion";
import NextRoleSlot from "./quiz/NextRoleSlot";
import NewJobEntry from "./quiz/NewJobEntry";

interface Job {
  company: string;
  title: string;
  dates: string;
  description: string[];
}

interface StaticJob extends Job {}

const staticJobs: StaticJob[] = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Engineer",
    dates: "MARCH 2022 - MAY 2025",
    description: [
      "Contributed the migrating a large Angular & Express codebase into a modular React/TypeScript stack, boosting performance and maintainability. Introduced TanStack Query to slash data-fetch iteration by 30%, implemented ESLint/Prettier formatting with Husky pre-commit hooks to enforce code quality, and led a Figma redesign of the flagship app - earning an industry award for UI innovation.",
    ],
  },
  {
    company: "IronClad",
    title: "UI Developer",
    dates: "JANUARY 2022 - MARCH 2022",
    description: [
      "Participated in preliminary preparations for a React-based intelligence platform - evaluating front-end stacks, prototyping initial UI components, and producing foundational Figma wireframes to help establish a scalable design system.",
    ],
  },
  {
    company: "Global Dimensions",
    title: "Front-End Developer",
    dates: "OCTOBER 2021 - MARCH 2022",
    description: [
      "Developed accessible, interactive front-end interfaces for geospatial analytics applications with Vue.js and Vuetify. Partnered closely with designers to implement responsive layouts, sophisticated map components, and animations, all tuned for performance and 508 compliance.",
    ],
  },
  {
    company: "Gauntlet Designs, LLC",
    title: "Founder & Developer",
    dates: "AUGUST 2020 - JANUARY 2025",
    description: [
      "Founded Gauntlet Designs to help small businesses launch affordable, responsive web presences. From farmers markets and local artists to healthcare providers - what began as a volunteer effort grew into a small businesss. I used a combination of Vue.js, Next.js, Firebase, Vercel, Figma and Squarespace.",
    ],
  },
];

export default function Timeline(): JSX.Element {
  const [dynamicJob, setDynamicJob] = useState<Job | null>(null);

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
        {!dynamicJob && <NextRoleSlot onNewJob={setDynamicJob} />}

        {dynamicJob && (
          <motion.div
            key="dynamic"
            className="mb-12 pl-12 relative group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="absolute left-[11px] top-0 w-3 h-3 rounded-full bg-teal-300"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            <NewJobEntry job={dynamicJob} />
          </motion.div>
        )}

        {staticJobs.map((job, i) => (
          <div key={i} className="mb-12 pl-12 relative group">
            <div
              className={
                !dynamicJob && i === 0
                  ? "bg-teal-300 absolute left-[11px] top-0 w-3 h-3 rounded-full transition-shadow duration-200 ease-out group-hover:shadow-[0_0_8px_4px_rgba(45,212,191,0.5)]"
                  : "bg-gray-300 group-hover:bg-teal-300 absolute left-[11px] top-0 w-3 h-3 rounded-full transition-shadow duration-200 ease-out group-hover:shadow-[0_0_8px_4px_rgba(45,212,191,0.5)]"
              }
            />
            <h3 className="text-lg font-medium text-white transition-colors group-hover:text-teal-300">
              {job.title} <span className="font-normal">@ {job.company}</span>
            </h3>
            <time className="block text-sm text-gray-400 mb-2">
              {job.dates}
            </time>
            <motion.ul
              variants={list}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {job.description.map((line, j) => (
                <motion.li key={j} variants={item} className="flex items-start">
                  <p className="ml-3 text-gray-200 leading-snug">{line}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </>
  );
}
