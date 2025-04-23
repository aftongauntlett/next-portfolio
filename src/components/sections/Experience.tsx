import Section from "@components/common/Section";

const jobs = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Front-End Engineer",
    time: "Mar 2022 - Present",
    description:
      "Led the redesign of a scalable workspace provisioning platform. Introduced TanStack Query and component modularity, improving performance and developer efficiency.",
  },
  {
    company: "IronClad",
    title: "UI Developer",
    time: "Jan 2022 - Mar 2022",
    description:
      "Contributed to the UI and design system for a next-gen intelligence tool. Worked closely with designers to implement clean, accessible interfaces.",
  },
];

export default function Experience() {
  return (
    <Section>
      <div className="space-y-10">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-primary dark:text-primary-light transition-all duration-300">
          Experience
        </h2>
        <ul className="space-y-8">
          {jobs.map((job) => (
            <li key={job.company}>
              <h3 className="text-xl font-semibold text-text-dark dark:text-text-light">
                {job.title}{" "}
                <span className="text-neutral-500 dark:text-neutral-400">
                  @ {job.company}
                </span>
              </h3>
              <p className="text-sm text-neutral-500 mb-2">{job.time}</p>
              <p className="text-text-dark dark:text-text-light leading-relaxed">
                {job.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
