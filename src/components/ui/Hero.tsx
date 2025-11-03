"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const palette = {
  bg: "#0B0F0F",
  text: "#F3EFF5",
  muted: "#BFB9BE",
  primary: "#53DD6C",
  primaryFg: "#0B0F0F",
};

// cubic-bezier za “ease-out”
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type HeroProps = {
  mockupOneSrc: string;
  mockupTwoSrc: string;
  mockupPhoneSrc: string;
  avatars: [string, string, string];
};

const glowStyle = {
  boxShadow:
    "0 0 0px rgba(66,224,123,0.00), 0 0 30px rgba(66,224,123,0.10), 0 0 60px rgba(66,224,123,0.08)",
};

export default function Hero({
  mockupOneSrc,
  mockupTwoSrc,
  mockupPhoneSrc,
  avatars,
}: HeroProps) {
  const prefersReduced = useReducedMotion();

  // lagani fade-up preset
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: EASE_OUT, delay },
    viewport: { once: true, amount: 0.5 },
  });

  // idle float (disable ako user preferira reduced motion)
  const idle = !prefersReduced
    ? { y: [0, -6, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as any } }
    : {};

  return (
    <section
      id="pocetna"
      className="relative overflow-hidden"
      style={{ backgroundColor: palette.bg, color: palette.text }}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-22 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="relative z-10">
            <motion.h1
              {...fadeUp(0)}
              className="font-stencil text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.18)" }}
            >
              Umoran si od toga da svi oko tebe zarađuju, a ti i dalje ne znaš
              odakle da kreneš?
            </motion.h1>

            <motion.p
              {...fadeUp(0.05)}
              className="mt-5 text-lg sm:text-xl max-w-2xl"
              style={{ color: palette.muted }}
            >
              Nauči kako da tvoj sadržaj postane izvor stabilnog prihoda — bez
              nagađanja i gubljenja vremena.
            </motion.p>

            {/* VIDEO PLACEHOLDER */}
    

            {/* AVATARS */}
            <motion.div {...fadeUp(0.15)} className="mt-5 flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.slice(0, 3).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`avatar-${i}`}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white/10 object-cover"
                    style={{ boxShadow: "0 3px 12px rgba(0,0,0,0.35)" }}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base" style={{ color: palette.muted }}>
                Pridruži se zajednici od preko{" "}
                <span className="font-semibold" style={{ color: palette.text }}>
                  500+
                </span>{" "}
                članova
              </p>
            </motion.div>

            {/* CTA — full width na mobilu */}
            <motion.div {...fadeUp(0.2)} className="mt-5">
              <a
                href="#benefiti"
                className="block w-full rounded-2xl px-6 py-4 text-center text-lg font-bold hover:opacity-95 active:opacity-90 transition"
                style={{
                  backgroundColor: palette.primary,
                  color: palette.primaryFg,
                  boxShadow: "0 12px 28px rgba(66,224,123,0.24)",
                }}
              >
                💸 Želim da zarađujem
              </a>
            </motion.div>
          </div>

          {/* RIGHT — MOCKUPS */}
          <div className="relative">
            {/* BG glow */}
            <div
              className="absolute -inset-16 rounded-full blur-3xl opacity-30"
              style={{
                background: `radial-gradient(60% 60% at 50% 40%, ${palette.primary}33 0%, rgba(0,0,0,0) 60%)`,
              }}
            />

            {/* MOBILE (<= lg) */}
            <div className="relative h-[340px] sm:h-[380px] lg:hidden">
              <motion.img
                src={mockupOneSrc}
                alt="Viral Launch"
                className="absolute left-1/2 -translate-x-[62%] top-4 w-[60%] rotate-[-14deg] drop-shadow-2xl will-change-transform"
                {...(prefersReduced ? {} : { animate: idle as any })}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              />
              <motion.img
                src={mockupTwoSrc}
                alt="Viral Expert"
                className="absolute right-1/2 translate-x-[80%] top-0 w-[60%] rotate-[12deg] drop-shadow-2xl will-change-transform"
                {...(prefersReduced ? {} : { animate: idle as any })}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.02 }}
              />
              <motion.img
                src={mockupPhoneSrc}
                alt="Rezultati chata"
                className="absolute left-1/2 -translate-x-1/2 bottom-[-15%] w-[100%] rotate-[2deg] drop-shadow-2xl will-change-transform"
                {...(prefersReduced ? {} : { animate: idle as any })}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.04 }}
              />
            </div>

            {/* DESKTOP (>= lg) */}
            <div className="relative hidden lg:block h-[560px] xl:h-[640px]">
              <motion.img
                src={mockupOneSrc}
                alt="Viral Launch"
                className="absolute left-[-12%] top-[-12%] w-[62%] rotate-[-24deg] drop-shadow-2xl will-change-transform"
                {...(prefersReduced ? {} : { animate: idle as any })}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              />
              <motion.img
                src={mockupTwoSrc}
                alt="Viral Expert"
                className="absolute right-[2%] top-[-10%] w-[56%] rotate-[12deg] drop-shadow-2xl will-change-transform"
                {...(prefersReduced ? {} : { animate: idle as any })}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.05 }}
              />
              <motion.img
                src={mockupPhoneSrc}
                alt="Rezultati chata"
                className="absolute right-[-2%] bottom-[-8%] w-[100vw] drop-shadow-2xl will-change-transform"
                {...(prefersReduced ? {} : { animate: idle as any })}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.08 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
