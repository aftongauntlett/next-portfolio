// src/app/layout.tsx
import "../styles/globals.css";
import type { ReactNode } from "react";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable} ${montserrat.variable} font-sans
          bg-body-light dark:bg-body-dark
          text-text-dark dark:text-text-light
          transition-colors duration-300
        `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip link for keyboard users */}
          <a
            href="#main-content"
            className="absolute top-2 left-2 px-2 py-1 bg-primary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"
          >
            Skip to content
          </a>

          <main id="main-content" role="main">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
