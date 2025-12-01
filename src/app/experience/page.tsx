import { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Pengalaman kerja, freelance, dan organisasi Adam Suvi dalam analisis data dan kepemimpinan."
};

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-50">Experience</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Perpaduan pengalaman kerja, freelance, dan organisasi yang membentuk cara saya
          melihat data sebagai fondasi pengambilan keputusan bisnis.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50">Work Experience</h2>
          <Timeline
            items={[
              {
                title: "Data Entry – Toko Bangunan Sabar Nan Elok",
                period: "2025",
                points: [
                  "Mengelola 500+ data inventaris dengan peningkatan akurasi hingga 20%.",
                  "Membuat dan mengotomatisasi laporan penjualan mingguan.",
                  "Mempercepat proses pembukuan dan mengurangi error sekitar 25%."
                ]
              },
              {
                title: "Freelance Data Analyst",
                period: "2022 – Present",
                points: [
                  "Membersihkan dan menganalisis lebih dari 10.000 data transaksi.",
                  "Melakukan transformasi data menggunakan Python dan SQL untuk kebutuhan analitik lanjutan.",
                  "Membangun dashboard Power BI untuk membantu stakeholder memonitor kinerja bisnis."
                ]
              }
            ]}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-50">
            Organizational Experience
          </h2>
          <Timeline
            items={[
              {
                title: "PLT Gubernur & Kepala Kastrat BEM FMIPA Unand",
                subtitle:
                  "Memimpin tim kajian strategis dan organisasi dengan fokus pada isu kemahasiswaan.",
                points: [
                  "Mengkoordinasikan lebih dari 80 anggota dalam menjalankan program kerja.",
                  "Menginisiasi dan mengelola 15+ program dan kajian strategis tingkat fakultas.",
                  "Berperan dalam penyusunan kebijakan organisasi dan advokasi mahasiswa."
                ]
              },
              {
                title: "Head of Event LKMMTD",
                points: [
                  "Memimpin sekitar 80 panitia dalam pelaksanaan pelatihan manajemen dan kepemimpinan.",
                  "Mengelola kegiatan yang diikuti oleh lebih dari 400 peserta.",
                  "Menyusun alur acara, koordinasi narasumber, dan evaluasi kegiatan."
                ]
              },
              {
                title: "1st Runner-Up Duta Genre Bukittinggi",
                points: [
                  "Aktif sebagai role model remaja dalam kampanye perencanaan kehidupan berkeluarga.",
                  "Mengikuti dan menginisiasi berbagai program edukasi dan sosialisasi di masyarakat."
                ]
              }
            ]}
          />
        </div>
      </section>
    </PageWrapper>
  );
}


