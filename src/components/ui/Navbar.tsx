// src/components/ui/BlurNavbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Početna", href: "#pocetna" },
  { label: "Rezultati", href: "#rezultati" },
  { label: "Šta dobijam", href: "#benefiti" },
  { label: "Cena", href: "#cena" },
  { label: "FAQ", href: "#faq" },
];

export default function BlurNavbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string>("");

  // Scroll-spy
  React.useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-25% 0px -65% 0px", threshold: 0.01 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Lock scroll kad je meni otvoren
  React.useEffect(() => {
    const el = document.documentElement;
    if (open) el.style.overflow = "hidden";
    else el.style.overflow = "";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Bar */}
      <div className="fixed top-4 left-1/2 z-50 w-full -translate-x-1/2 px-4">
        <nav
          className="mx-auto flex items-center justify-between rounded-full border border-white/10
                     bg-black/30 backdrop-blur-md shadow-lg/20 px-3 py-2
                     max-w-4xl"
          aria-label="Sekcije stranice"
        >
          {/* Logo */}
          <Link href="#pocetna" className="flex items-center gap-2">
            {/* zameni putanju po potrebi */}
            <img src="mockups/Offer.png" alt="Logo" className="h-10 w-auto" />
            <span className="hidden sm:inline font-stencil text-white/90 text-lg leading-none whitespace-nowrap">
              Viral Programi
            </span>
          </Link>

          {/* Desktop linkovi – jedan red, bez prelamanja */}
          <ul className="hidden sm:flex flex-nowrap items-center gap-2 overflow-x-auto">
            {NAV.map((n) => {
              const on = active === n.href;
              return (
                <li key={n.href} className="shrink-0">
                  <Link
                    href={n.href}
                    className={[
                      "block rounded-full px-4 py-2 text-base transition hover:bg-white/10 whitespace-nowrap",
                      on ? "text-primary bg-white/10" : "text-white/90",
                    ].join(" ")}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger (mob) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="sm:hidden grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5"
            aria-label="Otvori meni"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Mobile overlay meni */}
      <div
        className={[
          "fixed inset-0 z-[60] sm:hidden transition",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!open}
        onClick={close}
      >
        {/* dim + blur pozadina */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* panel */}
        <div
          className={[
            "absolute left-1/2 top-16 w-[min(92vw,26rem)] -translate-x-1/2",
            "rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl",
            "p-2 shadow-xl transition-transform duration-200",
            open ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-white/70 text-sm">Navigacija</span>
            <button
              type="button"
              onClick={close}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5"
              aria-label="Zatvori meni"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="px-1 py-2">
            {NAV.map((n) => {
              const on = active === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={close}
                    className={[
                      "block w-full rounded-xl px-4 py-3 text-lg",
                      "transition hover:bg-white/10 active:opacity-80",
                      on ? "text-primary bg-white/10" : "text-white",
                    ].join(" ")}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
