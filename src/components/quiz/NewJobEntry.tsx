"use client";

import type { FC } from "react";

export interface Job {
  company: string;
  title: string;
  dates: string;
  description: string[];
}

const NewJobEntry: FC<{ job: Job }> = ({ job }) => (
  <>
    <h3 className="text-lg font-medium text-color-primary transition-colors group-hover:text-teal-300 capitalize">
      {job.title} <span className="font-normal">@ {job.company}</span>
    </h3>

    <time className="block text-sm text-gray-400 mb-2">{job.dates}</time>
    <ul className="space-y-2">
      {job.description.map((line, i) => (
        <li key={i} className="ml-3 text-gray-200 leading-snug">
          {line}
        </li>
      ))}
    </ul>
  </>
);

export default NewJobEntry;
