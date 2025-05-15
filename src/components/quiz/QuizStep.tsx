"use client";

import { FC } from "react";
import Button from "@components/reusable/Button";

interface QuizStepProps {
  question: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
  nextLabel?: string;
}

const QuizStep: FC<QuizStepProps> = ({
  question,
  placeholder,
  value,
  onChange,
  onNext,
  nextLabel = "Submit",
}) => (
  <div className="flex flex-col space-y-4 p-6 bg-slate-700/30 text-white rounded-lg">
    <label className="text-lg font-medium">{question}</label>
    <input
      type="text"
      className="px-3 py-2 rounded-md bg-slate-800 text-gray-100"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onKeyDown={(e) => e.key === "Enter" && value.trim() && onNext()}
    />
    <div className="flex justify-end">
      <Button disabled={!value.trim()} onClick={onNext} text={nextLabel} />
    </div>
  </div>
);

export default QuizStep;
