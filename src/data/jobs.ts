/**
 * Represents a single job entry for the timeline.
 */
export interface Job {
  company: string;
  title: string;
  dates: string;
  description: string[];
}

/**
 * Static list of jobs for the timeline.
 */
export const jobs: Job[] = [
  {
    company: "Booz Allen Hamilton",
    title: "Lead Engineer",
    dates: "MARCH 2022 - MAY 2025",
    description: [
      "Contributed the migrating a large Angular & Express codebase into a modular React/TypeScript stack, boosting performance and maintainability. Introduced TanStack Query to slash data-fetch intervals and improve cache control.",
    ],
  },
  {
    company: "IronClad",
    title: "UI Developer",
    dates: "JANUARY 2022 - MARCH 2022",
    description: [
      "Participated in preliminary preparations for a React-based intelligence platform - evaluating front-end stacks, prototyping initial UI components, and producing foundational Figma wireframes.",
    ],
  },
  {
    company: "Global Dimensions",
    title: "Front-End Developer",
    dates: "OCTOBER 2021 - MARCH 2022",
    description: [
      "Developed accessible, interactive front-end interfaces for geospatial analytics applications with Vue.js and Vuetify. Partnered closely with designers to implement responsive layouts, sophisticated map tools, and WCAG-compliant components.",
    ],
  },
  {
    company: "Gauntlet Designs, LLC",
    title: "Founder & Developer",
    dates: "AUGUST 2020 - JANUARY 2025",
    description: [
      "Founded Gauntlet Designs to help small businesses launch affordable, responsive web presences. From farmers markets and local artists to healthcare providers - what began as a volunteer effort became a client-focused consultancy.",
    ],
  },
];
