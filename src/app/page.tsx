"use client";
import { useState } from "react";

/* ── Realistic EKG path — flat baseline with sharp QRS spikes repeating 3x ── */
const EKG_SEGMENT = "l60,0 l8,-2 l4,2 l4,-8 l4,12 l6,-50 l6,95 l6,-105 l6,100 l6,-45 l4,8 l4,-2 l8,0 l60,0";
const EKG_PATH = `M0,160 l200,0 ${EKG_SEGMENT} l200,0 ${EKG_SEGMENT} l200,0 ${EKG_SEGMENT} l200,0`;

const HeartSvg = ({ size = 24, color = "#E8793A", fill = "none" }: { size?: number; color?: string; fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke={color} strokeWidth="2" fill={fill}/></svg>
);

const Check = () => <span style={{ color: "#1A5C8A", fontWeight: 700, fontSize: 13 }}>✓</span>;

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

      {/* ── Navigation ── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, paddingInline: 80, backgroundColor: "#fff", borderBottom: "1px solid #E8E0D8", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <HeartSvg size={28} color="#E8793A" fill="#E8793A" />
          <span style={{ fontSize: 22, fontWeight: 800, color: "#2D3B2D", letterSpacing: -0.5 }}>Notra 24</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Angebot","So funktioniert's","Pakete","Über uns","Kontakt"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g,"")}`} style={{ color: "#5A6B5A", fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginLeft: 16 }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["DE","TR","EN","RU"].map((lang,i) => (
              <span key={lang} style={{ padding: "4px 8px", fontSize: 12, fontWeight: i===0?700:400, color: i===0?"#fff":"#8A9B8A", backgroundColor: i===0?"#1A5C8A":"transparent", borderRadius: 4 }}>{lang}</span>
            ))}
          </div>
          <a href="#kontakt" style={{ backgroundColor: "#1A5C8A", color: "#fff", padding: "12px 24px", borderRadius: 24, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Jetzt beraten lassen</a>
          </div>
        </div>
      </nav>

      {/* ── Hero with animated EKG + real image ── */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "100%", minHeight: 620, position: "relative", paddingInline: 80, overflow: "hidden", background: "linear-gradient(135deg, #FCF5EE 0%, #E8C9A8 40%, #C4956C 100%)" }}>

        {/* EKG trace layer — draws like a real heart monitor */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", overflow: "hidden", pointerEvents: "none" }}>
          <svg width="100%" height="320" viewBox="0 0 1626 320" preserveAspectRatio="none" fill="none" style={{ position: "absolute", opacity: 0.18 }}>
            <path className="ekg-line" d={EKG_PATH} stroke="#E8793A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="100%" height="320" viewBox="0 0 1626 320" preserveAspectRatio="none" fill="none" style={{ position: "absolute", opacity: 0.09 }}>
            <path className="ekg-line-slow" d={EKG_PATH} stroke="#E8793A" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Hero content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 640, position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 52, fontWeight: 700, lineHeight: 1.15, color: "#1A5C8A" }}>Immer jemand da. Zu jeder Zeit.</h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4A5568" }}>Notra 24 — Ihr persönlicher Notdienst in Antalya. Rund um die Uhr erreichbar. Mehrsprachig. Mit echten Menschen.</p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#pakete" style={{ backgroundColor: "#1A5C8A", color: "#fff", padding: "16px 32px", borderRadius: 32, fontSize: 16, fontWeight: 700, textDecoration: "none" }}>Unser Angebot entdecken</a>
            <a href="#kontakt" style={{ border: "2px solid #1A5C8A", color: "#1A5C8A", padding: "16px 32px", borderRadius: 32, fontSize: 16, fontWeight: 700, textDecoration: "none", background: "transparent" }}>Kostenlos beraten lassen</a>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["24/7 erreichbar","Mehrsprachig","Sofort-Reaktion","Zertifizierte Hardware"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Check /><span style={{ fontSize: 13, fontWeight: 600, color: "#4A5568" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* ── Warum Notra 24 ── */}
      <section id="angebot" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 120px", gap: 48, backgroundColor: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>Warum Notra 24?</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A" }}>Weil Ihre Sicherheit keine Wartezeit kennt.</p>
        </div>
        <div style={{ display: "flex", gap: 32, width: "100%" }}>
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#1A5C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Sofortige Reaktion", desc: "Wenn Sie den Knopf drücken oder stürzen, sind wir innerhalb von Sekunden bei Ihnen — am Telefon und wenn nötig auch persönlich." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#1A5C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Wir sprechen Ihre Sprache", desc: "Deutsch, Türkisch, Englisch, Russisch — unsere Operatoren verstehen Sie und koordinieren schnell die richtige Hilfe." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#1A5C8A" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="#1A5C8A" strokeWidth="2"/></svg>, title: "Zuhause und unterwegs", desc: "Ob auf dem Balkon, im Park oder beim Einkaufen — unser GPS-System weiß immer wo Sie sind." },
          ].map(c => (
            <div key={c.title} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "40px 32px", backgroundColor: "#fff", borderRadius: 24, boxShadow: "0 4px 24px rgba(45,59,45,0.05)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "#1A5C8A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2D3B2D" }}>{c.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B", textAlign: "center" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── So funktioniert Notra 24 ── */}
      <section id="sofunktionierts" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 120px", gap: 48, backgroundColor: "#FDF8F3" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>So funktioniert Notra 24</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A" }}>Hilfe in 3 einfachen Schritten</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, width: "100%" }}>
          {[
            { num: "1", bg: "#1A5C8A", title: "Knopf drücken", desc: "Oder Sturz erkannt — das Armband erkennt automatisch wenn Sie fallen." },
            { num: "2", bg: "#1A5C8A", title: "Wir melden uns", desc: "Sofort bei Ihnen — per Freisprechen direkt am Gerät. Ein echter Mensch spricht mit Ihnen." },
            { num: "3", bg: "#1A5C8A", title: "Hilfe ist da", desc: "Angehörige werden informiert oder 112 wird koordiniert — je nach Situation." },
          ].map((s, i) => (
            <div key={s.num} style={{ display: "flex", alignItems: "flex-start", flex: 1 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: 32 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 800 }}>{s.num}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2D3B2D" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B", textAlign: "center" }}>{s.desc}</p>
              </div>
              {i < 2 && <div style={{ paddingTop: 36, flexShrink: 0 }}><svg width="96" height="40" viewBox="0 0 96 40"><path d="M0,20 Q24,0 48,20 Q72,40 96,20" stroke="#1A5C8A" strokeWidth="2" fill="none" opacity="0.3"/></svg></div>}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#B0B8B0", textAlign: "center" }}>Bei einem Sturz erkennt das Armband diesen automatisch — auch wenn Sie den Knopf nicht mehr drücken können.</p>
      </section>

      {/* ── Pakete ── */}
      <section id="pakete" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 80px", gap: 48, backgroundColor: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>Finden Sie das passende Paket</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A", fontStyle: "italic" }}>Drei Schutzstufen — für jeden Lebensstil</p>
        </div>
        <div style={{ display: "flex", gap: 24, width: "100%", maxWidth: 1400 }}>
          {[
            { name: "Safe Home", sub: "Sicherheit zuhause", desc: "Für Menschen, die überwiegend zuhause sind und auf Knopfdruck mit unserer Leitstelle verbunden sein möchten.", features: ["Heimzentrale (4G + Stromausfall-Schutz)","Funk-Armband (wasserdicht)","24/7 Leitstellen-Verbindung","Angehörigen-Benachrichtigung","Installation vor Ort"], cta: "Mehr erfahren", hl: false },
            { name: "Safe Life", sub: "Schutz zuhause und unterwegs", desc: "Unser meistgewähltes Paket. Voller Schutz — ob beim Einkaufen, im Park oder zuhause.", features: ["Alles aus Safe Home","GPS-Armband mit eigener SIM","Automatische Sturzerkennung","GPS-Ortung bei Notfall","Funktioniert überall in der Türkei"], cta: "Jetzt beraten lassen", hl: true },
            { name: "Safe Home Plus", sub: "Rundum-Schutz für zuhause", desc: "Maximaler Schutz. Zusätzlich überwachen Sensoren Ihre Wohnung auf Rauch, CO und unerwartete Türöffnungen.", features: ["Alles aus Safe Life","Funk-Rauchmelder","Funk-CO-Melder","Türkontakt (Wohnungstür)","Für Menschen mit höherem Risiko"], cta: "Mehr erfahren", hl: false },
          ].map(p => (
            <div key={p.name} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, padding: 36, backgroundColor: "#fff", borderRadius: 24, border: p.hl ? "2px solid #1A5C8A" : "none", boxShadow: p.hl ? "0 8px 32px rgba(26,92,138,0.15)" : "0 4px 24px rgba(45,59,45,0.05)", position: "relative" }}>
              {p.hl && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", backgroundColor: "#1A5C8A", color: "#fff", padding: "6px 20px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>Beliebteste Wahl</div>}
              <div><h3 style={{ fontSize: 22, fontWeight: 700, color: "#2D3B2D" }}>{p.name}</h3><p style={{ fontSize: 13, color: "#8A9B8A", marginTop: 4 }}>{p.sub}</p></div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {p.features.map(f => <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}><Check /><span style={{ fontSize: 14, color: "#4A5B4A" }}>{f}</span></div>)}
              </div>
              <a href="#kontakt" style={{ display: "flex", justifyContent: "center", padding: 14, borderRadius: 28, fontSize: 14, fontWeight: p.hl ? 700 : 600, textDecoration: "none", backgroundColor: p.hl ? "#1A5C8A" : "transparent", color: p.hl ? "#fff" : "#1A5C8A", border: p.hl ? "none" : "2px solid #1A5C8A", marginTop: "auto" }}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#B0B8B0" }}>Alle Pakete beinhalten kostenlose Installation, persönliche Einrichtung und sind monatlich kündbar.</p>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 80px", gap: 48, backgroundColor: "#FDF8F3" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D", marginBottom: 12 }}>Was unsere Kunden sagen</h2>
          <p style={{ fontSize: 16, color: "#8A9B8A" }}>Menschen, die sich auf uns verlassen</p>
        </div>
        <div style={{ display: "flex", gap: 24, width: "100%", maxWidth: 1400 }}>
          {[
            { ini: "HM", name: "Hans M., 78 Jahre", loc: "Konyaaltı, Antalya", q: "\"Seit meiner Frau nicht mehr da ist, lebe ich allein. Mit Notra 24 fühle ich mich nicht mehr allein — die sind wirklich immer da, auch nachts um 3 Uhr.\"", bg: "#1A5C8A" },
            { ini: "AY", name: "Ayşe Y., 71 Jahre", loc: "Lara, Antalya", q: "\"Benim kızım İstanbul'da yaşıyor. Notra 24 sayesinde kızım her zaman güvende olduğumu biliyor. Çok teşekkürler!\"", bg: "#2E7EB5" },
            { ini: "MK", name: "Margaret K., 69 Jahre", loc: "Belek, Antalya", q: "\"I had a fall last winter and couldn't reach my phone. The bracelet detected it automatically and Notra called me within seconds. Absolutely life-saving.\"", bg: "#1A5C8A" },
          ].map(t => (
            <div key={t.name} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, padding: 32, backgroundColor: "#fff", borderRadius: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 700 }}>{t.ini}</div>
                <div><div style={{ fontSize: 14, fontWeight: 600, color: "#2D3B2D" }}>{t.name}</div><div style={{ fontSize: 12, color: "#8A9B8A" }}>{t.loc}</div></div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{t.q}</p>
              <div style={{ color: "#D4943A", fontSize: 14 }}>★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Über uns ── */}
      <section id="uberuns" style={{ display: "flex", alignItems: "center", padding: "80px 120px", gap: 60, backgroundColor: "#fff" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D" }}>Echte Menschen. Echte Fürsorge.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B" }}>Notra 24 wurde gegründet, weil wir gesehen haben, wie viele ältere Menschen in Antalya allein leben — ohne Sicherheitsnetz. Wir haben eine professionelle Leitstelle aufgebaut, die nach dem Vorbild des Deutschen Roten Kreuzes arbeitet.</p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B" }}>Unsere mehrsprachigen Operatoren sind rund um die Uhr für Sie da. Keine Warteschleife, kein Anrufbeantworter — ein echter Mensch hebt ab.</p>
          <div style={{ display: "flex", paddingTop: 16 }}>
            {[{v:"24/7",l:"Erreichbar",c:"#1A5C8A"},{v:"4",l:"Sprachen",c:"#1A5C8A"},{v:"< 10s",l:"Reaktionszeit",c:"#1A5C8A"},{v:"Antalya",l:"Türkei",c:"#1A5C8A"}].map((s,i,a) => (
              <div key={s.l} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 16, borderRight: i<a.length-1?"1px solid rgba(45,59,45,0.1)":"none" }}>
                <span style={{ fontSize: 32, fontWeight: 800, color: s.c }}>{s.v}</span>
                <span style={{ fontSize: 12, color: "#8A9B8A" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 400, height: 320, borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(45,59,45,0.05)", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=640&fit=crop" alt="Leitstellen-Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 200px", gap: 40, backgroundColor: "#FDF8F3" }}>
        <h2 style={{ fontFamily: "'Lora', serif", fontSize: 38, fontWeight: 700, color: "#2D3B2D" }}>Häufige Fragen</h2>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: 800 }}>
          {FAQs.map((faq, i) => (
            <div key={i} style={{ borderBottom: i<FAQs.length-1?"1px solid rgba(45,59,45,0.1)":"none" }}>
              <button onClick={() => setOpenFaq(openFaq===i?-1:i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "20px 0", border: "none", background: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}>
                <span style={{ fontSize: 16, color: "#4A5B4A", textAlign: "left" }}>{faq.q}</span>
                <span style={{ color: "#1A5C8A", fontSize: 20, flexShrink: 0, marginLeft: 16 }}>{openFaq===i?"−":"+"}</span>
              </button>
              {openFaq===i && <div style={{ paddingBottom: 20, fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" style={{ display: "flex", padding: "80px 120px", gap: 60, backgroundColor: "#fff" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: 36, fontWeight: 700, color: "#2D3B2D" }}>Wir freuen uns auf Ihren Anruf.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B" }}>Kein Druck, kein Verkaufsgespräch — wir beraten Sie ehrlich, welches Paket für Sie passt.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1A5C8A", fontWeight: 600, fontSize: 14 }}>+90 XXX XXX XX XX</span><span style={{ color: "#8A9B8A", fontSize: 12 }}>Mo-So, 24 Stunden</span></div>
            <span style={{ color: "#4A5B4A", fontSize: 14 }}>info@notra24.com</span>
            <span style={{ color: "#4A5B4A", fontSize: 14 }}>Antalya, Türkei</span>
          </div>
        </div>
        <div style={{ width: 500, flexShrink: 0, backgroundColor: "#FDF8F3", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          {[{l:"Name",p:"Ihr vollständiger Name",t:"text"},{l:"Telefonnummer",p:"+90 ...",t:"tel"}].map(f => (
            <div key={f.l} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 13, color: "#6B7B6B" }}>{f.l}</label>
              <input type={f.t} placeholder={f.p} style={{ backgroundColor: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", fontFamily: "'Nunito', sans-serif" }} />
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "#6B7B6B" }}>Sprache</label>
            <select style={{ backgroundColor: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", fontFamily: "'Nunito', sans-serif" }}>
              <option>Deutsch</option><option>Türkçe</option><option>English</option><option>Русский</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "#6B7B6B" }}>Nachricht (optional)</label>
            <textarea rows={3} placeholder="Ihre Nachricht..." style={{ backgroundColor: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", resize: "none", fontFamily: "'Nunito', sans-serif" }} />
          </div>
          <button style={{ backgroundColor: "#1A5C8A", color: "#fff", padding: 16, borderRadius: 28, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}>Rückruf anfragen</button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 120px", backgroundColor: "#1A3A52" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <HeartSvg size={20} color="#E8793A" fill="#E8793A" />
            <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Notra 24</span>
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Ihr 24/7 Notdienst in Antalya</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Pakete","Über uns","Kontakt","Datenschutz"].map(l => <a key={l} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{l}</a>)}
        </div>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2025 Notra 24. Alle Rechte vorbehalten.</span>
      </footer>
    </div>
  );
}
