"use client";

import React from "react";
import { Handshake, CheckCircle2 } from "lucide-react";

/**
 * Garancija 200% — sekcija sa velikim badge-om i jasnim obećanjem
 * Tailwind v4, koristi brend boje iz @theme (bg, text, primary, primary-fg)
 */

export default function Guarantee({
  bonusAmount = 40,
}: {
  bonusAmount?: number;
}) {
  return (
    <section className="bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="font-stencil text-5xl sm:text-6xl leading-none">Garancija 100%</h2>

        {/* Big badge */}
        <div className="mt-8 flex justify-center">
          <div className="relative grid place-items-center">
            <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-full bg-bg border border-primary/30" />
            <div className="absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-primary grid place-items-center shadow-inner">
              <Handshake className="h-24 w-24 text-bg" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Promise list */}
        <div className="mt-8">
          <p className="text-xl text-text/90">Ako za mesec dana ne budeš imao:</p>
          <ul className="mt-4 max-w-md mx-auto space-y-3 text-left">
            {[
              "znanje koje je pomenuto",
              "1 viralnu objavu",
              "svog prvog klijenta",
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-base sm:text-lg leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bold statements */}
        <div className="mt-12 sm:mt-14 font-bold">
          <p className="font-stencil uppercase text-primary leading-tight text-4xl sm:text-5xl md:text-6xl">
            VRAĆAMO TI SAV NOVAC!
          </p>
          
        </div>
      </div>
    </section>
  );
}
