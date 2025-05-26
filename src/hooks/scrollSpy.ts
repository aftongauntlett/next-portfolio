import { useState, useEffect } from "react";

/**
 * Tracks which section ID is most prominently in view based on scroll position.
 * @param ids - array of section IDs in document order
 * @returns the currently active section ID
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let scheduled = false;

    const updateActiveSection = () => {
      const midpoint = window.innerHeight / 2;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= midpoint) {
          current = id;
        } else {
          break;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(() => {
          updateActiveSection();
          scheduled = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize on mount
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}

/**
 * Synchronizes the window.location.hash with the section ID in view.
 * @param debounceMs - milliseconds to debounce hash updates
 */
export function useSectionScrollSpy(debounceMs = 100): void {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            history.replaceState(null, "", `#${entry.target.id}`);
          }, debounceMs);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    });

    document
      .querySelectorAll<HTMLElement>("section[id]")
      .forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [debounceMs]);
}
