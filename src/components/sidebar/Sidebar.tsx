"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@hooks/useActiveSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SidebarLink from "./SidebarLink";
import TextHoverDrip from "@components/reusable/TextHoverDrip";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const active = useActiveSection(NAV.map((n) => n.id));

  return (
    <motion.aside
      className="hidden lg:flex flex-col justify-between w-80 h-screen px-8 py-15 sticky top-0 text-gray-200 "
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <TextHoverDrip>
          <h2 className="text-3xl mb-1">Afton Gauntlett</h2>
        </TextHoverDrip>
        <h2 className="text-lg text-gray-400 mb-8">Web Developer</h2>

        <nav>
          <ul className="space-y-3">
            {NAV.map(({ id, label }) => (
              <SidebarLink
                key={id}
                id={id}
                label={label}
                isActive={active === id}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative flex gap-4 items-end mt-8">
        <a
          href="https://github.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-teal-300 transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-teal-300 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </motion.aside>
  );
}
