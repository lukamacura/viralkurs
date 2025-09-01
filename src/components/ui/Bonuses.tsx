"use client";

import React from "react";
import { Gift, Notebook, Rocket, WalletMinimal, Target } from "lucide-react";

type Bonus = {
  icon: React.ReactNode;
  title: string;
};

const BonusRow = ({ item }: { item: Bonus }) => (
  <li className="flex items-start gap-4">
    <div className="h-12 w-12 grid place-items-center rounded-xl border border-white/10 bg-white/5">
      {item.icon}
    </div>
    <p className="text-lg leading-relaxed">{item.title}</p>
  </li>
);

export default function Bonuses({
  mockups = [],
}: {
  mockups?: string[];
}) {
  const items: Bonus[] = [
    {
      icon: <Notebook className="s w-7 text-primary" aria-hidden="true" />,
      title:
        "VODIČ: Kako organizovati dan i postati 3X produktivniji (realna vrednost 80 evra)",
    },
    {
      icon: <Rocket className="s w-7 text-primary" aria-hidden="true" />,
      title:
        "KLIJENT BOOST: Dovodimo ti klijenta čim naučiš osnove (ušteda 3 meseca mučenja)",
    },
    {
      icon: (
        <WalletMinimal className="s w-7 text-primary" aria-hidden="true" />
      ),
      title:
        "SISTEM ZA PRAĆENJE FINANSIJA: Notion template za praćenje zarade, troškova i budžeta (realna vrednost 120 evra)",
    },
    {
      icon: <Target className="s w-7 text-primary" aria-hidden="true" />,
      title:
        "FOKUS SISTEM: Notion template za praćenje prioriteta, KPI-eva i zadataka (realna vrednost 100 evra)",
    },
  ];

  return (
    <section className="relative bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Veliki gift i heading */}
        <div className="flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-2xl border border-white/10 bg-white/5 grid place-items-center shadow-lg">
            <Gift className="h-10 w-10 text-primary" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-stencil text-5xl sm:text-6xl leading-none">
            Ekskluzivni BONUSI
          </h2>
          <p className="mt-3 text-muted">Sve bonuse dobijate besplatno</p>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10">
          {/* Levo — lista bonusa */}
          <ul className="space-y-6">
            {items.map((it, i) => (
              <BonusRow key={i} item={it} />
            ))}
          </ul>

          {/* Desno — mockup slike (opciono) */}
          <div className="relative min-h-[320px]">
            <div
              className="absolute max-w-fullblur-3xl opacity-25"
              style={{
                background:
                  "radial-gradient(60% 60% at 60% 40%, rgba(66,224,123,0.25) 0%, rgba(0,0,0,0) 60%)",
              }}
            />
            {mockups[0] && (
              <img
                src={mockups[0]}
                alt="bonus-1"
                className="absolute right-[20%] top-4 w-[50%] rotate-[12deg] drop-shadow-2xl"
              />
            )}
            {mockups[1] && (
              <img
                src={mockups[1]}
                alt="bonus-2"
                className="absolute left-[5%] top-[26%] w-[44%] -rotate-[18deg] drop-shadow-2xl"
              />
            )}
            {mockups[2] && (
              <img
                src={mockups[2]}
                alt="bonus-3"
                className="absolute right-[0%] bottom-0 w-[46%] -rotate-[10deg] drop-shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
        <div className="mt-16 sm:mt-20 font-bold text-center">
          <p className="font-stencil leading-tight text-4xl sm:text-5xl md:text-6xl">
            Ukupno bi ovo platio
          </p>
          <p className="font-stencil leading-tight text-4xl sm:text-5xl md:text-6xl mt-2">
            300 evra i potrošio
          </p>
          <p className="font-stencil leading-tight text-4xl sm:text-5xl md:text-6xl">
            gomilu vremena
          </p>

          <p className="font-stencil text-primary leading-none text-5xl sm:text-6xl md:text-7xl mt-6">
            ALI
          </p>

          <p className="font-stencil leading-tight text-4xl sm:text-5xl md:text-6xl mt-4">
            Dobijaš potpuno <span className="text-primary">FREE</span>
          </p>
        </div>
      
    </section>
  );
}
