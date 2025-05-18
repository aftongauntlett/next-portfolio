import "./globals.css";
import "./custom.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@components/sidebar/Sidebar";
import SectionScrollSpy from "@components/reusable/SectionScrollSpy";
import { Roboto, Montserrat } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <SectionScrollSpy />
          <div className="hero" aria-hidden="true" />
          <div className="container mx-auto min-h-screen flex lg:grid lg:grid-cols-[20rem_1fr] gap-12 px-[clamp(1rem,5vw,2rem)]">
            <Sidebar />
            <main id="main-content" className="w-full">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
