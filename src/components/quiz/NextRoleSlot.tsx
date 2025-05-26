"use client";

import { JSX, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@components/reusable/Button";
import { type Job } from "data/jobs";

interface NextRoleSlotProps {
  /** Callback invoked when a new job is proposed */
  onNewJob: (job: Job) => void;
}

/**
 * Renders an interactive slot allowing users to propose a new dynamic job.
 * - Teaser view prompts the user
 * - Form view collects company and title, then submits
 */
export default function NextRoleSlot({
  onNewJob,
}: NextRoleSlotProps): JSX.Element {
  const [stage, setStage] = useState<"teaser" | "form">("teaser");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (): void => {
    const now = new Date();
    const month = now.toLocaleString("default", { month: "long" });
    const day = now.getDate();
    const year = now.getFullYear();
    const dates = `Available: ${month} ${day}, ${year}`;

    onNewJob({
      company,
      title,
      dates,
      description: [
        `We both agree, I would make a great ${title} at ${company}, let's chat!`,
      ],
    });
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {stage === "teaser" && (
        <div
          key="teaser"
          className="timeline-item group cursor-pointer"
          onClick={() => setStage("form")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setStage("form");
          }}
          role="button"
          tabIndex={0}
          aria-label="Propose my next role"
        >
          <span
            className="timeline-dot bg-primary animate-pulse group-hover:bg-primary"
            aria-hidden="true"
          />
          <h3 className="timeline-title text-primary italic transition-colors">
            What's my next role?
          </h3>
        </div>
      )}

      {stage === "form" && (
        <motion.form
          key="form"
          className="timeline-item space-y-4 p-6 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            if (company.trim() && title.trim()) handleSubmit();
          }}
        >
          <label className="block">
            <span className="timeline-title">
              What's the name of your company?
            </span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g. Acme Corp"
              aria-label="Company name"
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-primary focus:border-primary"
            />
          </label>

          <label className="block">
            <span className="timeline-title">
              And what would my job title be?
            </span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Front-End Developer"
              aria-label="Job title"
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring focus:ring-primary focus:border-primary"
            />
          </label>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!company.trim() || !title.trim()}
              text="Submit"
            />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
