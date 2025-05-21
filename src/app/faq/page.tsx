"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react"; // Importiere das Pfeil-Icon
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Was ist Premium Oxygen?",
    answer:
      "Premium Oxygen ist ein Abo-Service, der frische und reine Luft direkt zu dir nach Hause liefert. Wähle deine bevorzugte Luftsorte und geniesse jeden Tag frische Premium-Luft.",
  },
  {
    question: "Wie funktioniert das Abo?",
    answer:
      "Einfach ein Abo-Modell wählen, das deinen Bedürfnissen entspricht, und du erhältst regelmässig deine bevorzugte Luft, die du atmen kannst, wann immer du willst. Du kannst jederzeit dein Abo anpassen oder kündigen.",
  },
  {
    question: "Wie kann ich mein Abo ändern oder kündigen?",
    answer:
      "Um dein Abo zu ändern oder zu kündigen, kannst du dich einfach in deinem Konto anmelden und die Änderungen im Bereich 'Mein Abo' vornehmen. Bei weiteren Fragen hilft unser Support-Team gerne weiter.",
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer:
      "Wir akzeptieren gängige Zahlungsmethoden wie Kreditkarte, Twint,  PayPal und Banküberweisung. Die Zahlungsinformationen werden sicher verarbeitet.",
  },
  {
    question: "Gibt es eine Garantie für die Luftqualität?",
    answer:
      "Ja! Unsere Luft wird regelmässig getestet und entspricht den höchsten Standards der Luftqualität. Wir garantieren, dass du nur die frischeste und reinste Luft erhältst.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto relative"> {/* Relative Positionierung hinzugefügt */}
        
        {/* Zurück-Pfeil oben links */}
        <Link href="/" className="absolute top-4 left-4 text-gray-800">
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Häufig gestellte Fragen (FAQ)</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-blue-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-xl text-gray-500">{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Button size="lg" className="mt-8">
          Noch Fragen? Kontaktieren Sie uns!
        </Button>
      </div>
    </main>
  );
}
