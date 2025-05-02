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
      <div className="grid grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="
              bg-black/60
              border border-slate-700
              rounded-md overflow-hidden
              shadow-sm hover:shadow-lg transition-shadow duration-200
              flex flex-col
            "
          >
            <div className="h-1 bg-teal-300/50" />

            <div className="p-6 flex flex-col flex-grow">
              <div className="relative w-full mb-4 overflow-hidden rounded-md aspect-video">
                <Image
                  src={proj.imgSrc}
                  alt={`Screenshot of ${proj.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-medium text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-sm text-teal-300 mb-4">{proj.tech}</p>
              <p className="text-gray-300 flex-grow leading-relaxed">
                {proj.description}
              </p>

              <div className="mt-6 flex justify-end">
                <Button
                  href={proj.url}
                  text="View project"
                  icon={
                    <HiOutlineArrowRight className="w-4 h-4 text-teal-300" />
                  }
                  external
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
