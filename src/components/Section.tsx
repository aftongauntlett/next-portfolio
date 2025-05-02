"use client";

import { motion } from "framer-motion";
import TextHoverDrip from "./reusable/TextHoverDrip";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="py-40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {title && (
        <TextHoverDrip>
          <h2 className="text-4xl mb-8">{title}</h2>
        </TextHoverDrip>
      )}
      <div>{children}</div>
    </motion.section>
  );
}
