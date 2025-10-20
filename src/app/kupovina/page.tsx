import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Download, Scroll, Smartphone, Info, Pencil, Landmark, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export const metadata = {
  title: "Uplatnica – Viral Launch",
  description: "Primer uplatnice i jednostavna uputstva kako da uplatiš kurs.",
};

export default function UplatnicaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scroll className="h-6 w-6 text-primary" aria-hidden />
            <h1 className="text-2xl font-bold tracking-tight">Uplatnica</h1>
          </div>
          <Link href="/" className="text-sm opacity-75 hover:opacity-100">← Nazad</Link>
        </header>

        <Card className="border-neutral-800 bg-neutral-900/40 text-white">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Primer uplatnice</h2>
                <p className="mt-1 text-sm text-neutral-300">
                  Ovde je primer kako popunjena <b>uplatnica</b> treba da izgleda. Samo <b>prepiši</b> podatke i <b>plati</b> u pošti/banci ili online.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Preview image */}
            <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-black">
              <Image
                src="/uplatnica.webp"
                alt="Primer popunjene uplatnice za kurs"
                width={1440}
                height={900}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* Super simple steps */}
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-2 rounded-xl bg-neutral-800/50 p-3">
                <Pencil className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                Prepiši podatke sa slike (primalac, iznos, poziv na broj).
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-neutral-800/50 p-3">
                <Landmark className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                Uplati u pošti/banci ili preko e‑bankinga.
              </li>
              <li className="flex items-center gap-2 rounded-xl bg-neutral-800/50 p-3">
                <Camera className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                Sačuvaj potvrdu o uplati (slika ili PDF).
              </li>
            </ul>

            <div className="flex items-start gap-2 rounded-xl border border-neutral-800 p-3 text-xs text-neutral-300">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Ako nešto nije jasno – ne brini. Uvek možeš da nam pošalješ sliku svoje uplatnice i pomoći ćemo ti da je ispravno popuniš.
            </div>
          </CardContent>

          <CardFooter className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-between">
            <Button variant="secondary" asChild className="w-full sm:w-auto">
              <a href="/uplatnica.webp" download>
                <Download className="mr-2 h-4 w-4" /> Preuzmi primer (WEBP)
              </a>
            </Button>

            <Button asChild className="w-full text-black font-bold sm:w-auto">
              <Link href="/kupovina/upload">Imam uplatnicu</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-neutral-400">
          Garancija: ako pogrešiš pri popunjavanju, javi se i pomažemo ti da sve prođe laganini.
        </p>
      </div>
    </main>
  );
}
