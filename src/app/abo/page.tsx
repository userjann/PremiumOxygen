import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"; // Importiere das Pfeil-Icon
import Link from "next/link";

const airOptions = [
  {
    name: "Alpen Minimal",
    description: "Frische Bergluft mit einem Hauch Edelweiss.",
    price: "CHF 19.99.- / Monat",
    features: ["1 Atemzug täglich", "100% pure Luft", "E-Mail-Support"],
    popular: false,
  },
  {
    name: "Urban Soul",
    description: "Hauch von Beton, WLAN und Hoffnung.",
    price: "CHF 14.99.- / Monat",
    features: ["5 Atemzüge täglich", "100% pure Luft", "Telefon-Support", "Zugang zu exklusiven Luftsorten"],
    popular: true,
  },
  {
    name: "Waldgeflüster 2.0",
    description: "Mit Tannenbaum-Blockchain-Energie.",
    price: "CHF 24.99.- / Monat",
    features: ["Unlimited Atemzüge", "100% pure Luft", "Premium-Support", "Zugang zu allen Luftsorten"],
    popular: false,
  },
];

export default function Abo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Zurück-Pfeil oben links */}
        <Link href="/" className="absolute top-4 left-4 text-gray-800">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Premium Luftsorten & Abo-Optionen</h1>
        <p className="text-lg text-gray-700 mb-12">
          Entdecke unsere exklusiven Luftsorten und wähle das passende Abo für dich.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {airOptions.map((air, index) => (
            <div
              key={index}
              className={`bg-white shadow-xl rounded-2xl p-6 transform transition-transform ${air.popular ? 'scale-105 border-4 border-blue-500' : ''}`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{air.name}</h3>
              <p className="text-gray-600 mb-4">{air.description}</p>
              <p className="text-gray-900 font-bold text-lg mb-6">{air.price}</p>
              <ul className="text-left text-gray-700 mb-6">
                {air.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">✔️ {feature}</li>
                ))}
              </ul>
              <Link href="/abo">
                <Button size="lg" className="w-full">
                  Jetzt abonnieren
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
