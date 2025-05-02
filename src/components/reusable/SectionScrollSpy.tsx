// components/SectionScrollSpy.tsx
"use client";

import { useEffect } from "react";

export default function SectionScrollSpy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );
    document
      .querySelectorAll<HTMLElement>("section[id]")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
