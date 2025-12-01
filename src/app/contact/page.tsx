"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Gagal mengirim pesan");

      setStatus("success");
      setMessage("Terima kasih! Pesan Anda sudah terkirim.");
    } catch (error) {
      setStatus("error");
      setMessage("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
  }

  return (
    <PageWrapper>
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-50">Contact</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Tertarik bekerja sama, berdiskusi, atau ingin tahu lebih jauh tentang proyek
          saya? Silakan kirim pesan melalui form berikut.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <form
          className="glass-panel space-y-4 p-4"
          action={async (formData) => {
            await handleSubmit(formData);
          }}
        >
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-medium text-slate-200">
              Nama
            </label>
            <input
              id="name"
              name="name"
              required
              className="h-9 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 text-xs text-slate-100 outline-none ring-sky-500/70 transition focus:border-sky-500 focus:ring-2"
              placeholder="Nama lengkap Anda"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-9 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 text-xs text-slate-100 outline-none ring-sky-500/70 transition focus:border-sky-500 focus:ring-2"
              placeholder="email@contoh.com"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-200">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none ring-sky-500/70 transition focus:border-sky-500 focus:ring-2"
              placeholder="Tuliskan pesan Anda..."
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Mengirim..." : "Send Message"}
          </Button>
          {message && (
            <p
              className={
                status === "error"
                  ? "text-xs text-red-400"
                  : "text-xs text-emerald-400"
              }
            >
              {message}
            </p>
          )}
        </form>

        <aside className="space-y-3 text-sm text-slate-300">
          <div className="glass-panel p-4">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Direct Contact
            </h2>
            <p className="text-xs text-slate-300">
              <span className="font-medium text-slate-100">Email:</span>{" "}
              <a
                href="mailto:adamsuvi7@gmail.com"
                className="text-sky-300 hover:underline"
              >
                adamsuvi7@gmail.com
              </a>
            </p>
            <p className="mt-1 text-xs text-slate-300">
              <span className="font-medium text-slate-100">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/adam-suvi7"
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 hover:underline"
              >
                linkedin.com/in/adam-suvi7
              </a>
            </p>
          </div>
        </aside>
      </section>
    </PageWrapper>
  );
}


