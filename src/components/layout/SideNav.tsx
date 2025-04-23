"use client";

import clsx from "clsx";
import type { SectionItem } from "@constants/sections";
import ThemeToggle from "@components/ThemeToggle";
import { JSX } from "react";

interface SideNavProps {
  sections: SectionItem[];
  activeId: string;
}

export default function SideNav({
  sections,
  activeId,
}: SideNavProps): JSX.Element {
  return (
    <aside
      role="complementary"
      aria-label="Sidebar with section navigation"
      className="w-full lg:w-56 px-6 py-6 bg-body-dark text-text-light dark:bg-body-light dark:text-text-dark transition-colors duration-300 flex flex-col"
    >
      <nav aria-label="Main navigation" className="space-y-4 flex-1">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeId === id ? "page" : undefined}
            className={clsx(
              "block px-2 py-1 rounded-md text-sm tracking-wide transition-colors duration-200 focus-ring",
              activeId === id
                ? "text-primary dark:text-primary-light font-semibold bg-neutral-800 dark:bg-neutral-200"
                : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            )}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="pt-8 border-t border-neutral-700 dark:border-neutral-500">
        <ThemeToggle />
      </div>
    </aside>
  );
}
