// src/components/common/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import type { JSX } from "react";

export default function ThemeToggle(): JSX.Element | null {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-pressed={isDark}
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative flex items-center justify-center w-10 h-10 group transition-colors cursor-pointer focus-ring"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            className="absolute inset-0"
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 blur-md rounded-full opacity-40 bg-primary-light" />
              <Sun className="w-6 h-6 stroke-primary transition-colors" />
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sun className="w-6 h-6 fill-primary transition-colors" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            className="absolute inset-0"
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 blur-md rounded-full opacity-40 bg-secondary-light" />
              <Moon className="w-6 h-6 stroke-secondary transition-colors" />
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Moon className="w-6 h-6 fill-secondary transition-colors" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
