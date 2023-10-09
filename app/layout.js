import { Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/favicon/android-chrome-512x512.png",
  },
  title: "Musfikur Rahman",
  description: "A portfolio for myself ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-BG">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
