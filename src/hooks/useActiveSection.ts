import { useState, useEffect } from "react";

const INTERSECTION_OPTIONS = {
  // rootMargin focuses on the vertical center of the viewport
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

/**
 * Tracks which section (by ID) is currently active in the viewport.
 * Returns the ID of the section most prominently in view.
 *
 * @param ids - Array of DOM element IDs to observe
 * @returns The ID of the currently active section
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      INTERSECTION_OPTIONS
    );

    // Track observed elements for cleanup
    const elements: HTMLElement[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        obs.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, [ids]);

  return active;
}
