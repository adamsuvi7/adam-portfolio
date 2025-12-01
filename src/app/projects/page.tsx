import { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Kumpulan proyek analisis data, dashboard, dan otomasi laporan oleh Adam Suvi."
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-50">Projects</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Beberapa proyek yang merepresentasikan kemampuan saya dalam data cleaning, EDA,
          pembuatan dashboard, dan otomasi laporan.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ProjectCard
          title="Sales Transaction EDA (10.000 data)"
          tools="Python · Pandas · SQL"
          description="Analisis eksploratif terhadap lebih dari 10.000 data transaksi untuk mengidentifikasi tren pendapatan, perilaku pelanggan, dan pola pembelian."
          cta="View Details"
        />
        <ProjectCard
          title="Power BI Sales Dashboard"
          tools="Power BI · DAX"
          description="Dashboard interaktif yang menampilkan KPI utama, tren pendapatan bulanan, produk dengan performa terbaik, dan segmentasi pelanggan."
          cta="View Dashboard"
        />
        <ProjectCard
          title="SQL Data Cleaning Pipeline"
          tools="SQL · Data Transformation"
          description="Rangkaian query kompleks untuk membersihkan, menstandardisasi, dan mengoptimasi dataset transaksi sebelum dianalisis lebih lanjut."
          cta="View Code"
        />
        <ProjectCard
          title="Excel Automated Reporting"
          tools="Excel · PivotTables · XLOOKUP"
          description="Template laporan otomatis mingguan dengan PivotTables, XLOOKUP, dan formula dinamis untuk memudahkan monitoring kinerja penjualan."
          cta="View Template"
        />
      </section>
    </PageWrapper>
  );
}


