// src/components/ui/Founder.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];

export default function Founder() {
  return (
    <section id="founder" className="bg-bg py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.h2
          className="font-stencil text-4xl sm:text-5xl lg:text-6xl leading-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Ko stoji iza svega?
        </motion.h2>

        <motion.p
          className="mt-3 text-lg sm:text-xl text-muted"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.05 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Upoznaj Filipa Ruvceskog, mentora iza najviralnijih objava na Balkanu
        </motion.p>

        {/* Portret sa glowom i blagim „disanjem” */}
        <div className="mt-10 sm:mt-12 grid place-items-center">
          <div className="relative">
            {/* meki glow iza slike */}
            <div className="absolute -inset-6 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />

            <motion.img
              src="/profile/filip.webp"
              alt="Filip Ruvceski"
              loading="lazy"
              className="h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]
                         rounded-full object-cover border-4 border-primary/70 shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              // suptilno "disanje"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                ease: EASE_IN_OUT,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            {/* tanki prsten preko slike (dekorativno) */}
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full border-2 border-primary/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.15 }}
              viewport={{ once: true, amount: 0.55 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
