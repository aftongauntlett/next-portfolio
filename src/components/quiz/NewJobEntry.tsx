"use client";

import { type JSX } from "react";
import { type Job } from "data/jobs";

interface NewJobEntryProps {
  job: Job;
}

/**
 * Renders only the description bullets for a new, dynamic job.
 * Headings and dates are handled by TimelineItem.
 */
export default function NewJobEntry({ job }: NewJobEntryProps): JSX.Element {
  return (
    <ul role="list" className="list-none space-y-2 mt-4">
      {job.description.map((line, idx) => (
        <li key={idx} className="timeline-description">
          {line}
        </li>
      ))}
    </ul>
  );
}
