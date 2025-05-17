"use client";

import { FieldError, UseFormRegister } from "react-hook-form";
import React from "react";

interface TextFieldProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  className?: string;
}

/**
 * TextField
 * Renders a label + input + error message in a consistent layout.
 */
export function TextField({
  id,
  label,
  register,
  error,
  type = "text",
  placeholder,
  className = "",
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`mt-1 w-full px-4 py-2 bg-transparent border border-gray-400 rounded-md text-sm placeholder-gray-400 focus:outline-none ${className}`}
        {...register(id)}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error.message}</p>}
    </div>
  );
}
