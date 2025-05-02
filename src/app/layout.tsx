import React from "react";
import "./globals.css";
import Sidebar from "@components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-body-light dark:bg-body-dark text-dark dark:text-light">
        <div className="hero fixed inset-0" />
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-10 lg:px-20 flex lg:grid lg:grid-cols-[20rem_1fr] gap-12 min-h-screen">
          <Sidebar />
          <main className="w-full px-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
