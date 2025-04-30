"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="min-h-[80vh] scroll-mt-28 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl text-blue-200 font-semibold mb-4">{title}</h2>
      <div>{children}</div>
    </motion.section>
  );
}
