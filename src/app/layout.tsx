import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://adam-suvi-portfolio.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adam Suvi – Data Analyst & Business Intelligence Enthusiast",
    template: "%s | Adam Suvi"
  },
  description:
    "Portfolio personal Adam Suvi, Data Analyst & Business Intelligence Enthusiast. Menyajikan pengalaman, proyek, dan keahlian dalam analisis data, BI, dan visualisasi.",
  openGraph: {
    title: "Adam Suvi – Data Analyst & Business Intelligence Enthusiast",
    description:
      "Portfolio personal yang menampilkan pengalaman, proyek, dan keahlian Adam Suvi dalam analisis data, business intelligence, dan visualisasi.",
    url: "/",
    siteName: "Portfolio Adam Suvi",
    type: "website",
    locale: "id_ID"
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Suvi – Data Analyst & Business Intelligence Enthusiast",
    description:
      "Portfolio personal yang menampilkan pengalaman, proyek, dan keahlian Adam Suvi dalam analisis data, business intelligence, dan visualisasi."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adam Suvi",
    jobTitle: "Data Analyst & Business Intelligence Enthusiast",
    url: siteUrl,
    sameAs: ["https://linkedin.com/in/adam-suvi7"]
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} page-shell`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="page-grid">
            <header className="mb-8 flex items-center justify-between">
              <SiteNav />
              <ThemeToggle />
            </header>
            <main className="flex-1 space-y-10">{children}</main>
            <footer className="mt-10 flex items-center justify-between text-xs text-slate-400">
              <p>© {new Date().getFullYear()} Adam Suvi. All rights reserved.</p>
              <p className="hidden sm:inline">
                Dibangun dengan Next.js, TailwindCSS, dan Framer Motion.
              </p>
            </footer>
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
  export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} page-shell`}>
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
}


