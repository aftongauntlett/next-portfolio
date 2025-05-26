"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { type JSX, type ReactNode } from "react";

interface TimelineItemProps {
  id: string;
  title: string;
  company: string;
  dates: string;
  isFirst: boolean;
  isActive: boolean;
  children: ReactNode;
}

/**
 * TimelineItem renders a motion-wrapped article with
 * a dot indicator, heading, date, and custom children.
 */
export default function TimelineItem({
  id,
  title,
  company,
  dates,
  isFirst,
  isActive,
  children,
}: TimelineItemProps): JSX.Element {
  return (
    <motion.article
      key={id}
      className={clsx("timeline-item group", {
        "first:mt-0": isFirst,
      })}
      initial={{ opacity: 0, y: isActive ? -10 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      tabIndex={0}
      aria-labelledby={`${id}-heading`}
      aria-describedby={`${id}-date ${id}-desc`}
    >
      <span
        className={clsx(
          "timeline-dot transition-colors timeline-dot-glow",
          isFirst && !isActive
            ? "bg-primary"
            : isActive
            ? "bg-primary animate-pulse"
            : "bg-gray-300 group-hover:bg-primary"
        )}
        aria-hidden="true"
      />
      <h3
        id={`${id}-heading`}
        className="timeline-title transition-colors group-hover:text-primary"
      >
        {title} <span className="font-normal">@ {company}</span>
      </h3>

      <time id={`${id}-date`} className="timeline-date">
        {dates}
      </time>

      <div id={`${id}-desc`} className="mt-4">
        {children}
      </div>
    </motion.article>
  );
}
