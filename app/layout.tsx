import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieModal from "@/components/CookieModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VJXSOFT | hakukoneoptimointia ja verkkosivuja",
  description: "VJXSOFT tarjoaa kaiken tarpeellisen yrityksesi verkkosivujen ja hakukoneoptimoinnin toteuttamiseen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
