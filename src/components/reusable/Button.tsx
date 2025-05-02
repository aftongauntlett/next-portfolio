"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  text,
  icon,
  external = false,
  type = "button",
  className = "",
  ...rest
}: ButtonProps) {
  // merge base + custom classes
  const classes = [
    "hover:text-teal-300 hover:border-teal-200 hover:cursor-pointer mt-5",
    "inline-flex items-center gap-1 px-3 py-1",
    "border border-gray-300 text-gray-100 text-sm rounded-md",
    "transition-all duration-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // the inner content stays the same
  const content = (
    <>
      <span>{text}</span>
      {icon && <span className="text-teal-300 ms-1 text-lg">{icon}</span>}
    </>
  );

  // External link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={text}
      >
        {content}
      </a>
    );
  }

  // Internal Next.js link
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={text}>
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
