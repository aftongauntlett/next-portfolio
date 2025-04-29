"use client";

import { useActiveSection } from "@hooks/useActiveSection";

const NAV = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const active = useActiveSection(NAV.map((n) => n.id));

  return (
    <nav className="w-64 hidden lg:block sticky top-0 h-screen p-5 border-r border-gray-800 bg-slate-900">
      <ul className="space-y-4">
        {NAV.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-lg font-medium transition-colors ${
                active === id ? "text-white" : "text-gray-500 hover:text-white"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
