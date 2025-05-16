"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@components/reusable/Button";
import type { Job } from "./NewJobEntry";

/**
 * Slot for proposing a new, dynamic job entry.
 * Accessible, clear, and using global timeline classes for layout.
 */
export default function NextRoleSlot({
  onNewJob,
}: {
  onNewJob: (j: Job) => void;
}) {
  const [stage, setStage] = useState<"teaser" | "form">("teaser");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");

  // Handle form submission to add a new job
  function handleSubmit() {
    const now = new Date();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();
    const day = now.getDate();
    const dates = `Available: ${month} ${day}, ${year}`;

    onNewJob({
      company,
      title,
      dates,
      description: [
        `We both agree, I would make a great ${title} at ${company}, let's chat!`,
      ],
    });
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      {stage === "teaser" && (
        // Teaser prompt for adding a new job
        <div
          key="teaser"
          className="timeline-item group cursor-pointer"
          onClick={() => setStage("form")}
          tabIndex={0}
          role="button"
          aria-label="Propose my next role"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setStage("form");
          }}
        >
          <div
            className="timeline-dot bg-gray-300 group-hover:bg-teal-300"
            aria-hidden="true"
          />
          <h3 className="timeline-title text-gray-400 italic group-hover:text-teal-300 transition-colors">
            What's my next role?
          </h3>
        </div>
      )}

      {stage === "form" && (
        // Animated form for entering company and job title
        <motion.form
          key="form"
          layout
          className="timeline-item"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            if (company.trim() && title.trim()) handleSubmit();
          }}
        >
          <div className="space-y-4 p-6 bg-slate-700/30 text-white rounded-lg">
            <label className="block">
              <span className="timeline-title">
                What's the name of your company?
              </span>
              <input
                className="mt-1 block w-full px-3 py-2 rounded-md bg-black/70 text-gray-100"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Corp"
                aria-label="Company name"
              />
            </label>
            <label className="block">
              <span className="timeline-title">
                And what would my job title be?
              </span>
              <input
                className="mt-1 block w-full px-3 py-2 rounded-md bg-black/70 text-gray-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Front-End Developer"
                aria-label="Job title"
              />
            </label>
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={!company.trim() || !title.trim()}
                text="Submit"
              />
            </div>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
