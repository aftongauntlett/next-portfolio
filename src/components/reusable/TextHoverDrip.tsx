"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface TextHoverDripProps {
  /** Content that receives the drip effect */
  children: ReactNode;
  /** Optional label for assistive tech */
  ariaLabel?: string;
}

/**
 * TextHoverDrip
 *
 * Adds a paint-drip effect that follows the cursor or keyboard focus.
 * Color changes on hover/focus are handled via CSS so animations aren’t interrupted.
 */
export default function TextHoverDrip({
  children,
  ariaLabel,
}: TextHoverDripProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  /** Update CSS vars driving the drip’s position */
  const updateDrip = (x: number, y: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    updateDrip(e.clientX - left, e.clientY - top);
  };

  const handleFocus = () => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    updateDrip(width / 2, height / 2);
  };

  return (
    <motion.div
      ref={containerRef}
      className="
        paint-splash 
        relative inline-block font-bold cursor-default
        hover:text-primary focus:text-primary
        transition-colors duration-300
      "
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : "true"}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
    >
      {children}
    </motion.div>
  );
}
