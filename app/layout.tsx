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
  title: "Lukas Oldenburg",
  description: "Software Development · Machine Learning · Data",
  icons: {
    icon: '/favicon.ico?v=2',
  },
  openGraph: {
    title: 'Lukas Oldenburg',
    description: 'Portfolio von Lukas Oldenburg',
    url: 'https://lukas-oldenburg.at',
    siteName: 'Lukas Oldenburg',
    images: [
      {
        url: '/preview.png', // optional für Link-Vorschau
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
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
