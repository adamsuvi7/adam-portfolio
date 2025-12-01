import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

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
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} page-shell`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* Navbar always visible at the top */}
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

