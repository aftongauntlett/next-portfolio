// TextHoverDrip.tsx
"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TextHoverDripProps {
  children: React.ReactNode;
}

export default function TextHoverDrip({ children }: TextHoverDripProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!wrapperRef.current) return;
    const { left, top } = wrapperRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - left, y: e.clientY - top });
  }

  return (
    <motion.div
      ref={wrapperRef}
      className="paint-splash relative inline-block font-bold cursor-default"
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
      {children}
    </motion.div>
  );
}
