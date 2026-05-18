import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Crafters",
  description:
    "Digital Crafters is a web development agency that creates exceptional digital experiences that drive business growth and innovation.",
  icons: {
    icon: "/digital_crafters_logo.ico",
  },
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
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
