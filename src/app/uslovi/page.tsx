// src/app/uslovi/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uslovi korišćenja | Viral Kurs",
  description:
    "Uslovi korišćenja platforme Viral Kurs – pravila, plaćanja, refund, intelektualna svojina i odgovornosti.",
};

export default function TermsPage() {
  return (
    <main className="bg-bg text-text">
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 lg:py-20">
        {/* Heading */}
        <h1 className="font-stencil text-4xl sm:text-5xl leading-tight">
          Uslovi korišćenja
        </h1>
        <p className="mt-3 text-muted">
          Ažurirano: 3. septembar 2025 • Važeće za sajt/program{" "}
          <strong>Viral Kurs</strong>.
        </p>

        {/* Legal notice box */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <p className="text-sm text-muted">
            <strong>Napomena:</strong> Zameni placeholdere svojim podacima pre
            objave. Preporučujemo pravnu proveru.
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted space-y-1">
            <li>
              Viral Programi
            </li>
            <li>
              Kontakt e-pošta:{" "}
              <a className="underline hover:opacity-80" href="mailto:info@viralkurs.com">
                info@viralkurs.com
              </a>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-invert mt-10 prose-headings:font-stencil prose-h2:text-2xl prose-p:leading-relaxed prose-li:leading-relaxed">
          <h2>1) Prihvatanje uslova</h2>
          <p>
            Korišćenjem sajta, kupovinom kursa ili učlanjenjem u program
            (“Usluga”) potvrđujete da ste pročitali, razumeli i prihvatili ove
            Uslove. Ako se ne slažete – nemojte koristiti Uslugu.
          </p>

          <h2>2) Promene uslova</h2>
          <p>
            Uslove možemo povremeno izmeniti. Nova verzija važi od objave na
            sajtu. Nastavkom korišćenja prihvatate izmene.
          </p>

          <h2>3) Opis usluge</h2>
          <ul>
            <li>
              <strong>Viral Launch</strong> – digitalni kurs (doživotni pristup
              materijalima).
            </li>
            <li>
              <strong>Viral Expert</strong> – mentorski/članski program
              (mesečna članarina, live pozivi, zajednica, dodatni materijali).
            </li>
          </ul>
          <p>
            Sadržaj je edukativan/informativan; ne garantujemo određeni
            finansijski ishod. Rezultati zavise od vaše primene.
          </p>

          <h2>4) Nalozi i pristup</h2>
          <ul>
            <li>
              Pristup je ličan i neprenosiv. Zabranjeno je deljenje naloga,
              redistribucija ili preprodaja materijala.
            </li>
            <li>
              Zadržavamo pravo ograničenja/ukidanja pristupa u slučaju kršenja
              ovih Uslova.
            </li>
          </ul>

          <h2>5) Plaćanja, pretplate i otkazivanje</h2>
          <ul>
            <li>
              Cene su prikazane na stranici kupovine i mogu se menjati bez
              najave.
            </li>
            <li>
              <strong>Viral Expert</strong> je mesečna pretplata koja se{" "}
              <strong>automatski obnavlja</strong> dok je ne otkažete.
            </li>
            <li>
              Naplatu može vršiti treća strana (npr. Stripe/Skool/PayPal) i za
              to važe njihovi uslovi.
            </li>
            <li>
              Otkazivanje stupa na snagu na kraju plaćenog perioda.
            </li>
          </ul>

          <h2>6) Refund i garancije</h2>
          <p>
            Posebne garancije (npr. “200% garancija”) važe samo pod uslovima
            navedenim na prodajnoj stranici i dokazom da je odgledano minimum 90% kursa i primenjeno znanje sa njega. Ako drugačije
            nije propisano zakonom, digitalni proizvodi nakon isporuke nisu
            predmet povraćaja.
          </p>

          <h2>7) Intelektualna svojina</h2>
          <p>
            Svi materijali (video, tekst, grafika, brend, dizajn, kod) su naša
            ili licencirana svojina. Dopušteno je korišćenje isključivo za lične
            potrebe u okviru Usluge. Zabranjena je reprodukcija, javno
            prikazivanje, deljenje ili komercijalna upotreba bez pismene
            dozvole.
          </p>

          <h2>8) Sadržaj korisnika</h2>
          <p>
            Ako objavite sadržaj u zajednici (poruke, snimke, komentare), ostajete
            vlasnik/ca, ali nam dajete neekskluzivnu licencu da ga prikažemo u
            okviru Usluge i za promociju — samo uz vašu saglasnost ako je sadržaj
            povezan sa identitetom.
          </p>

          <h2>9) Pravila ponašanja</h2>
          <p>
            Zabranjeni su govor mržnje, spam, prevare, kršenje privatnosti,
            deljenje piratskog sadržaja i uznemiravanje. Zbog kršenja možemo
            privremeno ili trajno ograničiti pristup.
          </p>

          <h2>10) Treće strane i linkovi</h2>
          <p>
            Koristimo servise trećih strana (npr. naplata, e-mail, video,
            analitika). Ne odgovaramo za njihov sadržaj i pravila.
          </p>

          <h2>11) Odricanje odgovornosti</h2>
          <p>
            Usluga se pruža “kakva jeste”, bez garancija bilo koje vrste. Ne
            garantujemo rezultate, prihode ili angažmane klijenata. Sve primenjujete
            na sopstvenu odgovornost.
          </p>

          <h2>12) Ograničenje odgovornosti</h2>
          <p>
            U granicama zakona, naša ukupna odgovornost prema vama ograničena je
            na iznos koji ste platili u poslednjih 12 meseci. Ne odgovaramo za
            indirektnu/posrednu štetu, izgubljenu dobit i sl.
          </p>

          <h2>13) Naknada štete</h2>
          <p>
            Slažete se da ćete nas obeštetiti za sve zahteve trećih lica proizašle
            iz vašeg kršenja ovih Uslova ili nezakonite upotrebe Usluge.
          </p>

          <h2>14) Pravo i rešavanje sporova</h2>
          <p>
            Primjenjuje se pravo <strong>Republike Srbije</strong> (ili unesite
            drugu nadležnost). Za sporove je nadležan stvarno nadležni sud u{" "}
            <em>[unesi grad]</em>. Pre sudskog postupka pokušaćemo mirno
            rešavanje.
          </p>

          <h2>15) Kontakt</h2>
          <p>
            Pitanja u vezi sa ovim Uslovima:{" "}
            <a className="underline hover:opacity-80" href="mailto:info@viralkurs.com">
              info@viralkurs.com
            </a>
            .
          </p>

          <hr />

          <p className="text-sm text-muted">
            Pogledaj i{" "}
            <Link href="/privatnost" className="underline hover:opacity-80">
              Politiku privatnosti
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
