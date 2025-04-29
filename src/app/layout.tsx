import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
