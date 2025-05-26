// app/layout.tsx
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Sidebar from "@components/sidebar/Sidebar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
  display: "swap",
});

/**
 * RootLayout
 *
 * Injects:
 * - Global CSS (Tailwind + custom utilities)
 * - Google Fonts via CSS variables
 * - ThemeProvider
 * - Hero backdrop
 * - Sidebar + Main grid
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body bg-background text-text antialiased">
        <Providers>
          <div className="hero" aria-hidden="true" />
          <div className="container mx-auto px-4 lg:px-8 min-h-screen grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-12">
            <Sidebar />
            <main id="main-content">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
