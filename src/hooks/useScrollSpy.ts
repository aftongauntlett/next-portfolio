import { useEffect, useState } from "react";

/**
 * Tracks which section ID is currently in view.
 * @param ids Array of section element IDs to observe
 * @param options Optional IntersectionObserverInit overrides
 * @returns The ID of the currently intersecting section
 */
export function useScrollSpy(
  ids: string[],
  options: IntersectionObserverInit = {}
): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
        ...options,
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [ids.join(","), JSON.stringify(options)]);

  return activeId;
}
