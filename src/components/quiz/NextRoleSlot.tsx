"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@components/reusable/Button";
import type { Job } from "./NewJobEntry";

export default function NextRoleSlot({
  onNewJob,
}: {
  onNewJob: (j: Job) => void;
}) {
  const [stage, setStage] = useState<"teaser" | "form">("teaser");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit() {
    const now = new Date(),
      month = now.toLocaleString("default", { month: "long" }),
      year = now.getFullYear(),
      day = now.getDay(),
      dates = `Available: ${month} ${day}, ${year}`;

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
        <div
          key="teaser"
          className="mb-12 pl-12 relative group cursor-pointer"
          onClick={() => setStage("form")}
        >
          <div className="bg-gray-300 group-hover:bg-teal-300 absolute left-[11px] top-0 w-3 h-3 rounded-full" />
          <h3 className="text-lg font-medium text-gray-400 italic group-hover:text-teal-300 transition-colors">
            What's my next role?
          </h3>
        </div>
      )}

      {stage === "form" && (
        <motion.form
          key="form"
          layout
          className="mb-12 pl-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            company.trim() && title.trim() && handleSubmit();
          }}
        >
          <div className="space-y-4 p-6 bg-slate-700/30 text-white rounded-lg">
            <label className="block">
              <h3 className="text-lg font-medium">
                What's the name of your company?
              </h3>
              <input
                className="mt-1 block w-full px-3 py-2 rounded-md bg-black/70 text-gray-100"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Acme Corp"
              />
            </label>

            <label className="block">
              <h3 className="text-lg font-medium">
                And what would my job title?
              </h3>
              <input
                className="mt-1 block w-full px-3 py-2 rounded-md bg-black/70 text-gray-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Front-End Developer"
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
