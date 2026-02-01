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
  title: "Digital Crafters",
  description:
    "Digital Crafters is a web development agency that creates exceptional digital experiences that drive business growth and innovation.",
  openGraph: {
    title: "Digital Crafters",
    description:
      "Digital Crafters is a web development agency that creates exceptional digital experiences that drive business growth and innovation.",
    url: "https://digitalcrafters.com.mx",
    type: "website",
    images: [
      {
        url: "https://digitalcrafters.com.mx/digital_crafters.png",
        width: 1200,
        height: 630,
      },
    ],
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
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
