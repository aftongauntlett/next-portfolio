"use client";

import { useEffect, useRef } from "react";

/**
 * SectionScrollSpy updates the URL hash to reflect the currently
 * visible section in the viewport, using IntersectionObserver.
 * Includes a debounce to avoid rapid hash changes during fast scrolls.
 */
export default function SectionScrollSpy() {
  // Holds the ID of the last timeout for debouncing hash updates
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Observer callback: when a section is in view, update the hash after a short delay
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
              history.replaceState(null, "", `#${entry.target.id}`);
            }, 100); // Debounce duration in ms
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Triggers when section is near vertical center
        threshold: 0,
      }
    );

    // Observe all sections with an id
    document
      .querySelectorAll<HTMLElement>("section[id]")
      .forEach((section) => observer.observe(section));

    // Cleanup observer and timer on unmount
    return () => {
      observer.disconnect();
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  // No rendering; logic only
  return null;
}
