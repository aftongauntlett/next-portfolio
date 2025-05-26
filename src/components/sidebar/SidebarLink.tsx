"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { JSX } from "react";

interface SidebarLinkProps {
  /** The ID of the section this link points to (used for href). */
  id: string;
  /** The visible label for this link. */
  label: string;
  /** Whether this link is the currently active section. */
  isActive: boolean;
}

/**
 * Renders a sidebar navigation item with an animated "dot" indicator when active.
 */
export default function SidebarLink({
  id,
  label,
  isActive,
}: SidebarLinkProps): JSX.Element {
  return (
    <li className="relative pl-4">
      <a
        href={`#${id}`}
        className={clsx(
          "block pl-2 text-lg font-medium transition-colors",
          isActive ? "text-primary" : "hover:text-primary"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        <span>{label}</span>
      </a>

      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 250 }}
        />
      )}
    </li>
  );
}
