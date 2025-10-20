// app/api/kupovina/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // potrebno zbog rada sa fajlovima/FormData

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name = form.get("name");
    const email = form.get("email");
    const proof = form.get("proof") as File | null;

    if (typeof name !== "string" || typeof email !== "string" || !proof) {
      return NextResponse.json(
        { ok: false, error: "Nedostaju polja: name, email ili proof." },
        { status: 400 }
      );
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nUrl) {
      return NextResponse.json(
        { ok: false, error: "N8N_WEBHOOK_URL nije podešen u okruženju." },
        { status: 500 }
      );
    }

    // Priprema novog FormData za prosleđivanje ka n8n
    const n8nForm = new FormData();
    n8nForm.set("name", name);
    n8nForm.set("email", email);

    // Re-kreiramo fajl iz pristiglog File objekta (radi kompatibilnosti)
    const buf = await proof.arrayBuffer();
    const forwardFile = new File([buf], proof.name || "proof.jpg", { type: proof.type || "application/octet-stream" });
    n8nForm.set("proof", forwardFile);

    // Prosleđivanje ka n8n webhooku
    const res = await fetch(n8nUrl, {
      method: "POST",
      body: n8nForm, // ne postavljati Content-Type ručno (fetch doda boundary)
    });

    const payload = await res.text().catch(() => "");

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "n8n webhook nije uspeo", details: payload },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, forwarded: true, n8n: payload || "OK" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Neočekivana greška na serveru." }, { status: 500 });
  }
}
