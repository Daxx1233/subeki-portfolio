import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { artistData } from "@/data/artist";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: `${artistData.name} — Portfolio Lukisan`,
  description: artistData.shortBio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
