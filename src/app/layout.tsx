import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BMKGTimeBar from "@/components/organisms/BMKGTimeBar";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins/Poppins-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
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
      <body className={`${poppins.variable} antialiased`}>
        <BMKGTimeBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
