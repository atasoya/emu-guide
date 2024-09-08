import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import localFont from "next/font/local";
import "./globals.css";

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
  title: {
    default: "Home | emu.guide",
    template: `%s | emu.guide`,
  },
  description: "Everything you need to know about Eastern Mediterranean University",
  keywords: ["EMU Guide", "Eastern Mediterranean University", "EMU News", "EMU Cafes", 
    "EMU Restaurants", "EMU Dormitories", "EMU Health Services", "EMU Fitness", 
    "EMU Events", "EMU Clubs", "EMU Entertainment", "EMU Faculties", 
    "EMU Scholarships", "EMU Transportation", "Private Classes in EMU", 
    "EMU Communities", "EMU Student Guide", "EMU Discounts", "EMU Markets", 
    "EMU Stores", "EMU Campus Life", "DAÜ Rehberi", "DAÜ Yemekler", 
    "DAÜ Burslar", "DAÜ Etkinlikler", "DAÜ Ulaşım", "DAÜ Eğlence", 
    "EMU International Students", "EMU Stationery","DAÜ Özel Dersler","DAÜ Al Sat","DAÜ Topluluklar"
    ,"DAÜ Rehberler","DAÜ Marketler","DAÜ Taxi"]
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
        <Analytics />
      </body>
    </html>
  );
}
