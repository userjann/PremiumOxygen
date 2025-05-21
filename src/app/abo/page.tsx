"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface AirOption {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
}

export default function Abo() {
  const [airOptions, setAirOptions] = useState<AirOption[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/air-options") // statt /api/airOptions
      .then((res) => res.json())
      .then((data) => setAirOptions(data));
  }, []);
  

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto">
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
