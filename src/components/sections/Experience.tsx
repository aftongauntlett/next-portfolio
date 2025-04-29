import type { JSX } from "react";

interface Job {
  company: string;
  title: string;
  time: string;
  description: string;
}

const jobs: Job[] = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Front-End Engineer",
    time: "Mar 2022 – Present",
    description:
      "Led the redesign of a scalable workspace provisioning platform. Introduced TanStack Query and component modularity, improving performance and developer efficiency.",
  },
  {
    company: "IronClad",
    title: "UI Developer",
    time: "Jan 2022 – Mar 2022",
    description:
      "Contributed to the UI and design system for a next-gen intelligence tool. Worked closely with designers to implement clean, accessible interfaces.",
  },
];

export default function Experience(): JSX.Element {
  return (
    <ul aria-label="Work experience" className="space-y-8">
      {jobs.map((job) => (
        <li key={job.company} className="space-y-2">
          <h3 className="">
            {job.title} <span className="">@ {job.company}</span>
          </h3>
          <p className="">{job.time}</p>
          <p className="">{job.description}</p>
        </li>
      ))}
    </ul>
  );
}
