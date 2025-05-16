import type { FC } from "react";
import About from "@components/sections/About";
import Skills from "@components/sections/Skills";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Projects";
import Contact from "@components/Contact/ContactForm";

export type SectionItem = {
  id: string;
  label: string;
  Component: FC;
};

// Central definition of all main site sections for navigation and rendering
export const SECTIONS: SectionItem[] = [
  { id: "about", label: "About", Component: About },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "experience", label: "Experience", Component: Experience },
  { id: "projects", label: "Projects", Component: Projects },
  { id: "contact", label: "Contact", Component: Contact },
];
