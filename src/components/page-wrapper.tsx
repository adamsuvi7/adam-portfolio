"use client";

import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return <section className="space-y-8">{children}</section>;
}


