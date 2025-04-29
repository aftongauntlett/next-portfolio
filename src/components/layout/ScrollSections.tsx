"use client";

import type { JSX } from "react";
import { SECTIONS } from "@constants/sections";
import { useScrollSpy } from "@hooks/useScrollSpy";
import SideNav from "./SideNav";

export default function ScrollSections(): JSX.Element {
  const ids = SECTIONS.map((section) => section.id);
  const activeId = useScrollSpy(ids);

  return (
    <div className="flex h-screen w-full">
      <aside
        role="complementary"
        aria-label="Section navigation"
        className="w-full lg:w-auto shrink-0"
      >
        <SideNav sections={SECTIONS} activeId={activeId} />
      </aside>
      <main
        id="main-content"
        role="main"
        className="flex-1 overflow-y-auto scroll-smooth no-scrollbar"
      >
        {SECTIONS.map(({ id, Component }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className="border-b border-neutral-200 dark:border-neutral-700"
          >
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
}
