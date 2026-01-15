import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "The Bicycle Ambulance",
  description: "High-end bicycle service in Santa Monica since 1995.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050505] text-white/90 antialiased">
        {children}
      </body>
    </html>
  );
}
