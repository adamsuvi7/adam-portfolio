// src/app/layout.tsx (Versi yang sudah diperbaiki)

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import type { Metadata } from "next"; // Baris 8: Metadata sudah diimpor
import Navbar from "@/components/navbar";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";
// ... (Deklarasi 'inter' dan 'siteUrl')
// ... (Deklarasi 'export const metadata: Metadata = {...}')

// Bagian kode di baris 43-60 HARUS DIHAPUS

// 👇 Hanya sisakan definisi RootLayout yang ini (yang dimulai sekitar Baris 62)
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body className="page-shell">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="page-grid">
            <header className="mb-8 flex items-center justify-between">
              <SiteNav />
              <ThemeToggle />
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
