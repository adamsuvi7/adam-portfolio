import { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "About",
  description: "Profil singkat, pendidikan, pengalaman organisasi, dan soft skills Adam Suvi."
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-50">About</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
          Nama saya <span className="font-semibold text-sky-300">Adam Suvi</span>,
          lulusan Matematika Universitas Andalas. Saya berfokus pada analisis data,
          business intelligence, dan visualisasi. Berpengalaman menggunakan SQL, Python,
          Excel, Power BI, dan Tableau untuk menghasilkan insight data yang mendukung
          keputusan bisnis. Saat ini saya memperdalam kemampuan melalui Bootcamp Data
          Analyst dan berbagai proyek freelance.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="glass-panel glow-hover p-4">
          <h2 className="mb-2 text-sm font-semibold text-slate-50">Education</h2>
          <p className="text-sm font-medium text-sky-200">
            Sarjana Matematika &amp; Ilmu Data – Universitas Andalas
          </p>
          <p className="text-xs text-slate-400">IPK 3.13</p>
          <p className="mt-2 text-xs text-slate-300">
            Skripsi: <span className="italic">Bilangan Ramsey Multipartite untuk Kombinasi
            Grafik 2K2 dan Grafik Siklus</span>.
          </p>
        </article>

        <article className="glass-panel glow-hover p-4">
          <h2 className="mb-2 text-sm font-semibold text-slate-50">
            Organizational Experience
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              Aktif di <span className="font-medium">BEM FMIPA Universitas Andalas</span>{" "}
              dengan fokus pada kajian strategis dan advokasi mahasiswa.
            </li>
            <li>
              Terlibat dalam <span className="font-medium">LKMMTD</span> sebagai panitia
              pengembangan kapasitas kepemimpinan dan manajemen organisasi.
            </li>
            <li>
              Berkontribusi di <span className="font-medium">Forum Genre</span> dengan
              menginisiasi kegiatan positif bagi remaja dan masyarakat.
            </li>
          </ul>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_minmax(0,1fr)]">
        <article className="glass-panel glow-hover p-4">
          <h2 className="mb-2 text-sm font-semibold text-slate-50">Soft Skills</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Analytical thinking",
              "Communication",
              "Problem solving",
              "Detail-oriented"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>
    </PageWrapper>
  );
}


