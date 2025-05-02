import type { JSX } from "react";

interface Job {
  company: string;
  title: string;
  dates: string;
  description: string;
}

const jobs: Job[] = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Engineer",
    dates: "Mar 2022 - May 2025",
    description:
      "Led the redesign of a scalable workspace provisioning platform. Introduced TanStack Query and component modularity, improving performance and developer efficiency.",
  },
  {
    company: "IronClad",
    title: "UI Developer",
    dates: "Jan 2022 - Mar 2022",
    description:
      "Contributed to the UI and design system for a next-gen intelligence tool. Worked closely with designers to implement clean, accessible interfaces.",
  },
  {
    company: "Global Dimensions",
    title: "Front-End Developer",
    dates: "October 2021 - Mar 2022",
    description:
      "Contributed to the UI and design system for a next-gen intelligence tool. Worked closely with designers to implement clean, accessible interfaces.",
  },
  {
    company: "Gauntlet Designs, LLC",
    title: "Founder & Developer",
    dates: "August 2020 - January 2025",
    description:
      "Contributed to the UI and design system for a next-gen intelligence tool. Worked closely with designers to implement clean, accessible interfaces.",
  },
];

export default function Timeline(): JSX.Element {
  return (
    <>
      <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-gray-700">
        {jobs.map(({ company, title, dates, description }, i) => (
          <div key={i} className="mb-12 pl-12 relative group">
            <div
              className="
          absolute
          left-[11px] top-0
          w-3 h-3
          rounded-full
          bg-teal-300
          transition-shadow duration-200 ease-out
          group-hover:shadow-[0_0_8px_4px_rgba(45,212,191,0.5)]
        "
            />
            <h3 className="text-lg font-medium text-white">
              {title} <span className="font-normal">@ {company}</span>
            </h3>
            <time className="block text-sm text-gray-400 mb-2">{dates}</time>
            <p className="text-gray-200 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
