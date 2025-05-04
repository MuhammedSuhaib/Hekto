import type { Metadata } from "next";
import {
  ClerkProvider,//wrap whole app and provide necessary functions 
  } from '@clerk/nextjs'
import localFont from "next/font/local";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
const josef = Josefin_Sans({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
title: "Hekto",
description: " New Furniture Collection Trends in 2025 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${josef.className} ${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
