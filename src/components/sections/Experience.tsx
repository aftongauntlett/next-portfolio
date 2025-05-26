"use client";

import { useState, type JSX } from "react";
import { jobs, type Job } from "data/jobs";
import NextRoleSlot from "@components/quiz/NextRoleSlot";
import NewJobEntry from "@components/quiz/NewJobEntry";
import AnimatedList from "@components/AnimatedList";
import TimelineItem from "@components/reusable/TimelineItem";

/** Renders the career timeline with interactive job entries. */
export default function Experience(): JSX.Element {
  const [currentJob, setCurrentJob] = useState<Job | null>(null);

  const entries = [
    ...(currentJob
      ? [
          {
            id: "dynamic",
            title: currentJob.title,
            company: currentJob.company,
            dates: currentJob.dates,
            isFirst: false,
            isActive: true,
            content: <NewJobEntry job={currentJob} />,
          },
        ]
      : []),
    ...jobs.map((job, idx) => ({
      id: `${job.company}-${idx}`,
      title: job.title,
      company: job.company,
      dates: job.dates,
      isFirst: !currentJob && idx === 0,
      isActive: false,
      content: (
        <AnimatedList as="ul" className="list-none space-y-2 mt-4" role="list">
          {job.description.map((line, j) => (
            <li key={j}>{line}</li>
          ))}
        </AnimatedList>
      ),
    })),
  ];

  return (
    <div className="timeline-vertical">
      {!currentJob && <NextRoleSlot onNewJob={setCurrentJob} />}

      {entries.map(
        ({ id, title, company, dates, isFirst, isActive, content }) => (
          <TimelineItem
            key={id}
            id={id}
            title={title}
            company={company}
            dates={dates}
            isFirst={isFirst}
            isActive={isActive}
          >
            {content}
          </TimelineItem>
        )
      )}
    </div>
  );
}
