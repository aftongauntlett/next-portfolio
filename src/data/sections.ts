import type { FC } from "react";
import About from "@components/sections/About";
import Skills from "@components/sections/Skills";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Project";
import Contact from "@components/Contact/ContactForm";

/**
 * Represents a main site section for navigation and rendering.
 */
export interface SectionItem {
  id: string;
  label: string;
  Component: FC;
}

/**
 * Ordered list of all primary site sections.
 */
export const SECTIONS: SectionItem[] = [
  { id: "about", label: "About", Component: About },
  { id: "experience", label: "Experience", Component: Experience },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "projects", label: "Projects", Component: Projects },
  { id: "contact", label: "Contact", Component: Contact },
];
