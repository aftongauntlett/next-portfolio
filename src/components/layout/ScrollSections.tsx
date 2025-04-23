"use client";

import { ReactElement } from "react";
import { SECTIONS, type SectionItem } from "constants/sections";
import { useScrollSpy } from "@hooks/useScrollSpy";
import SideNav from "./SideNav";

export default function ScrollSections(): ReactElement {
  const ids: string[] = SECTIONS.map((section: SectionItem) => section.id);

  const activeId: string = useScrollSpy(ids, {
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0.3,
  });

  return (
    <div className="flex h-screen lg:overflow-hidden">
      <aside className="w-full lg:w-56 shrink-0">
        <SideNav sections={SECTIONS} activeId={activeId} />
      </aside>
      <main className="flex-1 overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SECTIONS.map((section: SectionItem) => {
          const { id, Component } = section;
          return (
            <section
              key={id}
              id={id}
              className="px-6 md:px-8 py-24 border-b border-neutral-200 dark:border-neutral-700"
            >
              <Component />
            </section>
          );
        })}
      </main>
    </div>
  );
}
