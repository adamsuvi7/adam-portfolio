import { Metadata } from "next";
import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { TechMarquee } from "@/components/tech-marquee";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Landing page portfolio Adam Suvi, Data Analyst & Business Intelligence Enthusiast."
};

const highlightCards = [
  {
    title: "Data Cleaning & EDA",
    body: "Membersihkan, mengolah, dan mengeksplorasi data untuk menemukan pola, anomali, dan insight awal yang kuat.",
    icon: "📊"
  },
  {
    title: "Dashboard Development",
    body: "Membangun dashboard interaktif yang memvisualisasikan KPI penting bagi stakeholder bisnis.",
    icon: "📈"
  },
  {
    title: "Business Insight & KPI",
    body: "Menerjemahkan data mentah menjadi insight yang actionable untuk meningkatkan kinerja bisnis.",
    icon: "💡"
  }
];

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Data Analyst &amp; BI
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Adam Suvi
            <span className="block text-lg font-normal text-sky-300 sm:text-xl">
              Data Analyst &amp; Business Intelligence Enthusiast
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            “Lulusan Matematika dengan ketelitian tinggi dan pengalaman analisis data,
            business intelligence, dan visualisasi. Mahir SQL, Python, Excel, Power BI,
            dan Tableau.”
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/cv/adam-suvi-cv.pdf" target="_blank">
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="glass-panel glow-hover relative overflow-hidden p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0EA5E980,transparent_55%),radial-gradient(circle_at_bottom_right,#6366F180,transparent_55%)] opacity-70" />
          <div className="relative space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
              Open to Opportunities
            </p>
            <p className="text-sm text-slate-200">
              Saya tertarik pada peran Data Analyst, Business Intelligence, dan posisi
              yang melibatkan pengolahan serta visualisasi data untuk mendukung
              keputusan strategis.
            </p>
            <p className="text-xs text-slate-400">
              Tersedia untuk kerja full-time, freelance, maupun project-based.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
          Tech Stack
        </h2>
        <TechMarquee />
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">How I Help</h2>
            <p className="text-xs text-slate-400">
              Pendekatan end-to-end dari data mentah hingga insight bisnis.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlightCards.map((card) => (
            <article
              key={card.title}
              className="glass-panel glow-hover flex h-full flex-col justify-between p-4"
            >
              <div className="mb-3 text-2xl">{card.icon}</div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}


