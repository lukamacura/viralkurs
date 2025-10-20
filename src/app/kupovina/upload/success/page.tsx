// app/success/page.tsx
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md text-center px-6">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-500" />
        <h1 className="text-2xl font-bold mb-2">Uplatnica uspešno poslata!</h1>
        <p className="text-neutral-300 mb-6">
          Tvoja potvrda je primljena i biće uskoro proverena.  
          Dobićeš obaveštenje putem emaila čim validacija bude završena.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Nazad na početnu
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
