import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: './fonts/Quattrocento-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: './fonts/Questrial-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/QuattrocentoSans-Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: './fonts/QuattrocentoSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
