import type { Metadata } from "next";
import { Bebas_Neue, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "남경우 | 한반도아트 대표",
  description: "국악창작 예술가 남경우의 포트폴리오. 한반도아트 대표.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${bebasNeue.variable} ${playfairDisplay.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
