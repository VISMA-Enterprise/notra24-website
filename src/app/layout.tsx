import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notra 24 — 24/7 Notdienst-Leitstelle für Senioren",
  description: "Professionelle 24/7 Notdienst-Leitstelle für ältere Menschen in Antalya. SOS-Knopf, Sturzerkennung, sofortige Hilfe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
