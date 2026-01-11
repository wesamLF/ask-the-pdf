import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});




export const metadata: Metadata = {
  title: "AskThePDF",
  description: "Start Quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiasded bg-light text-primary-text max-w-main`}
      >
        <Navbar />
        <main>

          {children}
        </main>
      </body>
    </html>
  );
}
