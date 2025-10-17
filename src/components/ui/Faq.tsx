// src/components/ui/FAQ.tsx
"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: "Nemam iskustva, da li je program za mene?", a: "Da. Počinješ od osnova: kako da snimiš, urediš i objaviš sadržaj koji ima šansu da postane viralan. Vodiči su jednostavni i praktični." },
  { q: "Koliko vremena mi treba nedeljno?", a: "Realno 3–5 sati nedeljno je dovoljno da završiš lekcije i uradiš zadatke koji daju rezultat." },
  { q: "Šta ako ne dobijem rezultate?", a: "Imaš 100% garanciju: vraćamo ti sav novac " },
  { q: "Da li mi treba skupa oprema za snimanje?", a: "Ne. Od opreme dovoljan ti je samo mobilni telefon." },
  { q: "Koliko brzo mogu da dobijem prvog klijenta?", a: "Svog prvog klijenta ti je Viral Launch obezbedio. Čim završiš sve lekcije, dobijaš svog prvog klijenta. " },
  
];

function Item({ qa }: { qa: QA }) {
  const [open, setOpen] = React.useState(false);

  return (
    <li id="faq" className="list-none">
      {/* Jedinstveni kontejner iste širine uvek */}
      <div className="w-full rounded-3xl bg-white/6 border border-white/10 overflow-hidden">
        {/* Header (pitanje) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group w-full text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-white/8 transition flex items-center relative"
        >
          <span className="font-medium pr-12 text-base sm:text-lg">{qa.q}</span>

          {/* Strelica */}
          <motion.span
            aria-hidden="true"
            className="absolute right-4 sm:right-5 grid place-items-center h-8 w-8 rounded-xl bg-white/5 border border-white/10"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>

        {/* Answer (animira se visina, ali u istom kontejneru) */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted">
                {qa.a}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}

export default function FAQ({
  items = faqs,
  heading = "FAQ - česta pitanja",
}: {
  items?: QA[];
  heading?: string;
}) {
  return (
    <section className="bg-bg py-16 lg:py-24">
      {/* ⬇️ zaključana širina na svim breakpointima */}
      <div className="mx-auto w-full max-w-full px-4">
        <h2 className="font-stencil text-4xl sm:text-5xl text-center mb-8">
          {heading}
        </h2>

        <ul className="space-y-4 max-w-[500px]">
          {items.map((qa, i) => (
            <Item key={i} qa={qa} />
          ))}
        </ul>
      </div>
    </section>
  );
}
