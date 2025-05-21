import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Premium Oxygen
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Atme besser. Zahle mehr. Wähle aus handverlesenen Luftsorten für den digitalen Geniesser.
        </p>
        <Link href="/abo">
          <Button size="lg" className="text-lg px-6 py-4">
            Jetzt Premium atmen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {[ 
          {
            name: "Alpen Minimal",
            desc: "Frische Bergluft mit einem Hauch Edelweiss",
          },
          {
            name: "Urban Soul",
            desc: "Hauch von Beton, WLAN und Hoffnung",
          },
          { 
            name: "Waldgeflüster 2.0",
            desc: "Mit Tannenbaum-Blockchain-Energie",
          },
        ].map((air, i) => (
          <div
            key={i}
            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {air.name}
            </h2>
            <p className="text-gray-600">{air.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ Link */}
      <div className="mt-12">
        <Link href="/faq">
          <Button size="lg" className="text-lg px-6 py-4">
            Häufig gestellte Fragen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
