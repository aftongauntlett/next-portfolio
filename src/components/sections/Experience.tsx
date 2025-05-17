"use client";

import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import NewJobEntry from "@components/quiz/NewJobEntry";
import NextRoleSlot from "@components/quiz/NextRoleSlot";
import { jobs, type Job } from "data/jobs";
import AnimatedList from "@components/AnimatedList";

/**
 * Career timeline/experience section.
 * Shows interactive job entries and supports adding a new role.
 */
export default function Experience(): JSX.Element {
  const [currentJob, setCurrentJob] = useState<Job | null>(null);

  return (
    <section
      aria-labelledby="experience-job-list"
      className="timeline-vertical"
    >
      {/* Dynamic "add new role" slot */}
      {!currentJob && <NextRoleSlot onNewJob={setCurrentJob} />}

      {/* Render a new, dynamic job if present */}
      {currentJob && (
        <motion.article
          key="dynamic"
          className="timeline-item"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label={`Job at ${currentJob.company}`}
          tabIndex={0}
        >
          <motion.div
            className="timeline-dot bg-teal-300"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            aria-hidden="true"
          />
          <NewJobEntry job={currentJob} />
        </motion.article>
      )}

      {/* Timeline of jobs */}
      {jobs.map((job, idx) => {
        const headingId = `job-title-${idx}`;
        const descId = `job-desc-${idx}`;
        const dateId = `job-date-${idx}`;

        return (
          <article
            key={`${job.company}-${job.title}-${job.dates}`}
            className="timeline-item group"
            tabIndex={0}
            aria-labelledby={headingId}
            aria-describedby={`${dateId} ${descId}`}
          >
            <div
              className={`timeline-dot ${
                !currentJob && idx === 0
                  ? "bg-teal-300"
                  : "bg-gray-300 group-hover:bg-teal-300"
              } timeline-dot-glow`}
              aria-hidden="true"
            />
            <h3
              id={headingId}
              className="timeline-title text-white transition-colors group-hover:text-teal-300"
            >
              {job.title} <span className="font-normal">@ {job.company}</span>
            </h3>
            <time id={dateId} className="timeline-date">
              {job.dates}
            </time>
            <AnimatedList as="ul">
              {job.description.map((line, j) => (
                <motion.li key={j}>{line}</motion.li>
              ))}
            </AnimatedList>
          </article>
        );
      })}
    </section>
  );
}
