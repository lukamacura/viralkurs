// src/components/ui/Footer.tsx
"use client";

import Link from "next/link";
import {
  ArrowUp,
  Instagram,
  Youtube,
  Twitter,
  Mail,
} from "lucide-react";

type Social = { label: string; href: string; icon: React.ReactNode };

const socials: Social[] = [
  { label: "Instagram", href: "https://instagram.com/", icon: <Instagram className="h-5 w-5" /> },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/10">
      {/* gornja zona */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              {/* Ako imaš /logo.svg, koristi se; u suprotnom ostaje tekst */}
              <img
                src="/logo.svg"
                alt="ViralKurs logo"
                className="h-8 w-auto hidden sm:block"
                onError={(e) => ((e.currentTarget.style.display = "none"))}
              />
              <span className="font-stencil text-2xl">Viral Zajednica</span>
            </div>
            <p className="mt-3 text-muted max-w-prose">
              Program i zajednica za kreiranje viralnog sadržaja koji donosi
              klijente i stabilan prihod.
            </p>

            {/* Socials */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2
                             hover:bg-white/8 transition"
                >
                  {s.icon}
                  <span className="text-sm">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigacija */}
          <nav aria-label="Brzi linkovi" className="text-sm">
            <h3 className="font-semibold mb-3">Navigacija</h3>
            <ul className="space-y-2 text-muted">
              <li><Link href="#pocetna"  className="hover:text-white transition">Početna</Link></li>
              <li><Link href="#rezultati" className="hover:text-white transition">Rezultati</Link></li>
              <li><Link href="#benefiti"  className="hover:text-white transition">Šta dobijam</Link></li>
              <li><Link href="#cena"      className="hover:text-white transition">Cena</Link></li>
              <li><Link href="#faq"       className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </nav>

          {/* Kontakt / CTA */}
          <div className="text-sm">
            <h3 className="font-semibold mb-3">Kontakt</h3>
            <ul className="space-y-2 text-muted">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a className="hover:text-white transition" href="mailto:info@viralkurs.com">
                  info@viralkurs.com
                </a>
              </li>
            </ul>

            <Link
              href="#cena"
              className="mt-4 inline-block w-full rounded-2xl bg-primary text-bg text-center
                         font-bold text-lg py-3 hover:opacity-90 transition"
            >
              💸 Želim da zarađujem
            </Link>
          </div>
        </div>
      </div>

      {/* donja linija */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {year} Viral Programi. Sva prava zadržana.
          </p>

          <div className="flex items-center gap-4 text-xs text-muted">
            <Link href="/uslovi"   className="hover:text-white transition">Uslovi korišćenja</Link>
            <span className="opacity-30">•</span>
            <Link href="/privatnost" className="hover:text-white transition">Politika privatnosti</Link>

            {/* back to top */}
            <Link
              href="#pocetna"
              aria-label="Nazad na vrh"
              className="ml-2 grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 transition"
            >
              <ArrowUp className="h-4 w-4" /> 
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
