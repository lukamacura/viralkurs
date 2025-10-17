"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Gift, Handshake } from "lucide-react";

/**
 * VIRAL LAUNCH – glavna ponuda (pricing/offer card)
 * Tailwind v4, koristi @theme boje: bg, text, muted, primary, primary-fg
 * Deadline sada UVEK prikazuje datum SUTRA (u lokalnom vremenu browsera).
 */

type Bonus = { text: string };

export default function OfferCard({
  title = "VIRAL LAUNCH",
  mockups = [],
  features = [
    "Detaljan kurs kako da kreiras Viralan Sadržaj",
    "Domaći zadaci kroz koje učiš",
    "Pristup WhatsApp grupi sa ostalim članovima",
    "Primeri iz kojih učiš tajne viralnosti",
  ],
  bonuses = [
    { text: "ZAGARANTOVAN PRVI KLIJENT: obezbeđena prva saradnja odmah nakon završenih lekcija! (na šta bi proveo nedelje tražeći)" },
    { text: "AUDIO KNJIGA: Mentalitet za uspeh & Organizaciju Vremena (realna vrednost 80 evra)" },
    { text: "SISTEM ZA PRAĆENJE FINANSIJA: Notion template za praćenje zarade, troškova i budžeta (realna vrednost 120 evra)" },
  ],
  includedTotal = "Realna vrednost: 300 € & 3 meseca rada ",
  guaranteeLabel = "Garancija 100% uključena",
  crossed = "300 €",
  price = "50 € jednokratno",
  priceNote = "(doživotan pristup, bez mesečnih troškova)",
  paymentNote = "Sigurna naplata uplatnicom",
  ctaHref = "#kupovina",
  ctaText = "Želim da uspem i da zarađujem",
  deadlinePrefix = "Ovu cenu možemo garantovati do",
}: {
  title?: string;
  mockups?: string[]; // 1–3 slika
  features?: string[];
  bonuses?: Bonus[];
  includedTotal?: string;
  guaranteeLabel?: string;
  discountPercent?: number;
  crossed?: string;
  price?: string;
  priceNote?: string;
  paymentNote?: string;
  ctaHref?: string;
  ctaText?: string;
  deadlinePrefix?: string;
}) {
  // Izračunaj datum sutrašnjeg dana u lokalnom vremenu korisnika
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const deadlineStr = tomorrow.toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section id="cena" className="scroll-mt-28 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8 shadow-xl">
       {/* Header */}
{/* Header */}
<div className="flex flex-col gap-3">
  <h2 className="font-stencil text-4xl sm:text-5xl tracking-wide">
    {title}
  </h2>

  {/* mockupovi ispod naslova – blago preklapanje */}
  {mockups.length > 0 && (
    <div className="flex items-center justify-center mt-1">
      {mockups.slice(0, 4).map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Ponuda`}
          loading="lazy"
          className={
            // osnovni stil
            "h-80 sm:h-24 md:h-100 w-auto object-contain  "
          }
        />
      ))}
    </div>
  )}
</div>


        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex gap-3 text-lg">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Bonusi */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 grid place-items-center rounded-md border border-white/10 bg-white/5">
              <Gift className="h-4 w-4 text-primary" />
            </div>
            <h3 className="font-stencil text-xl">Ekskluzivni BONUSI</h3>
          </div>
          <ul className="mt-3 space-y-2">
            {bonuses.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-lg text-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Total line + divider */}
        <div className="mt-4 text-sm text-muted">{includedTotal}</div>
        <div className="my-4 h-px w-full bg-white/10" />

        {/* Guarantee + pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-[1.1fr,0.9fr] gap-6 items-center">
          {/* Left guarantee */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 grid place-items-center border border-primary/30">
              <Handshake className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm sm:text-base">{guaranteeLabel}</span>
          </div>

          {/* Right pricing */}
          <div className="grid place-items-center gap-2  font-bold">
            <div className="text-muted line-through text-base -mt-1">{crossed}</div>
            <div className="text-center">
              <div className=" text-2xl">{price}</div>
              <div className="text-sm text-muted">{priceNote}</div>
            </div>
          </div>
        </div>

        {/* Payment note */}
        <div className="mt-4 text-center text-xs text-muted">{paymentNote}</div>

        {/* CTA */}
        <div className="mt-4">
          <Link
            href={ctaHref}
            className="block w-full rounded-2xl bg-primary text-bg font-bold text-lg sm:text-xl py-6 text-center hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {ctaText}
          </Link>
          <p className="mt-3 text-center text-xs text-muted">{deadlinePrefix} {deadlineStr}</p>
        </div>
      </div>
    </section>
  );
}
