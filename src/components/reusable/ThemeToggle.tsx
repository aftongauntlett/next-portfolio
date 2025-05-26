"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // only flip this to true on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // don't render anything theme-dependent until after mount
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={[
        "p-2 rounded-full transition",
        "hover:bg-secondary",
        "dark:hover:bg-primary",
        className,
      ].join(" ")}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-secondary" />
      )}
    </button>
  );
}
