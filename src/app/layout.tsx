import type { Metadata } from "next";
import { Poppins as GooglePoppins } from "next/font/google";
import "./globals.css";
import BMKGTimeBar from "@/components/organisms/BMKGTimeBar";
// import Navbar from "@/components/organisms/Navbar";
import NavbarTransparent from "@/components/organisms/NavbarTransparent";
import Footer from "@/components/organisms/Footer";

// Configure Poppins with fallback
const googlePoppins = GooglePoppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  preload: true,
  adjustFontFallback: true,
});

// 2️⃣ Siapkan fallback system fonts
const systemFont = {
  variable: "--font-system",
};

// 3️⃣ Metadata
export const metadata: Metadata = {
  title: "Iklim dan Kualitas Udara",
  description: "Informasi mengenai iklim dan kualitas udara di Indonesia",
};

// 4️⃣ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use Google Fonts with system font fallback
  const activeFont = googlePoppins.variable;

  return (
    <html lang="en">
      <body className={`${activeFont} antialiased`}>
        <BMKGTimeBar />
        {/* <Navbar /> */}
        <NavbarTransparent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
