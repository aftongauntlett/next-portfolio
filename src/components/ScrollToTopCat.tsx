"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import catAnimation from "../animations/cat-twitch.json";

export default function ScrollToTopCat() {
  const [show, setShow] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scroll-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
          className="fixed bottom-6 right-6 z-50 w-20 h-20 flex items-center justify-center shadow-lg backdrop-blur-md rounded-full"
          aria-label="Scroll to top"
          style={{ cursor: "none" }}
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

          <div className="relative w-30 h-30 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-indigo-200/50 blur-2xl" />
            <Lottie
              lottieRef={lottieRef}
              autoplay={false}
              animationData={catAnimation}
              loop
              className="w-100"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
