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

export default function Button(props: Props) {
  const { text, icon, className, href, external, ...rest } =
    props as AnchorProps & CommonProps;

  const classes = clsx(
    "inline-flex items-center gap-1 px-3 py-1 border transition-all duration-300",
    "px-3 py-1 border border-gray-300 text-sm rounded-md text-gray-100 hover:text-teal-300 hover:bg-slate-900 cursor-pointer",
    className
  );

  const content = (
    <>
      <span>{text}</span>
      {icon && <span className="text-teal-300 ml-1 text-lg">{icon}</span>}
    </>
  );

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

    const { onClick, ...linkRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} onClick={onClick} {...linkRest}>
        {content}
      </Link>
    );
  }

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
      className={classes}
      onClick={onClick}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
