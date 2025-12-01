import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  tools: string;
  description: string;
  cta: string;
}

export function ProjectCard({ title, tools, description, cta }: ProjectCardProps) {
  return (
    <article className="glass-panel glow-hover flex flex-col justify-between p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <p className="text-[11px] uppercase tracking-[0.16em] text-sky-300">
          {tools}
        </p>
        <p className="text-xs text-slate-300">{description}</p>
      </div>
      <div className="mt-3">
        <Button variant="subtle" size="sm">
          {cta}
        </Button>
      </div>
    </article>
  );
}


