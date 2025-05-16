import "./globals.css";
import Sidebar from "@components/sidebar/Sidebar";
import SectionScrollSpy from "@components/reusable/SectionScrollSpy";
import { Inter, Montserrat, Nothing_You_Could_Do } from "next/font/google";

// Font configuration using Next.js font optimization
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

/**
 * RootLayout sets up global fonts, sidebar, scrollspy, and main layout container.
 * All main sections and navigation are rendered through the children prop.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${handwriting.variable}`}
    >
      <body className="overflow-x-hidden bg-body-light dark:bg-body-dark text-dark dark:text-light">
        {/* ScrollSpy updates URL hash based on current section in view */}
        <SectionScrollSpy />

        {/* Hero background animation */}
        <div className="hero fixed inset-0" aria-hidden="true" />

        {/* Main layout: Sidebar + Main Content */}
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
