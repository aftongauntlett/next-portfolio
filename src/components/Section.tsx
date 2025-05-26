"use client";

import TextHoverDrip from "./reusable/TextHoverDrip";
import { motion } from "framer-motion";
import type { JSX } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/**
 * Section wrapper for consistent layout, spacing, accessibility,
 * *and* unified slide-up fade-in animation.
 */
export default function Section({
  id,
  title,
  children,
}: SectionProps): JSX.Element {
  const headingId = title ? `${id}-heading` : undefined;

  return (
    <motion.section
      id={id}
      aria-labelledby={headingId}
      className="section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && (
        <TextHoverDrip>
          <h2
            id={headingId}
            className="paint-splash text-4xl font-heading font-bold mb-8 text-text"
            data-splash={title}
            aria-label={title}
          >
            {title}
          </h2>
        </TextHoverDrip>
      )}

      <div className="section-content">{children}</div>
    </motion.section>
  );
}
