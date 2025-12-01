"use client";

import { cn } from "@/lib/utils";

export function Timeline({
  items
}: {
  items: {
    title: string;
    period?: string;
    subtitle?: string;
    points: string[];
  }[];
}) {
  return (
    <div className="relative ml-2 border-l border-slate-700/70 pl-4">
      <div className="absolute left-[-0.31rem] top-0 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.35)]" />
      <div className="space-y-5 pt-3">
        {items.map((item) => (
          <article
            key={item.title}
            className={cn(
              "relative rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4",
              "glow-hover"
            )}
          >
            <div className="absolute left-[-1.05rem] top-4 h-2 w-2 rounded-full bg-sky-400" />
            <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
            {item.period && (
              <p className="text-xs font-medium text-sky-300">{item.period}</p>
            )}
            {item.subtitle && (
              <p className="mt-1 text-xs text-slate-400">{item.subtitle}</p>
            )}
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-[3px] w-[3px] rounded-full bg-sky-400/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}


