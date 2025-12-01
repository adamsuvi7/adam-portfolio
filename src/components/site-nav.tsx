"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      <Link
        href="/"
        className="text-xs font-semibold tracking-[0.25em] text-slate-300"
      >
        ADAM
        <span className="text-sky-400">.</span>SUVI
      </Link>
      <ul className="hidden items-center gap-4 text-xs text-slate-400 sm:flex">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-1 transition-colors",
                  active
                    ? "bg-slate-900 text-sky-100"
                    : "hover:bg-slate-900/70 hover:text-sky-100"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


