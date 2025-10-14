import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BMKGTimeBar from "@/components/organisms/BMKGTimeBar";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Iklim dan Kualitas Udara",
  description: "Informasi mengenai iklim dan kualitas udara di Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BMKGTimeBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
