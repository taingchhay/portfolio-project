import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description:
    "Portfolio of John Doe — a full-stack developer specializing in modern web applications with React, Next.js, and TypeScript.",
  keywords: [
    "full stack developer",
    "react developer",
    "next.js",
    "typescript",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | Full Stack Developer",
    description:
      "Portfolio of John Doe — a full-stack developer specializing in modern web applications with React, Next.js, and TypeScript.",
    url: "https://yourdomain.com",
    siteName: "John Doe Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Full Stack Developer",
    description:
      "Portfolio of John Doe — a full-stack developer specializing in modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Doe",
  url: "https://yourdomain.com",
  jobTitle: "Full Stack Developer",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
