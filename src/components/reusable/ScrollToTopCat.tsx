"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import catAnimation from "../../animations/cat-twitch.json";

/**
 * Animated scroll-to-top button using a Lottie cat.
 * Shows a custom cursor and animation on hover.
 * Accessible and styled using global classes.
 */
export default function ScrollToTopCat() {
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.button
      // Smoothly scroll to top on click
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => {
        setHovering(true);
        lottieRef.current?.play();
      }}
      onMouseLeave={() => {
        setHovering(false);
        lottieRef.current?.pause();
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="scroll-to-top-btn hidden lg:flex cursor-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300"
      aria-label="Scroll to top"
      type="button"
    >
      {/* Custom animated cursor on hover (that looks like a laser pen!) */}
      {hovering && (
        <div
          className="scroll-to-top-cursor"
          style={{
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Lottie cat with glowing background */}
      <div className="ms-10 scroll-to-top-lottie">
        <div className="scroll-to-top-glow" />
        <Lottie
          lottieRef={lottieRef}
          autoplay={false}
          animationData={catAnimation}
          loop
          className="scroll-to-top-lottie"
        />
      </div>
    </motion.button>
  );
}
