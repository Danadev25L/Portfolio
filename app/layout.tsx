import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import SmoothScroll from "@/components/main/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dana Bestun — Full-stack Software Engineer",
  description: "Portfolio and selected projects. Full-stack development with React, Next.js, TypeScript, and Node.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Ensure the favicon path is correct */}
        <link rel="icon" type="image/png" href="/WebchainLogo.svg" />
        <title>Dana Bestun — Full-stack Software Engineer</title>
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <SmoothScroll>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
