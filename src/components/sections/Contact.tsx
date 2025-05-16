import React, { useRef, useState } from "react";
import TextHoverDrip from "@components/reusable/TextHoverDrip";
import ContactForm from "@components/Contact/ContactForm";

export default function Contact() {
  const [paused, setPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const ANIMATION_DURATION = 1800; // ms

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear potential old timer
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    // Start a new timer
    timeoutRef.current = window.setTimeout(() => {
      // Only pause if still hovered
      if (isHovered) setPaused(true);
    }, ANIMATION_DURATION);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Clear timer and resume animation
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    setPaused(false);
  };

  return (
    <section aria-labelledby="contact-title">
      <TextHoverDrip>
        <h2
          className="text-4xl mb-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        >
          Let's make something beautiful
          <span className="inline-flex items-baseline ml-2">
            <span className={`dot-bounce${paused ? " paused" : ""}`} />
            <span
              className={`dot-bounce animation-delay-200${
                paused ? " paused" : ""
              }`}
            />
            <span
              className={`dot-bounce animation-delay-400${
                paused ? " paused" : ""
              }`}
            />
          </span>
        </h2>
      </TextHoverDrip>
      <ContactForm />
    </section>
  );
}
