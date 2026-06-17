import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BPJS Kesehatan - Layanan Kesehatan Terpadu",
  description: "Platform layanan BPJS Kesehatan yang memudahkan pendaftaran, pembayaran iuran, pencarian fasilitas kesehatan, dan pengaduan untuk peserta JKN.",
  keywords: ["BPJS", "Kesehatan", "JKN", "Asuransi Kesehatan", "Indonesia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
