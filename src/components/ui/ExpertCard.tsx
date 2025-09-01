// src/components/ui/ExpertCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type Props = {
  headingTop?: string;
  headingMid?: string;           // zeleno
  headingBottom?: string;
  title?: string;                // naslov u okviru kartice
  mockupSrc?: string;            // putanja do slike mockupa (centar)
  features?: string[];
  priceMain?: string;            // "70€ / mesečno"
  priceNote?: string;            // "(bez dodatnih troškova)"
  ctaHref?: string;
  ctaText?: string;
};

export default function ExpertCard({
  headingTop = "Hoćeš maksimalnom brzinom da napreduješ?",
  headingMid = "Onda je za tebe",
  headingBottom = "VIRAL EXPERT",
  title = "VIRAL EXPERT",
  mockupSrc = "/mockups/viral-expert.png",
  features = [
    "Mentorstvo i podrška na svakom koraku",
    "Nedeljni live pozivi i feedback",
    "Sistem i alati za sadržaj koji radi",
    "Direktan pristup klijentima i saradnjama",
    "Ekskluzivna zajednica i podrška",
    "Kompletan Viral Launch kurs uključen",
  ],
  priceMain = "70€ / mesečno",
  priceNote = "(bez dodatnih troškova)",
  ctaHref = "#kupovina-expert",
  ctaText = "Želim da postignem maksimalne rezultate",
}: Props) {
  return (
    <section className="bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Gornji copy */}
        <div className="text-center">
          <p className="font-stencil text-3xl sm:text-4xl leading-tight">
            {headingTop}
          </p>
          <p className="font-stencil text-primary text-3xl sm:text-4xl leading-tight mt-3">
            {headingMid}
          </p>
          <p className="font-stencil text-4xl sm:text-5xl leading-tight">
            {headingBottom}
          </p>
        </div>

        {/* Kartica */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 shadow-xl p-5 sm:p-7 lg:p-8">
          {/* Naslov u kartici + mockup */}
          <div className="text-center">
            <h2 className="font-stencil text-4xl tracking-wide">{title}</h2>

            {/* Mockup u centru */}
            {mockupSrc && (
              <div className="mt-6 grid place-items-center">
                <img
                  src={mockupSrc}
                  alt="Viral Expert mockup"
                  loading="lazy"
                  className="h-80 sm:h-40 md:h-100 w-auto object-contain drop-shadow-2xl"
                />
              </div>
            )}
          </div>

          {/* Lista benefita */}
          <ul className="mt-6 space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-lg">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="text-muted">{f}</span>
              </li>
            ))}
          </ul>

          {/* Cena */}
          <div className="mt-8 text-center  font-bold">
            <div className=" text-2xl">{priceMain}</div>
            <div className="text-muted text-sm">{priceNote}</div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href={ctaHref}
              className="block w-full rounded-2xl bg-primary text-bg  font-bold text-lg sm:text-xl py-4 text-center hover:opacity-90 transition
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
