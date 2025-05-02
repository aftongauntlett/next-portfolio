"use client";

import type { JSX } from "react";
import Image from "next/image";
import Button from "./Button";
import { HiOutlineArrowRight } from "react-icons/hi2";

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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam provident nulla ad quas iste mollitia.",
  },
  {
    title: "Astrid Beauty Salon",
    tech: "React, Tailwind, Next.js",
    url: "https://example.com",
    imgSrc: "/screenshots/astrid.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam provident nulla ad quas iste mollitia.",
  },
];

export default function Cards(): JSX.Element {
  return (
    <section id="projects" className=" scroll-mt-28">
      Coming Soon
    </section>
  );
}
