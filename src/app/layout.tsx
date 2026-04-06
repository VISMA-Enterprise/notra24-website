import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notra 24 — 24/7 Notdienst-Leitstelle für Senioren",
  description: "Professionelle 24/7 Notdienst-Leitstelle für ältere Menschen. SOS-Knopf, Sturzerkennung, sofortige Hilfe. Jetzt Franchise-Partner werden.",
  openGraph: {
    title: "Notra 24 — 24/7 Notdienst für Senioren",
    description: "Professionelle Notdienst-Leitstelle. SOS-Knopf, Sturzerkennung, sofortige Hilfe.",
    url: "https://notra24.com",
    siteName: "Notra 24",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
