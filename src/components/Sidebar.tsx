"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@hooks/useActiveSection";
import SidebarLink from "./SidebarLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      className="hidden lg:flex flex-col justify-between w-80 h-screen px-8 py-12 sticky top-0 bg-slate-900 border-r border-gray-800 text-gray-400"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Afton Gauntlett</h1>
        <h2 className="text-xl text-blue-200 font-semibold mb-2">
          Front-End Developer
        </h2>
        <p className="text-base mb-8 leading-relaxed text-indigo-200">
          I build awesome stuff.
        </p>

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
          className="hover:text-blue-200 transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-200 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </motion.aside>
  );
}
