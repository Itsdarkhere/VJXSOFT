import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valtteri Juvonen | Developer",
  description: "I enjoy creating fast, beautiful interfaces and experiences for humans to enjoy. React, Swift, Next.js, Node.js, Python.",
  keywords: ["developer", "software engineer", "React", "Swift", "iOS", "Next.js", "Node.js", "Python", "Valtteri Juvonen"],
  authors: [{ name: "Valtteri Juvonen" }],
  creator: "Valtteri Juvonen",
  metadataBase: new URL("https://vjxsoft.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vjxsoft.com",
    title: "Valtteri Juvonen | Developer",
    description: "I enjoy creating fast, beautiful interfaces and experiences for humans to enjoy.",
    siteName: "Valtteri Juvonen",
  },
  twitter: {
    card: "summary",
    title: "Valtteri Juvonen | Developer",
    description: "I enjoy creating fast, beautiful interfaces and experiences for humans to enjoy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
