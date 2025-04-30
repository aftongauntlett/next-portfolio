"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  text: string;
  icon?: ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  href,
  text,
  icon,
  external = false,
  type,
  className = "",
}: ButtonProps) {
  const sharedClasses =
    "btn-animated-border inline-flex items-center gap-1 px-3 py-1 border border-blue-300 text-blue-100 text-sm rounded-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-400 group cursor-pointer";

  const content = (
    <span className="flex items-center gap-1">
      {text}
      {icon && <span>{icon}</span>}
    </span>
  );

  if (type) {
    return (
      <button type={type} className={`${sharedClasses} ${className}`}>
        {content}
      </button>
    );
  }

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${sharedClasses} ${className}`}
        aria-label={text}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`${sharedClasses} ${className}`}
        aria-label={text}
      >
        {content}
      </Link>
    );
  }

  return null;
}
