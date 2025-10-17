"use client";

import React from "react";
import {
  Infinity,
  NotebookPen,
  Users,
  Clapperboard,
  CheckCircle2,
  Handshake,
} from "lucide-react";

/**
 * Šta ti donosi Viral Launch program — sekcija benefita
 * Tailwind v4, lucide-react ikone,
 * koristiš brend boje definisane u @theme (bg, text, muted, primary)
 */

const Feature = ({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) => (
  <div className="grid grid-cols-[56px,1fr] gap-4 items-start">
    {/* Left icon badge */}
    <div className="h-14 w-14 rounded-xl border border-white/10 bg-white/5 grid place-items-center">
      {icon}
    </div>

    {/* Content */}
    <div>
      <h3 className="font-stencil font-bold text-xl sm:text-2xl leading-snug">
        {title}
      </h3>

      <ul className="mt-3 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-muted">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <span className="text-base leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function LaunchBenefits() {
  return (
    <section id="benefiti" className="scroll-mt-28 mx-auto max-w-8xl px-4 sm:px-6 lg:px-16 py-16 lg:py2 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-stencil font-bold text-4xl sm:text-6xl leading-tight">
          Šta ti donosi Viral
          <br className="hidden sm:block" /> Launch program?
        </h2>

        <div className="mt-10 space-y-10">
          <Feature
            icon={<Infinity className="h-7 w-7 text-primary" aria-hidden="true" />}
            title="Detaljan kurs kako da kreiras Viralan Sadrzaj:"
            bullets={[
              "Kako osmisliti Scenario koji ce otici Viralno?",
              "Kako Snimiti Video, kao profesionalni kamerman?",
              "Kako Izeditovati snimljen klip, samo telefonom?",
              "Kako da tvoj sadrzaj napravi prodaje?",
            ]}
          />

          <Feature
            icon={<NotebookPen className="h-7 w-7 text-primary" aria-hidden="true" />}
            title="Domaći zadaci kroz koje učiš"
            bullets={[
              "Konkretne vežbe odmah posle svake lekcije",
              "Instrukcije kako da primenis znanje u praksi",
            ]}
          />

          <Feature
            icon={<Users className="h-7 w-7 text-primary" aria-hidden="true" />}
            title="Pristup WhatsApp grupi sa ostalim članovima"
            bullets={[
              "Povezivanje sa ljudima istih ciljeva",
              "Brza razmena ideja, inspiracije i podrške od kolega",
              "Rešenja za sve probleme sa kojima ćeš se susresti",
            ]}
          />

          <Feature
            icon={<Clapperboard className="h-7 w-7 text-primary" aria-hidden="true" />}
            title="Primeri iz kojih učiš tajne viralnosti"
            bullets={[
              "Šabloni i modeli koje možeš odmah kopirati",
              "Učiš kako da analiziraš greške & strategije drugih kreatora",
            ]}/>
          
        </div>
      </div>
    </section>
  );
}
