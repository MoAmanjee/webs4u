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
  title: "Webs4U - Professional Website Development",
  description: "We design, build, and launch high-performance websites — fast, affordable, and custom-tailored to your goals. Business websites, portfolios, e-commerce stores, and more.",
  keywords: "web development, website design, e-commerce, business websites, portfolio websites, web solutions",
  authors: [{ name: "Webs4U" }],
  openGraph: {
    title: "Webs4U - Professional Website Development",
    description: "We design, build, and launch high-performance websites — fast, affordable, and custom-tailored to your goals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webs4U",
    description: "Professional website development services",
  },
};

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
