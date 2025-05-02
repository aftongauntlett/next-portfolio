"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import catAnimation from "../../animations/cat-twitch.json";

export default function ScrollToTopCat() {
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.button
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
      className="relative w-10 h-10 hidden lg:flex items-center justify-center bg-transparent cursor-none "
      aria-label="Scroll to top"
    >
      {hovering && (
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-red-500 pointer-events-none"
          style={{
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px 4px rgba(255, 0, 0, 0.4)",
          }}
        />
      )}

      <div className="ms-10 relative">
        <div className="absolute inset-0 bg-teal-300/80 blur-2xl" />
        <Lottie
          lottieRef={lottieRef}
          autoplay={false}
          animationData={catAnimation}
          loop
          className="w-30"
        />
      </div>
    </motion.button>
  );
}
