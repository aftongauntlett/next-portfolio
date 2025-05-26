// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import SectionScrollSpy from "@components/reusable/SectionScrollSpy";
import { JSX } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Wraps app in next-themes (and any other client‐only providers).
 * – attribute="class" - toggles the .dark class on <html>
 * – defaultTheme="system" & enableSystem - picks up OS preference
 * – disableTransitionOnChange - avoids flicker when switching
 * – enableColorScheme={false} - opt-out of auto <meta name="color-scheme">
 */
export function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
      enableColorScheme={false}
    >
      <SectionScrollSpy />
      {children}
    </ThemeProvider>
  );
}
