// src/components/ui/Preloader.tsx
"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type PreloaderProps = {
  slogans?: string[];
  /** Minimalno vreme prikaza (ms) */
  minDurationMs?: number;
  /** Na koliko ms menjamo sledeći slogan */
  sloganIntervalMs?: number;
  /** Brzina animacije prelaza teksta (ms) */
  sloganTransitionMs?: number;
  /** Opcioni logo (SVG/PNG/WEBP/PNG) */
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
  minDurationMs = 1200,        // podigni npr. na 3000–4000 za duže zadržavanje
  sloganIntervalMs = 1400,     // učestalost smene slogana
  sloganTransitionMs = 350,    // smanji (npr. 180) za bržu tranziciju
  onFinish,
}: PreloaderProps) {
  const prefersReduced = useReducedMotion();

  const [visible, setVisible] = React.useState(true);
  const [idx, setIdx] = React.useState(0);

  const startRef = React.useRef<number>(Date.now());
  const finishedRef = React.useRef(false);
  const onFinishRef = React.useRef<PreloaderProps["onFinish"]>(onFinish);

  // držimo aktuelnu callback ref bez izazivanja rerendera
  React.useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  // Jedna, sigurna smena slogana (bez dupliranja intervala)
  React.useEffect(() => {
    if (prefersReduced || !visible) return;

    const interval = window.setInterval(() => {
      setIdx((i) => (i + 1) % slogans.length);
    }, Math.max(600, sloganIntervalMs));

    return () => window.clearInterval(interval);
  }, [prefersReduced, visible, slogans.length, sloganIntervalMs]);

  // One-shot hide: odradi se jednom kada je stranica "ready" + ispoštuje minimalno vreme
  React.useEffect(() => {
    const finishOnce = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      const elapsed = Date.now() - startRef.current;
      const wait = Math.max(0, minDurationMs - elapsed);

      const t = window.setTimeout(() => {
        setVisible(false);
        onFinishRef.current?.();
      }, wait);

      // ako dođe do unmounta, počisti tajmer
      return () => window.clearTimeout(t);
    };

    // ako je već učitano, startuj odmah (ali i dalje poštuj minDurationMs)
    if (document.readyState === "complete") {
      const cleanup = finishOnce();
      return cleanup;
    }

    // u suprotnom sačekaj 'load'
    const onLoad = () => finishOnce();
    window.addEventListener("load", onLoad, { once: true });

    return () => window.removeEventListener("load", onLoad);
  }, [minDurationMs]);

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
          {/* glow pozadina */}
          <div
            className="pointer-events-none absolute -inset-24 blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(42% 42% at 50% 45%, rgba(66,224,123,0.25) 0%, rgba(0,0,0,0) 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-6 px-6 text-left">
            {/* Logo (opciono) */}
     

            {/* Spinner + slogani */}
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

              {/* Rotirajući slogani (uvek 1 interval) */}
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

            {/* Progress bar */}
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
