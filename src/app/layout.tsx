import "./globals.css";
import Sidebar from "@components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-body-light dark:bg-body-dark text-dark dark:text-light">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="lg:grid lg:grid-cols-[20rem_1fr] min-h-screen">
            <Sidebar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
