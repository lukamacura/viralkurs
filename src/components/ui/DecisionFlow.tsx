"use client";
import Link from "next/link";

import React from "react";
import {
  Frown,
  Smile,
  ArrowDown,
} from "lucide-react";

/**
 * Dvokolonski flow: "Ako nastaviš sam" vs "Ako uđeš u program"
 * Tailwind v4, koristi @theme varijable (bg, text, muted, primary)
 */

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl px-5 py-3 font-medium bg-white/5 border border-white/10 inline-flex items-center gap-2">
    {children}
  </div>
);

function StepCard({
  tone,
  children,
}: {
  tone: "bad" | "good";
  children: React.ReactNode;
}) {
  const base =
    "rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold shadow-md border";
  const bad = " bg-[#E5484D] text-bg border-[#ff8a8e]/40"; // crvena
  const good = " bg-primary text-bg border-white/10"; // zelena iz teme
  return <div className={base + (tone === "bad" ? bad : good)}>{children}</div>;
}

function Column({
  tone,
  items,
  cta,
}: {
  tone: "bad" | "good";
  items: string[];
  cta?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-stretch">
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <StepCard tone={tone}>{t}</StepCard>
          {i < items.length - 1 && (
            <div className="grid place-items-center py-3">
              <ArrowDown className="h-6 w-6 text-muted/70" />
            </div>
          )}
        </React.Fragment>
      ))}
      {cta ? <div className="mt-3">{cta}</div> : null}
    </div>
  );
}

export default function DecisionFlow() {
  const leftItems = [
    "Objavljuješ klipove koje niko ne gleda",
    "Nemaš klijente i plan kako da dođeš uopšte do njih",
    "Gubiš sate na skrolovanje i gledanje serija, dok drugi zarađuju.",
    "Nemaš para da izvedeš devojku ili kupiš sebi ono što želiš.",
    "Osećaš se frustrirano jer radiš mnogo, a nemaš rezultat.",
    "Na kraju odustaješ, jer misliš da ‘nije za tebe’.",
  ];

  const rightItems = [
    "Dobijaš jasna uputstva i feedback – tvoje objave postaju viralne",
    "Kroz program i zajednicu dobijaš prve klijente i stabilan plan.",
    "Za 30 dana imaš prodaje i prihod koji menja tvoj život.",
  ];

  return (
    <section className="bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header icons + titles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-start text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Pill>
              <Frown className="h-6 w-6 text-[#E5484D]" />
              <span className="font-stencil text-lg tracking-wide text-[#E5484D]">
                AKO NASTAVIŠ SAM
              </span>
            </Pill>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-3">
            <Pill>
              <Smile className="h-6 w-6 text-primary" />
              <span className="font-stencil text-lg tracking-wide text-primary">
                AKO UĐEŠ U PROGRAM
              </span>
            </Pill>
          </div>
        </div>

        {/* Two columns */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <Column tone="bad" items={leftItems} />

          <Column
  tone="good"
  items={rightItems}
  cta={
    <Link
      href="#kupovina"
      className="block rounded-2xl bg-primary text-bg font-bold text-xl sm:text-2xl px-5 py-4 text-center
                 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
                 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition"
    >
      Spreman sam za promenu
    </Link>
  }
/>

        </div>
      </div>
    </section>
  );
}
