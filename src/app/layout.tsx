import "./globals.css";
import SideNav from "@components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        <SideNav />
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </body>
    </html>
  );
}
