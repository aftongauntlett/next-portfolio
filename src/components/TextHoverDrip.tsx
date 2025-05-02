"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TextHoverDrip() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!headingRef.current) return;
    const rect = headingRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.h2
      ref={headingRef}
      className="paint-splash text-3xl font-bold text-gray-100 mb-8 text-center relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
      style={
        hover
          ? ({
              "--mx": `${pos.x}px`,
              "--my": `${pos.y}px`,
            } as React.CSSProperties)
          : {}
      }
    >
      Let&apos;s make something weirdly beautiful
      <span className="text-teal-300 ms-1">.</span>
    </motion.h2>
  );
}
