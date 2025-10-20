"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User2, Mail, Upload, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";



export default function KupovinaPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return setPreview(null);
    const url = URL.createObjectURL(file);
    setPreview(url);
  }
const router = useRouter();

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const res = await fetch("/api/uplatnice", { method: "POST", body: formData });
  if (res.ok) {
    router.push("upload/success"); // ✅ jednostavno preusmeravanje
  } else {
    alert("Došlo je do greške prilikom slanja uplatnice.");
  }
}

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden />
            <h1 className="text-2xl font-bold tracking-tight">Potvrda uplate</h1>
          </div>
          <Link href="/uplatnica" className="text-sm opacity-75 hover:opacity-100 flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Nazad
          </Link>
        </header>

        <Card className="border-neutral-800 bg-neutral-900/40 text-white">
          <CardHeader>
            <h2 className="text-xl font-bold">Unesi podatke</h2>
            <p className="mt-1 text-sm text-neutral-300">Treba nam tvoje ime i email da ti pošaljemo pristup kursu. Okači i sliku potvrde o uplati.</p>
          </CardHeader>

          <CardContent>
            {sent ? (
              <div className="rounded-2xl border border-emerald-800 bg-emerald-900/30 p-4">
                <p className="text-sm">
                  ✅ <b>Hvala!</b> Podaci su poslati. Uskoro dobijaš mejl sa pristupom.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Ime i prezime</Label>
                    <div className="relative">
                      <User2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                      <Input id="name" name="name" placeholder="npr. Petar Petrović" required className="pl-10 bg-neutral-900/60 border-neutral-800 text-white placeholder:text-neutral-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                      <Input id="email" name="email" type="email" placeholder="tvoj@email.com" required className="pl-10 bg-neutral-900/60 border-neutral-800 text-white placeholder:text-neutral-500" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proof" className="text-sm">Slika potvrde o uplati</Label>
                  <label htmlFor="proof" className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-700 bg-neutral-900/60 p-6 text-sm hover:border-neutral-500">
                    <Upload className="h-5 w-5" />
                    {preview ? "Promeni sliku" : "Prevuci ili klikni da izabereš sliku"}
                  </label>
                  <Input
                    id="proof"
                    name="proof"
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                    required
                  />

                  {preview && (
                    <div className="overflow-hidden rounded-2xl border border-neutral-800">
                      {/* koristi običan img zbog blob URL‑a */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={preview} alt="Preview potvrde" className="w-full" />
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full text-black text-lg font-extrabold cursor-pointer py-8">Spreman sam da zarađujem</Button>
              </form>
            )}
          </CardContent>

          <CardFooter className="justify-center text-xs text-neutral-400">
            Čuvamo tvoje podatke samo za pristup kursu.
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
