import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Di sini Anda bisa integrasikan dengan email service / database.
  // Untuk demo, kita hanya mengembalikan respons sukses.

  return NextResponse.json({ ok: true });
}


