import Cards from "@components/reusable/Cards";
import type { JSX } from "react";

interface Project {
  title: string;
  tech: string;
  description: string;
  url: string;
  imgSrc: string;
}

const projects: Project[] = [
  {
    title: "JC Auto Body",
    tech: "React, Tailwind, Next.js",
    url: "https://example.com",
    imgSrc: "/screenshots/jc.png",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam provident nulla ad quas iste mollitia, quis vel unde? Sequi sed omnis, ipsam commodi adipisci voluptatem inventore eveniet autem recusandae corporis!",
  },
  {
    title: "Astrid Beauty Salon",
    tech: "React, Tailwind, Next.js",
    url: "https://example.com",
    imgSrc: "/screenshots/astrid.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam provident nulla ad quas iste mollitia, quis vel unde? Sequi sed omnis, ipsam commodi adipisci voluptatem inventore eveniet autem recusandae corporis!",
  },
];

export default function Projects(): JSX.Element {
  return (
    <div className="justify-start max-sm:justify-end">
      <Cards />
    </div>
  );
}
