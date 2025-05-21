// index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors()); // erlaubt Requests von extern (z. B. dein Next.js-Frontend)

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

app.get("/air-options", (req, res) => {
  res.json(airOptions);
});

app.listen(PORT, () => {
  console.log(`🚀 Microservice läuft auf http://localhost:${PORT}/air-options`);
});
