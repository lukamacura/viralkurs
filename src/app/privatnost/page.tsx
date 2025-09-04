// src/app/privatnost/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti | Viral Kurs",
  description:
    "Politika privatnosti platforme Viral Kurs – koje podatke prikupljamo, zašto, koliko dugo ih čuvamo i koja su vaša prava.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-bg text-text">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 lg:py-20">
        {/* Heading */}
        <h1 className="font-stencil text-4xl sm:text-5xl leading-tight">
          Politika privatnosti
        </h1>
        <p className="mt-3 text-muted">
          Ažurirano: 3. septembar 2025 • Važi za sajt/program{" "}
          <strong>Viral Programi</strong>.
        </p>

        {/* Info box */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <p className="text-sm text-muted">
            <strong>Napomena:</strong> Zameni placeholdere stvarnim podacima pre
            objave i po potrebi konsultuj pravnika.
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted space-y-1">
            <li>
              Viral Programi
            </li>

            <li>
              Kontakt e-pošta:{" "}
              <a className="underline hover:opacity-80" href="mailto:filipruvceski@gmail.com">
                filipruvceski@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert mt-10 prose-headings:font-stencil prose-h2:text-2xl prose-p:leading-relaxed prose-li:leading-relaxed">
          <h2>1) Koje podatke prikupljamo</h2>
          <ul>
            <li>
              <strong>Kontakt podaci</strong> – ime, e-pošta, broj telefona (ako
              ga ostaviš), nalozi na platformama zajednice.
            </li>
            <li>
              <strong>Podaci o kupovini</strong> – kupljeni proizvodi,
              transakcioni ID i status plaćanja (sam broj kartice ne čuvamo –
              obrađuje ga procesor plaćanja).
            </li>
            <li>
              <strong>Tehnički podaci</strong> – IP adresa, tip uređaja,
              pregledač, kolačići i slične tehnologije.
            </li>
            <li>
              <strong>Sadržaj zajednice</strong> – poruke, komentari, fajlovi
              koje sam/a postaviš u okviru programa.
            </li>
          </ul>

          <h2>2) Svrhe obrade</h2>
          <ul>
            <li>isporuka kupljenih digitalnih proizvoda i pristupa;</li>
            <li>kreiranje i administracija korisničkog naloga;</li>
            <li>komunikacija, podrška i naplata;</li>
            <li>poboljšanje sadržaja i bezbednosti sajta;</li>
            <li>marketing uz tvoju saglasnost (npr. newsletter);</li>
            <li>ispunjenje zakonskih obaveza (računovodstvo i sl.).</li>
          </ul>

          <h2>3) Pravni osnov</h2>
          <p>
            Obradu vršimo na osnovu <strong>izvršenja ugovora</strong> (kada
            kupiš kurs ili uđeš u program), <strong>legitimnog interesa</strong>{" "}
            (bezbednost, unapređenja), <strong>pravnih obaveza</strong> i{" "}
            <strong>saglasnosti</strong> (npr. newsletter, kolačići  marketinga).
          </p>

          <h2>4) Kolačići i analitika</h2>
          <p>
            Koristimo neophodne kolačiće za funkcionisanje sajta i opcionu
            analitiku/marketing kolačiće uz saglasnost. Podešavanja možeš
            menjati u baneru za kolačiće ili u podešavanjima pregledača.
          </p>

          <h2>5) Obrađivači (treće strane)</h2>
          <p>
            U radu koristimo proverene partnere kao obrađivače podataka; primeri:
          </p>
          <ul>
            <li>
              <strong>Procesori plaćanja</strong> – npr. Stripe / PayPal /
              Skool; čuvaju i obrađuju podatke o plaćanju.
            </li>
            <li>
              <strong>Analitika</strong> – npr. Google Analytics / Plausible.
            </li>
            <li>
              <strong>Komunikacija i e-mail</strong> – npr. SendGrid / MailerLite.
            </li>
            <li>
              <strong>Hosting i CDN</strong> – npr. Vercel / Cloudflare.
            </li>
          </ul>
          <p>
            Sa svakim partnerom imamo odgovarajuće ugovore o obradi podataka
            (DPA). Njihove politike privatnosti primenjuju se na njihove
            servise.
          </p>

          <h2>6) Prenos u inostranstvo</h2>
          <p>
            Podaci se mogu prenositi izvan tvoje zemlje (npr. u EU/USA) ako to
            zahtevaju naši pružaoci usluga. Obavezujemo se da takav prenos
            obezbedimo odgovarajućim merama (SCC, DPA i sl.).
          </p>

          <h2>7) Period čuvanja</h2>
          <ul>
            <li>
              Podaci o kupovini i fakturisanje – prema zakonskim rokovima
              (obično 5–10 godina).
            </li>
            <li>
              Podaci naloga i zajednice – dok postoji nalog ili do brisanja.
            </li>
            <li>Marketing podaci – do povlačenja saglasnosti.</li>
            <li>
              Tehnički logovi – u pravilu kraći rokovi potrebni za bezbednost.
            </li>
          </ul>

          <h2>8) Tvoja prava</h2>
          <ul>
            <li>pravo na pristup, ispravku i brisanje podataka;</li>
            <li>pravo na ograničenje i prenosivost;</li>
            <li>prigovor na obradu zasnovanu na legitimnom interesu;</li>
            <li>povučeš saglasnost u bilo kom trenutku;</li>
            <li>
              podneseš pritužbu nadležnom nadzornom organu (po mestu boravka).
            </li>
          </ul>
          <p>
            Zahtev pošalji na{" "}
            <a className="underline hover:opacity-80" href="mailto:filipruvceski@gmail.com">
              filipruvceski@gmail.com
            </a>
            . Odgovaramo u razumnom roku, u skladu sa važećim propisima (npr.
            GDPR ako se primenjuje).
          </p>

          <h2>9) Bezbednost</h2>
          <p>
            Primenićemo tehničke i organizacione mere (HTTPS, kontrola pristupa,
            enkripcija gde je primereno). Ipak, ni jedan sistem nije 100% siguran;
            podatke deliš na sopstveni rizik.
          </p>

          <h2>10) Maloletnici</h2>
          <p>
            Usluga nije namenjena licima mlađim od 16 godina. Ako veruješ da je
            dete dostavilo podatke, kontaktiraj nas radi brisanja.
          </p>

          <h2>11) Linkovi ka trećim sajtovima</h2>
          <p>
            Na sajtu se mogu nalaziti linkovi ka tuđim resursima. Ne snosimo
            odgovornost za njihove prakse privatnosti niti sadržaj.
          </p>

          <h2>12) Izmene ove politike</h2>
          <p>
            Politiku povremeno ažuriramo. Nova verzija važi od objave na sajtu.
            Preporučujemo da povremeno proveriš ovu stranicu.
          </p>

          <h2>13) Kontakt</h2>
          <p>
            Pitanja o privatnosti:{" "}
            <a className="underline hover:opacity-80" href="mailto:filipruvceski@gmail.com">
              filipruvceski@gmail.com
            </a>
            .
          </p>

          <hr />

          <p className="text-sm text-muted">
            Pogledaj i{" "}
            <Link href="/uslovi" className="underline hover:opacity-80">
              Uslove korišćenja
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
