"use client";

import { motion } from "framer-motion";

interface SidebarLinkProps {
  id: string;
  label: string;
  isActive: boolean;
}

export default function SidebarLink({ id, label, isActive }: SidebarLinkProps) {
  return (
    <li className="relative pl-4">
      <a
        href={`#${id}`}
        className={`relative block text-lg font-medium transition-colors overflow-hidden ms-2 ${
          isActive ? "text-teal-300" : "text-gray-400 hover:text-teal-300"
        }`}
      >
        <span className="relative z-10">{label}</span>
      </a>
      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-teal-300 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 250 }}
        />
      )}
    </li>
  );
}
