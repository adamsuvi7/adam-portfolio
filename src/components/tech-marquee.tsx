"use client";

const techs = [
  "SQL",
  "Python",
  "Excel",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "Git"
];

export function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <div className="glass-panel relative overflow-hidden py-3">
      <div className="marquee-track flex min-w-max gap-4 px-4">
        {items.map((label, idx) => (
          <div
            key={`${label}-${idx}`}
            className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs text-slate-200"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500/70 text-[10px] font-semibold text-slate-950">
              {label.charAt(0)}
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


