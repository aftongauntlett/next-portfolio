"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useActiveSection } from "@hooks/scrollSpy";
import SidebarLink from "./SidebarLink";
import TextHoverDrip from "@components/reusable/TextHoverDrip";
import ThemeToggle from "@components/reusable/ThemeToggle";
import { JSX } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Renders the sticky sidebar with name, title, nav links, social icons, and theme toggle.
 */
export default function Sidebar(): JSX.Element {
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  return (
    <motion.aside
      className={clsx(
        "hidden lg:flex flex-col justify-between",
        "sticky top-0 h-screen w-80",
        "px-8 py-8 text-text"
      )}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <TextHoverDrip className="paint-splash">
          <p className="mb-4 text-3xl font-heading text-text">
            Afton Gauntlett
          </p>
        </TextHoverDrip>

        <p className="mb-8 text-lg text-primary">Web Developer</p>

        <nav aria-label="Sidebar navigation">
          <ul className="space-y-3">
            {NAV_ITEMS.map(({ id, label }) => (
              <SidebarLink
                key={id}
                id={id}
                label={label}
                isActive={activeSection === id}
              />
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/aftongauntlett"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-primary"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/afton-gauntlett"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-primary"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>

        <ThemeToggle className="ml-2" />
      </div>
    </motion.aside>
  );
}
