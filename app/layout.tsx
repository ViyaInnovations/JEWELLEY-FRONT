import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Larix Gold & Diamonds | Timeless Jewellery in Koduvally, Kozhikode",
  description:
    "Larix Gold & Diamonds offers premium certified gold and diamond jewellery in Koduvally, Kozhikode. Trusted craftsmanship, custom designs, and timeless elegance since 1998.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Larix Gold and Diamonds",
    "Gold Jewellery Kozhikode",
    "Diamond Jewellery Koduvally",
    "Custom Jewellery Kerala",
    "Certified Gold Jewellery",
  ],
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
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
