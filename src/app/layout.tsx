import "./globals.css";
import { supreme, bespokeStencil } from "@/lib/fonts";
import Preloader from "@/components/ui/Preloader";

export const metadata = {
  title: "ViralKurs",
  description: "Kurs za kreiranje viralnog sadržaja",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      {/* Dodamo CSS varijable od next/font na <body> pa naše util klase rade */}
      <body className={`${supreme.variable} ${bespokeStencil.variable} font-supreme bg-bg text-text min-h-screen`}>
      <Preloader
  minDurationMs={3400}        // duže na ekranu
  sloganIntervalMs={1200}     // smena slogana svake 1.2s
  sloganTransitionMs={180}    // brza animacija prelaza
  slogans={[
    "Hook koji zaustavlja scroll.",
    "Snimaj pametno, ne skupo.",
    "Sadržaj koji prodaje.",
  ]}
/>


        {children}
      </body>
    </html>
  );
}
