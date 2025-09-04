// src/components/ui/Preloader.tsx
"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PreloaderProps = {
  slogans?: string[];
  /** Minimalno vreme prikaza (ms) – produži ovde da duže ostane */
  minDurationMs?: number;
  /** Na koliko ms menjamo sledeći slogan */
  sloganIntervalMs?: number;
  /** Koliko brzo se animira prelaz teksta (ms) – smanji za bržu tranziciju */
  sloganTransitionMs?: number;
  /** Opcioni logo (SVG/PNG) */
  logoSrc?: string;
  onFinish?: () => void;
};

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_LINEAR: [number, number, number, number] = [0, 0, 1, 1];

export default function Preloader({
  slogans = [
    "Napravi hook koji zaustavlja scroll.",
    "Snimaj pametno, ne skupo.",
    "Sadržaj koji prodaje.",
  ],
  minDurationMs = 1200,         // ⇦ POVEĆAJ npr. na 3000–4000
  sloganIntervalMs = 1400,      // ⇦ Učestalost promene slogana
  sloganTransitionMs = 350,     // ⇦ SMANJI (npr. 180) za brži prelaz
  logoSrc = "mockups/offer.png",
  onFinish,
}: PreloaderProps) {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = React.useState(true);
  const [idx, setIdx] = React.useState(0);
  const startRef = React.useRef<number>(Date.now());

  // Rotacija slogana
  React.useEffect(() => {
    if (prefersReduced || !visible) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slogans.length);
    }, Math.max(600, sloganIntervalMs));
    return () => clearInterval(id);
  }, [prefersReduced, visible, slogans.length, sloganIntervalMs]);

  // Auto-hide posle load eventa + minimalnog trajanja
  React.useEffect(() => {
    const finish = () => {
      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(0, minDurationMs - elapsed);
      const t = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, wait);
      return () => clearTimeout(t);
    };

    if (document.readyState === "complete") return finish();
    const onLoad = () => finish();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, [minDurationMs, onFinish]);

  // ms → s (Framer koristi sekunde)
  const sloganTransSec = Math.max(80, sloganTransitionMs) / 1000;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[1000] grid place-items-center bg-bg text-text"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          aria-busy="true"
          aria-live="polite"
        >
          {/* glow */}
          <div
            className="pointer-events-none absolute -inset-24 blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(42% 42% at 50% 45%, rgba(66,224,123,0.25) 0%, rgba(0,0,0,0) 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            {/* Logo (ako postoji) */}
            <img
              src={logoSrc}
              alt="Viral Kurs"
              className="h-30 w-auto opacity-90"
              onError={(e) => ((e.currentTarget.style.display = "none"))}
            />

            {/* Spinner + slogan */}
            <div className="flex items-center gap-4">
              {/* kružni spinner */}
              <motion.span
                className="relative inline-block h-8 w-8 rounded-full border-2 border-white/10"
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: EASE_LINEAR,
                }}
              >
                <span className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent" />
              </motion.span>

              {/* Rotirajući slogani */}
              <div className="min-h-[1.75rem] sm:min-h-[2rem]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={idx}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: sloganTransSec, ease: EASE_OUT }}
                    className="text-base sm:text-lg"
                  >
                    {slogans[idx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress bar – tempo usklađen sa intervalom slogana */}
            {!prefersReduced && (
              <motion.div
                className="h-1 w-48 sm:w-64 rounded-full bg-white/10 overflow-hidden"
                aria-hidden="true"
              >
                <motion.span
                  className="block h-full w-1/3 bg-primary"
                  initial={{ x: "-100%" }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: Math.max(900, sloganIntervalMs) / 1000,
                    repeat: Infinity,
                    ease: EASE_LINEAR,
                  }}
                />
              </motion.div>
            )}

            <span className="sr-only">Učitavanje…</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
