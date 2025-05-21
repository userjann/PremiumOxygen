🧱 Architekturbeschreibung

Die Anwendung folgt dem Microservices-Architekturmuster und besteht aus mehreren voneinander getrennten Diensten, die über ein zentrales API-Gateway angebunden sind. Die Komponenten sind wie folgt aufgebaut:

    Frontend (Next.js):
    Die Benutzeroberfläche der Anwendung, über die Kundinnen und Kunden auf Produkte, den Warenkorb und Bestellungen zugreifen können. Kommuniziert ausschließlich mit dem API-Gateway.

    API-Gateway:
    Vermittelt alle Anfragen vom Frontend zu den dahinterliegenden Microservices. Es dient als zentraler Zugangspunkt und kapselt die interne Service-Struktur vom Client ab.

    Air Options Service:
    Liefert verfügbare Luft-Abonnements (Produkte) mit Preis, Beschreibung und Features. Stellt diese Daten über einen REST-Endpunkt bereit.

    Order Service (geplant):
    Verarbeitet Bestellungen, die Kundinnen und Kunden über das Frontend auslösen. Hält Bestellstatus und Details.

    Customer Service (geplant):
    Verwaltet Kundeninformationen wie Name, E-Mail, Adresse. Dient zur Authentifizierung und für das Profilmanagement.

🔁 Angedachter Workflow

    Nutzer öffnet das Frontend und sieht verfügbare Luftangebote, die vom Air Options Service über das API-Gateway geladen werden.

    Nach Auswahl eines Angebots, wird eine Bestellung über das Order Service abgewickelt.

    Optional meldet sich der Nutzer im Customer Service an oder erstellt ein Kundenkonto.

    Alle Interaktionen laufen technisch ausschließlich über das API-Gateway, wodurch die einzelnen Microservices voneinander entkoppelt bleiben.

---
#Skizze
[https://github.com/userjann/PremiumOxygen/blob/main/Praktische%20Umsetzungsarbeit.pdf]
