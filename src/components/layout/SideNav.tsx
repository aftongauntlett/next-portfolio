"use client";

import clsx from "clsx";
import ThemeToggle from "../ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface SideNavProps {
  sections: { id: string; label: string }[];
  activeId: string;
}

export default function SideNav({ sections, activeId }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-full lg:w-56 px-6 py-6 bg-body-dark text-text-light dark:bg-body-light dark:text-text-dark transition-colors duration-300">
      <div className="flex items-center justify-between lg:hidden mb-4">
        <span className="font-heading font-bold text-lg">Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <nav
        className={clsx(
          "flex-col space-y-4",
          isOpen ? "flex" : "hidden",
          "lg:flex"
        )}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={clsx(
              "block px-2 py-1 rounded-md text-sm tracking-wide transition-colors duration-200",
              activeId === id
                ? "text-primary dark:text-primary-light font-semibold bg-neutral-800 dark:bg-neutral-200"
                : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            )}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="pt-8 border-t mt-6 border-neutral-700 dark:border-neutral-500">
          <ThemeToggle />
        </div>
      </nav>
    </aside>
  );
}
