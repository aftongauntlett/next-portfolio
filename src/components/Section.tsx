"use client";

import { motion } from "framer-motion";
import TextHoverDrip from "./reusable/TextHoverDrip";
import type { JSX } from "react";

/**
 * Props for Section component
 * @param id – unique section ID for navigation
 * @param title – optional heading text
 */
interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

/**
 * Section wrapper for consistent layout, spacing, and accessibility.
 */
export default function Section({
  id,
  title,
  children,
}: SectionProps): JSX.Element {
  // Generate a heading ID for accessibility if a title is provided
  const headingId = title ? `${id}-heading` : undefined;

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby={headingId}
      className="section"
    >
      {/* Section Title */}
      {title && (
        <TextHoverDrip>
          <h2 id={headingId} className="section-heading">
            {title}
          </h2>
        </TextHoverDrip>
      )}

      {/* Section Content */}
      <div className="section-content">{children}</div>
    </motion.section>
  );
}
