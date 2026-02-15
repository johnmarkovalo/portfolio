import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
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
  metadataBase: new URL("https://symflo.dev"),
  title: "Symflo \u2014 Building Software That Works",
  description:
    "Symflo is a Philippine-based technology company building SaaS platforms, mobile apps, and developer tools. See our products.",
  keywords: [
    "Symflo",
    "Philippine tech company",
    "SaaS",
    "mobile apps",
    "Laravel",
    "Vue.js",
    "React Native",
    "developer tools",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Symflo \u2014 Building Software That Works",
    description:
      "Products built for the Philippine market \u2014 and beyond.",
    type: "website",
    url: "https://symflo.dev",
    siteName: "Symflo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Symflo \u2014 Building Software That Works",
    description:
      "Products built for the Philippine market \u2014 and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
