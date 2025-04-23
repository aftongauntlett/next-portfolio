"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Star, Cloud } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative flex items-center justify-center w-10 h-10 group transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            className="absolute top-0 left-0"
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 blur-md rounded-full opacity-40 bg-yellow-300" />
              <Sun className="w-6 h-6 stroke-yellow-300 transition-colors" />
              <motion.div
                className="absolute top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sun className="w-6 h-6 text-yellow-300 transition-colors fill-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            className="absolute top-0 left-0"
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 blur-md rounded-full opacity-40 bg-blue-300" />
              <Moon className="w-6 h-6 stroke-blue-900 transition-colors" />
              <motion.div
                className="absolute top-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Moon className="w-6 h-6 text-blue-900 transition-colors fill-blue-900" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
