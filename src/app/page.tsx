"use client";
import { useState } from "react";

const EKG_PATH = "M0,150 L100,150 L140,150 L180,148 L200,152 L220,145 L240,155 L260,120 L280,180 L300,60 L320,240 L340,100 L360,200 L380,140 L400,150 L440,148 L460,152 L480,150 L600,150 L640,148 L660,152 L680,145 L700,155 L720,120 L740,180 L760,60 L780,240 L800,100 L820,200 L840,140 L860,150 L900,148 L920,152 L940,150 L1060,150 L1100,148 L1120,152 L1140,145 L1160,155 L1180,120 L1200,180 L1220,60 L1240,240 L1260,100 L1280,200 L1300,140 L1320,150 L1360,148 L1380,152 L1400,150 L1626,150";

const HeartIcon = ({ size = 24, color = "#E8793A", fill = "none" }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke={color} strokeWidth="2" fill={fill} />
  </svg>
);

const CheckMark = () => <span style={{ color: "#E8793A", fontWeight: 700, fontSize: 13 }}>✓</span>;

const FAQs = [
  { q: "Muss ich einen Vertrag unterschreiben?", a: "Nein, Notra 24 ist monatlich kündbar, ohne lange Vertragslaufzeiten." },
  { q: "Funktioniert das Armband auch im Bad?", a: "Ja, das Armband ist wasserdicht (IP67) und kann beim Duschen und Baden getragen werden." },
  { q: "Was passiert wenn der Strom ausfällt?", a: "Die Heimzentrale hat einen eingebauten Akku und wechselt automatisch auf 4G-Mobilfunk." },
  { q: "Kann ich das Gerät auch unterwegs nutzen?", a: "Mit dem Safe Life oder Safe Home Plus Paket erhalten Sie ein GPS-Armband mit eigener SIM-Karte, das überall in der Türkei funktioniert." },
  { q: "In welchen Sprachen kann ich mit dem Operator sprechen?", a: "Unsere Operatoren sprechen Deutsch, Türkisch, Englisch und Russisch." },
  { q: "Wie wird das Gerät installiert?", a: "Wir kommen zu Ihnen nach Hause und installieren alles kostenlos. Die Einrichtung dauert ca. 30 Minuten." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, paddingInline: 80, backgroundColor: "#fff", borderBottom: "1px solid #E8E0D8", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <HeartIcon size={28} color="#E8793A" fill="#E8793A" />
          <span style={{ fontSize: 22, fontWeight: 800, color: "#2D3B2D", letterSpacing: -0.5 }}>Notra 24</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Angebot", "So funktioniert's", "Pakete", "Über uns", "Kontakt"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g, "")}`} style={{ color: "#5A6B5A", fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["DE", "TR", "EN", "RU"].map((lang, i) => (
              <span key={lang} style={{ padding: "4px 8px", fontSize: 12, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#fff" : "#8A9B8A", backgroundColor: i === 0 ? "#1A5C8A" : "transparent", borderRadius: 4 }}>{lang}</span>
            ))}
          </div>
          <a href="#kontakt" style={{ backgroundColor: "#1A5C8A", color: "#fff", padding: "12px 24px", borderRadius: 24, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Jetzt beraten lassen</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: 620, position: "relative", paddingInline: 80, overflow: "hidden", background: "linear-gradient(135deg, #FCF5EE 0%, #E8C9A8 40%, #C4956C 100%)" }}>
        {/* EKG Layer 1 */}
        <div className="ekg-pulse" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.1, overflow: "hidden" }}>
          <div className="ekg-animate" style={{ display: "flex", width: "200%" }}>
            <svg width="1626" height="300" viewBox="0 0 1626 300" fill="none" style={{ flexShrink: 0 }}><path d={EKG_PATH} stroke="#E8793A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <svg width="1626" height="300" viewBox="0 0 1626 300" fill="none" style={{ flexShrink: 0 }}><path d={EKG_PATH} stroke="#E8793A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        {/* EKG Layer 2 */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.05, overflow: "hidden" }}>
          <div className="ekg-animate-slow" style={{ display: "flex", width: "200%" }}>
            <svg width="1626" height="300" viewBox="0 0 1626 300" fill="none" style={{ flexShrink: 0 }}><path d={EKG_PATH} stroke="#E8793A" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <svg width="1626" height="300" viewBox="0 0 1626 300" fill="none" style={{ flexShrink: 0 }}><path d={EKG_PATH} stroke="#E8793A" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 640, position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 52, fontWeight: 700, lineHeight: 1.15, color: "#1A5C8A" }}>Immer jemand da. Zu jeder Zeit.</h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4A5568" }}>Notra 24 — Ihr persönlicher Notdienst in Antalya. Rund um die Uhr erreichbar. Mehrsprachig. Mit echten Menschen.</p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#pakete" style={{ backgroundColor: "#1A5C8A", color: "#fff", padding: "16px 32px", borderRadius: 32, fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Unser Angebot entdecken</a>
            <a href="#kontakt" style={{ border: "2px solid #1A5C8A", color: "#1A5C8A", padding: "16px 32px", borderRadius: 32, fontSize: 16, fontWeight: 700, textDecoration: "none", background: "transparent" }}>Kostenlos beraten lassen</a>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["24/7 erreichbar", "Mehrsprachig", "Sofort-Reaktion", "Zertifizierte Hardware"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <CheckMark />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#4A5568" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "linear-gradient(145deg, #E0C9A8 0%, #B5845C 100%)", borderRadius: 24, width: 480, height: 400, flexShrink: 0, marginLeft: 60, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <HeartIcon size={48} color="rgba(255,255,255,0.5)" />
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Foto: Senior mit Armband auf sonniger Terrasse</span>
          </div>
        </div>
      </section>

      {/* Warum Notra 24 */}
      <section id="angebot" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 120px", gap: 48, backgroundColor: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>Warum Notra 24?</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A" }}>Weil Ihre Sicherheit keine Wartezeit kennt.</p>
        </div>
        <div style={{ display: "flex", gap: 32, width: "100%" }}>
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#E8793A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, bg: "#E8793A1A", title: "Sofortige Reaktion", desc: "Wenn Sie den Knopf drücken oder stürzen, sind wir innerhalb von Sekunden bei Ihnen — am Telefon und wenn nötig auch persönlich." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#E8793A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, bg: "#E8793A1A", title: "Wir sprechen Ihre Sprache", desc: "Deutsch, Türkisch, Englisch, Russisch — unsere Operatoren verstehen Sie und koordinieren schnell die richtige Hilfe." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#E8793A" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="#E8793A" strokeWidth="2"/></svg>, bg: "#E8793A1A", title: "Zuhause und unterwegs", desc: "Ob auf dem Balkon, im Park oder beim Einkaufen — unser GPS-System weiß immer wo Sie sind." },
          ].map(c => (
            <div key={c.title} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "40px 32px", backgroundColor: "#fff", borderRadius: 24, boxShadow: "0 4px 24px rgba(45,59,45,0.05)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: c.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2D3B2D" }}>{c.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B", textAlign: "center" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* So funktioniert Notra 24 */}
      <section id="sofunktionierts" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 120px", gap: 48, backgroundColor: "#FDF8F3" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>So funktioniert Notra 24</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A" }}>Hilfe in 3 einfachen Schritten</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, width: "100%" }}>
          {[
            { num: "1", bg: "#E8793A", title: "Knopf drücken", desc: "Oder Sturz erkannt — das Armband erkennt automatisch wenn Sie fallen." },
            { num: "2", bg: "#1A5C8A", title: "Wir melden uns", desc: "Sofort bei Ihnen — per Freisprechen direkt am Gerät. Ein echter Mensch spricht mit Ihnen." },
            { num: "3", bg: "#E8793A", title: "Hilfe ist da", desc: "Angehörige werden informiert oder 112 wird koordiniert — je nach Situation." },
          ].map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: 32 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 800 }}>{s.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2D3B2D" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B", textAlign: "center" }}>{s.desc}</p>
              </div>
              {i < 2 && (
                <div style={{ paddingTop: 36, flexShrink: 0 }}>
                  <svg width="96" height="40" viewBox="0 0 96 40"><path d="M0,20 Q24,0 48,20 Q72,40 96,20" stroke="#E8793A" strokeWidth="2" fill="none" opacity="0.3"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#B0B8B0", textAlign: "center" }}>Bei einem Sturz erkennt das Armband diesen automatisch — auch wenn Sie den Knopf nicht mehr drücken können.</p>
      </section>

      {/* Pakete */}
      <section id="pakete" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 80px", gap: 48, backgroundColor: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>Finden Sie das passende Paket</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A", fontStyle: "italic" }}>Drei Schutzstufen — für jeden Lebensstil</p>
        </div>
        <div style={{ display: "flex", gap: 24, width: "100%", maxWidth: 1400 }}>
          {[
            { name: "Safe Home", sub: "Sicherheit zuhause", desc: "Für Menschen, die überwiegend zuhause sind und auf Knopfdruck mit unserer Leitstelle verbunden sein möchten.", features: ["Heimzentrale (4G + Stromausfall-Schutz)", "Funk-Armband (wasserdicht)", "24/7 Leitstellen-Verbindung", "Angehörigen-Benachrichtigung", "Installation vor Ort"], cta: "Mehr erfahren", highlighted: false },
            { name: "Safe Life", sub: "Schutz zuhause und unterwegs", desc: "Unser meistgewähltes Paket. Voller Schutz — ob beim Einkaufen, im Park oder zuhause.", features: ["Alles aus Safe Home", "GPS-Armband mit eigener SIM", "Automatische Sturzerkennung", "GPS-Ortung bei Notfall", "Funktioniert überall in der Türkei"], cta: "Jetzt beraten lassen", highlighted: true },
            { name: "Safe Home Plus", sub: "Rundum-Schutz für zuhause", desc: "Maximaler Schutz. Zusätzlich überwachen Sensoren Ihre Wohnung auf Rauch, CO und unerwartete Türöffnungen.", features: ["Alles aus Safe Life", "Funk-Rauchmelder", "Funk-CO-Melder", "Türkontakt (Wohnungstür)", "Für Menschen mit höherem Risiko"], cta: "Mehr erfahren", highlighted: false },
          ].map(pkg => (
            <div key={pkg.name} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, padding: 36, backgroundColor: "#fff", borderRadius: 24, border: pkg.highlighted ? "2px solid #E8793A" : "none", boxShadow: pkg.highlighted ? "0 8px 32px rgba(232,121,58,0.12)" : "0 4px 24px rgba(45,59,45,0.05)", position: "relative" }}>
              {pkg.highlighted && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", backgroundColor: "#E8793A", color: "#fff", padding: "6px 20px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>Beliebteste Wahl</div>}
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "#2D3B2D" }}>{pkg.name}</h3>
                <p style={{ fontSize: 13, color: "#8A9B8A", marginTop: 4 }}>{pkg.sub}</p>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{pkg.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {pkg.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckMark />
                    <span style={{ fontSize: 14, color: "#4A5B4A" }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#kontakt" style={{ display: "flex", justifyContent: "center", padding: 14, borderRadius: 28, fontSize: 14, fontWeight: pkg.highlighted ? 700 : 600, textDecoration: "none", backgroundColor: pkg.highlighted ? "#E8793A" : "transparent", color: pkg.highlighted ? "#fff" : "#E8793A", border: pkg.highlighted ? "none" : "2px solid #E8793A", marginTop: "auto" }}>{pkg.cta}</a>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#B0B8B0" }}>Alle Pakete beinhalten kostenlose Installation, persönliche Einrichtung und sind monatlich kündbar.</p>
      </section>

      {/* Testimonials */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 80px", gap: 48, backgroundColor: "#FDF8F3" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>Was unsere Kunden sagen</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A" }}>Menschen, die sich auf uns verlassen</p>
        </div>
        <div style={{ display: "flex", gap: 24, width: "100%", maxWidth: 1400 }}>
          {[
            { initials: "HM", name: "Hans M., 78 Jahre", loc: "Konyaaltı, Antalya", quote: "\"Seit meiner Frau nicht mehr da ist, lebe ich allein. Mit Notra 24 fühle ich mich nicht mehr allein — die sind wirklich immer da, auch nachts um 3 Uhr.\"", bg: "#1A5C8A" },
            { initials: "AY", name: "Ayşe Y., 71 Jahre", loc: "Lara, Antalya", quote: "\"Benim kızım İstanbul'da yaşıyor. Notra 24 sayesinde kızım her zaman güvende olduğumu biliyor. Çok teşekkürler!\"", bg: "#E8793A" },
            { initials: "MK", name: "Margaret K., 69 Jahre", loc: "Belek, Antalya", quote: "\"I had a fall last winter and couldn't reach my phone. The bracelet detected it automatically and Notra called me within seconds. Absolutely life-saving.\"", bg: "#1A5C8A" },
          ].map(t => (
            <div key={t.name} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, padding: 32, backgroundColor: "#fff", borderRadius: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 700 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#2D3B2D" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#8A9B8A" }}>{t.loc}</div>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{t.quote}</p>
              <div style={{ color: "#E8793A", fontSize: 14 }}>★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Über uns */}
      <section id="uberuns" style={{ display: "flex", alignItems: "center", padding: "80px 120px", gap: 60, backgroundColor: "#fff" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D" }}>Echte Menschen. Echte Fürsorge.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B" }}>Notra 24 wurde gegründet, weil wir gesehen haben, wie viele ältere Menschen in Antalya allein leben — ohne Sicherheitsnetz. Wir haben eine professionelle Leitstelle aufgebaut, die nach dem Vorbild des Deutschen Roten Kreuzes arbeitet.</p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B" }}>Unsere mehrsprachigen Operatoren sind rund um die Uhr für Sie da. Keine Warteschleife, kein Anrufbeantworter — ein echter Mensch hebt ab.</p>
          <div style={{ display: "flex", paddingTop: 16 }}>
            {[
              { val: "24/7", label: "Erreichbar", color: "#1A5C8A" },
              { val: "4", label: "Sprachen", color: "#1A5C8A" },
              { val: "< 10s", label: "Reaktionszeit", color: "#E8793A" },
              { val: "Antalya", label: "Türkei", color: "#1A5C8A" },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 16, borderRight: i < arr.length - 1 ? "1px solid rgba(45,59,45,0.1)" : "none" }}>
                <span style={{ fontSize: 32, fontWeight: 800, color: s.color }}>{s.val}</span>
                <span style={{ fontSize: 12, color: "#8A9B8A" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 400, height: 320, borderRadius: 24, backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(45,59,45,0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#B0B8B0", fontSize: 13 }}>Foto: Leitstellen-Team</span>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 200px", gap: 40, backgroundColor: "#FDF8F3" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D" }}>Häufige Fragen</h2>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: 800 }}>
          {FAQs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i < FAQs.length - 1 ? "1px solid rgba(45,59,45,0.1)" : "none" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "20px 0", border: "none", background: "none", cursor: "pointer" }}>
                <span style={{ fontSize: 16, color: "#4A5B4A", textAlign: "left" }}>{faq.q}</span>
                <span style={{ color: "#E8793A", fontSize: 20, flexShrink: 0, marginLeft: 16 }}>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 20, fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" style={{ display: "flex", padding: "80px 120px", gap: 60, backgroundColor: "#fff" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 36, fontWeight: 700, color: "#2D3B2D" }}>Wir freuen uns auf Ihren Anruf.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B" }}>Kein Druck, kein Verkaufsgespräch — wir beraten Sie ehrlich, welches Paket für Sie passt.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#E8793A", fontWeight: 600, fontSize: 14 }}>+90 XXX XXX XX XX</span>
              <span style={{ color: "#8A9B8A", fontSize: 12 }}>Mo-So, 24 Stunden</span>
            </div>
            <span style={{ color: "#4A5B4A", fontSize: 14 }}>info@notra24.com</span>
            <span style={{ color: "#4A5B4A", fontSize: 14 }}>Antalya, Türkei</span>
          </div>
        </div>
        <div style={{ width: 500, flexShrink: 0, backgroundColor: "#FDF8F3", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "Name", placeholder: "Ihr vollständiger Name", type: "text" },
            { label: "Telefonnummer", placeholder: "+90 ...", type: "tel" },
          ].map(f => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 13, color: "#6B7B6B" }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{ backgroundColor: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none" }} />
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "#6B7B6B" }}>Sprache</label>
            <select style={{ backgroundColor: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none" }}>
              <option>Deutsch</option><option>Türkçe</option><option>English</option><option>Русский</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "#6B7B6B" }}>Nachricht (optional)</label>
            <textarea rows={3} placeholder="Ihre Nachricht..." style={{ backgroundColor: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", resize: "none" }} />
          </div>
          <button style={{ backgroundColor: "#E8793A", color: "#fff", padding: 16, borderRadius: 28, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer" }}>Rückruf anfragen</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 120px", backgroundColor: "#1A3A52" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <HeartIcon size={20} color="#E8793A" fill="#E8793A" />
            <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Notra 24</span>
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Ihr 24/7 Notdienst in Antalya</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Pakete", "Über uns", "Kontakt", "Datenschutz"].map(l => (
            <a key={l} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2025 Notra 24. Alle Rechte vorbehalten.</span>
      </footer>
    </div>
  );
}
