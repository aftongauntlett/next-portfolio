"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TextHoverDripProps {
  children: React.ReactNode;
  ariaLabel?: string; // Optional: allow user to set a custom aria-label
}

/**
 * TextHoverDrip applies a visual "drip" effect to its children
 * on mouse hover or keyboard focus. Accessible for both pointer
 * and keyboard users, with optional ARIA labeling.
 */
export default function TextHoverDrip({
  children,
  ariaLabel,
}: TextHoverDripProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!wrapperRef.current) return;
    const { left, top } = wrapperRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - left, y: e.clientY - top });
  }

  // Allow keyboard users to trigger the hover effect
  function handleFocus() {
    setHover(true);
    // Optionally, set position to center for keyboard
    if (wrapperRef.current) {
      const { width, height } = wrapperRef.current.getBoundingClientRect();
      setPos({ x: width / 2, y: height / 2 });
    }
  }

  function handleBlur() {
    setHover(false);
  }

  return (
    <motion.div
      ref={wrapperRef}
      className="paint-splash relative inline-block font-bold cursor-default"
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      tabIndex={0}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : "true"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={
        hover
          ? ({
              "--mx": `${pos.x}px`,
              "--my": `${pos.y}px`,
            } as React.CSSProperties)
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
