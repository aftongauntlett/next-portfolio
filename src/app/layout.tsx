import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-body-light dark:bg-body-dark text-light dark:text-dark">
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
