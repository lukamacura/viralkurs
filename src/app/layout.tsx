import "./globals.css";
import { supreme, bespokeStencil } from "@/lib/fonts";

export const metadata = {
  title: "ViralKurs",
  description: "Kurs za kreiranje viralnog sadržaja",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      {/* Dodamo CSS varijable od next/font na <body> pa naše util klase rade */}
      <body className={`${supreme.variable} ${bespokeStencil.variable} font-supreme bg-bg text-text min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
