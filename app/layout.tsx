import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Import font dari Google
import "./globals.css";

// 1. Setup font Playfair untuk kesan elegan (Judul)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Ini harus sama dengan yang di tailwind.config
});

// 2. Setup font Inter untuk tulisan biasa (Isi)
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 3. Masukkan variabel font ke dalam className body */}
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}