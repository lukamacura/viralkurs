// src/components/ui/DecisionFlow.tsx
"use client";

import Link from "next/link";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Frown, Smile, ArrowDown } from "lucide-react";

/**
 * Dvokolonski flow: "Ako nastaviš sam" vs "Ako uđeš u program"
 * Mobile-first, jasno strukturirano, sa glatkim animacijama
 * Tailwind v4; koristi @theme boje (bg, text, muted, primary)
 */

// cubic-bezier “easeOut” (FM v11 očekuje funkciju/tuple, ne string)
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 font-medium bg-white/5 border border-white/10 inline-flex items-center gap-2">
    {children}
  </div>
);

function StepCard({
  tone,
  children,
  className = "",
}: {
  tone: "bad" | "good";
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    "rounded-2xl px-4 sm:px-6 py-3.5 sm:py-5 text-base sm:text-lg font-semibold shadow-md border";
  const bad = " bg-[#E5484D] text-bg border-[#ff8a8e]/40"; // crvena
  const good = " bg-primary text-bg border-white/10"; // zelena iz teme
  return <div className={`${base} ${tone === "bad" ? bad : good} ${className}`}>{children}</div>;
}

type ColumnProps = {
  tone: "bad" | "good";
  title: string;
  icon: React.ReactNode;
  items: string[];
  cta?: React.ReactNode;
};

function Column({ tone, title, icon, items, cta }: ColumnProps) {
  const prefersReduced = useReducedMotion();

  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.38, ease: EASE_OUT },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="flex flex-col items-stretch"
    >
      {/* Naslov kolone – uvek iznad liste (dobro i za mobilni i za desktop) */}
      <div className="mb-3 sm:mb-4 text-center sm:text-left">
        <Pill>
          {icon}
          <span
            className={`font-stencil text-base sm:text-lg tracking-wide ${
              tone === "bad" ? "text-[#FFD1D3]" : "text-primary"
            }`}
          >
            {title}
          </span>
        </Pill>
      </div>

      {/* Lista koraka sa strelicama između */}
      <motion.ul variants={listVariants} className="flex flex-col">
        {items.map((t, i) => (
          <React.Fragment key={i}>
            <motion.li variants={itemVariants} className="list-none">
              <StepCard tone={tone}>{t}</StepCard>
            </motion.li>

            {i < items.length - 1 && (
              <motion.li
                variants={itemVariants}
                aria-hidden="true"
                className="list-none grid place-items-center py-2.5 sm:py-3"
              >
                <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted/70" />
              </motion.li>
            )}
          </React.Fragment>
        ))}
      </motion.ul>

      {/* CTA (opciono) */}
      {cta ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="mt-6"
        >
          {cta}
        </motion.div>
      ) : null}
    </motion.div>
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
        {/* Dve kolone – mobilni: jedna ispod druge, desktop: dve uporedo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Leva (bad) */}
          <Column
            tone="bad"
            title="AKO NASTAVIŠ SAM"
            icon={<Frown className="h-6 w-6 text-[#FFD1D3]" aria-hidden="true" />}
            items={leftItems}
          />

          {/* Desna (good) */}
          <Column
            tone="good"
            title="AKO UĐEŠ U PROGRAM"
            icon={<Smile className="h-6 w-6 text-primary" aria-hidden="true" />}
            items={rightItems}
            cta={
              <Link
                href="#cena"
                className="block w-full rounded-2xl bg-primary text-bg font-bold text-lg sm:text-xl px-5 py-4 text-center
                           hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
                           focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition"
              >
                💸 Spreman sam za promenu
              </Link>
            }
          />
        </div>
      </div>
    </section>
  );
}
