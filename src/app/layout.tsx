import type { ReactNode } from "react";
import "./globals.css";
import Sidebar from "@components/sidebar/Sidebar";
import SectionScrollSpy from "@components/reusable/SectionScrollSpy";
import { Inter, Montserrat, Nothing_You_Could_Do } from "next/font/google";

// Font configuration (Next.js font optimization)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const handwriting = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
  display: "swap",
});

// Combine all font variables into one className
const fontClasses = [
  inter.variable,
  montserrat.variable,
  handwriting.variable,
].join(" ");

interface RootLayoutProps {
  /** The page content to render inside the layout */
  children: ReactNode;
}

/**
 * RootLayout
 *
 * Sets up global fonts, renders sidebar navigation, scrollspy behavior,
 * and wraps the main content area.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fontClasses}>
      <body className="overflow-x-hidden bg-body-light dark:bg-body-dark text-dark dark:text-light">
        {/* Updates the URL hash as each section scrolls into view */}
        <SectionScrollSpy />

        {/* Decorative hero background animation (non-interactive) */}
        <div className="hero fixed inset-0" aria-hidden="true" />

        {/* Main layout: sidebar on the left, content on the right */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-10 lg:px-20 flex lg:grid lg:grid-cols-[20rem_1fr] gap-12 min-h-screen">
          <Sidebar />

          <main className="w-full px-6" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
