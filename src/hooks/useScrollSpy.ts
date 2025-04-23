import { useEffect, useRef, useState } from "react";

export function useScrollSpy(
  ids: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id));
    }, options);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, [ids.join(), JSON.stringify(options)]);

  return activeId;
}
