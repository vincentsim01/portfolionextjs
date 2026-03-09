import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vincent Kiathadi Portfolio",
  description: "Welcome to Vincent Kiathadi's portfolio website. Let's connect and explore my work.",
  keywords: "nextjs, react, web development",
  openGraph: {
    title: "Vincent Kiathadi Portfolio",
    description: "Welcome to Vincent Kiathadi's portfolio website. Let's connect and explore my work.",
    url: "https://mywebsite.com",
    siteName: "Vincent Kiathadi Portfolio",
    images: [
      {
        url: "https://mywebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
