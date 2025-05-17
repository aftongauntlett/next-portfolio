"use client";

import { FieldError, UseFormRegister } from "react-hook-form";
import React from "react";

interface TextAreaFieldProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  rows?: number;
  placeholder?: string;
  className?: string;
}

/**
 * TextAreaField
 * Renders a label + textarea + error message.
 */
export function TextAreaField({
  id,
  label,
  register,
  error,
  rows = 4,
  placeholder,
  className = "",
}: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none resize-none ${className}`}
        {...register(id)}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error.message}</p>}
    </div>
  );
}
