"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

type AnchorProps = {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonOnlyProps = {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type CommonProps = {
  text: string;
  icon?: React.ReactNode;
  className?: string;
};

type Props = CommonProps & (AnchorProps | ButtonOnlyProps);

/**
 * Reusable button component for links and actions.
 * Applies consistent styling and supports icons, accessibility, and external/internal links.
 */
export default function Button(props: Props) {
  const { text, icon, className, href, external, ...rest } =
    props as AnchorProps & CommonProps;

  // Use a global .btn class for DRYness; allow custom className overrides
  const classes = clsx("btn", className);

  // Consistent button/link content
  const content = (
    <>
      <span>{text}</span>
      {icon && <span className="text-teal-300 ml-1 text-lg">{icon}</span>}
    </>
  );

  // External anchor link
  if (href) {
    if (external) {
      const { onClick, ...anchorRest } =
        rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    // Internal link using next/link
    const { onClick, ...linkRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} onClick={onClick} {...linkRest}>
        {content}
      </Link>
    );
  }

  // Native button
  const {
    onClick,
    disabled,
    type = "button",
    ...buttonRest
  } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={classes}
      onClick={onClick}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
