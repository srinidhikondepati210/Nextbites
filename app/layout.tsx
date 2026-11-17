
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover delicious recipes with NextBites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-orange-600 px-6 py-5 text-white">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              NextBites 🍴
            </a>
            <span className="text-sm">Discover • Cook • Enjoy</span>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
