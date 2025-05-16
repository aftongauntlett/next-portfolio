"use client";

import { type FC } from "react";

/**
 * Job type for rendering a single timeline entry.
 */
export interface Job {
  company: string;
  title: string;
  dates: string;
  description: string[];
}

/**
 * Renders a single job entry for the timeline.
 * Accessible, clean, and styled using global timeline classes.
 */
const NewJobEntry: FC<{ job: Job }> = ({ job }) => (
  <div>
    <h3 className="timeline-title">
      {job.title} <span className="font-normal">@ {job.company}</span>
    </h3>
    <time className="timeline-date">{job.dates}</time>
    <ul className="space-y-2">
      {job.description.map((line, idx) => (
        <li key={idx} className="timeline-description">
          {line}
        </li>
      ))}
    </ul>
  </div>
);

export default NewJobEntry;
