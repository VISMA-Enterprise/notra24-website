"use client";
import { useState, useEffect, useRef } from "react";

const EKG_SEGMENT = "l60,0 l8,-2 l4,2 l4,-8 l4,12 l6,-50 l6,95 l6,-105 l6,100 l6,-45 l4,8 l4,-2 l8,0 l60,0";
const EKG_PATH = `M0,160 l200,0 ${EKG_SEGMENT} l200,0 ${EKG_SEGMENT} l200,0 ${EKG_SEGMENT} l200,0`;
const C = { blue: "#1A5C8A", text: "#2D3B2D", body: "#4A5568", muted: "#6B7280", accent: "#E8793A", bg: "#FDF8F3", green: "#00C853" };

function useAnim() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".anim,.anim-left,.anim-right,.anim-scale");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Heart = ({ s = 24, c = "#E8793A", f = "none" }: { s?: number; c?: string; f?: string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={f}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke={c} strokeWidth="2" fill={f}/></svg>
);

const FAQs = [
  { q: "Muss ich einen Vertrag unterschreiben?", a: "Nein, Notra 24 ist monatlich kündbar, ohne lange Vertragslaufzeiten." },
  { q: "Funktioniert das Armband auch im Bad?", a: "Ja, das Armband ist wasserdicht (IP67) und kann beim Duschen und Baden getragen werden." },
  { q: "Was passiert wenn der Strom ausfällt?", a: "Die Heimzentrale hat einen eingebauten Akku und wechselt automatisch auf 4G-Mobilfunk." },
  { q: "Kann ich das Gerät auch unterwegs nutzen?", a: "Mit dem Safe Life oder Safe Home Plus Paket erhalten Sie ein GPS-Armband mit eigener SIM-Karte." },
  { q: "In welchen Sprachen kann ich mit dem Operator sprechen?", a: "Deutsch, Türkisch, Englisch und Russisch." },
  { q: "Wie wird das Gerät installiert?", a: "Wir kommen zu Ihnen nach Hause und installieren alles kostenlos. Ca. 30 Minuten." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const animRef = useAnim();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div ref={animRef} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* ── Nav ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, padding: "0 clamp(16px, 5vw, 80px)", background: scrolled ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #E8E0D8" : "none", transition: "all .3s ease" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Heart s={24} c="#E8793A" f="#E8793A" />
          <span style={{ fontSize: 20, fontWeight: 800, color: C.text, letterSpacing: -0.5 }}>Notra 24</span>
        </a>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["Angebot", "So funktioniert's", "Pakete", "Über uns", "Kontakt"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g, "")}`} style={{ color: "#5A6B5A", fontSize: 14, textDecoration: "none", transition: "color .2s" }}>{l}</a>
          ))}
        </div>
        <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 2 }}>
            {["DE", "TR", "EN", "RU"].map((l, i) => (
              <span key={l} style={{ padding: "4px 6px", fontSize: 11, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#fff" : "#8A9B8A", background: i === 0 ? C.blue : "transparent", borderRadius: 4 }}>{l}</span>
            ))}
          </div>
          <a href="#kontakt" style={{ background: C.blue, color: "#fff", padding: "10px 20px", borderRadius: 24, fontSize: 13, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>Jetzt beraten lassen</a>
        </div>
        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", alignItems: "center", justifyContent: "center", width: 40, height: 40, background: "none", border: "none", cursor: "pointer" }}>
          <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ height: 2, background: C.text, borderRadius: 1, transition: "all .3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <div style={{ height: 2, background: C.text, borderRadius: 1, transition: "all .3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ height: 2, background: C.text, borderRadius: 1, transition: "all .3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, zIndex: 49, background: "rgba(253,248,243,0.98)", backdropFilter: "blur(12px)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {["Angebot", "So funktioniert's", "Pakete", "Über uns", "Kontakt"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g, "")}`} onClick={() => setMenuOpen(false)} style={{ fontSize: 18, fontWeight: 600, color: C.text, textDecoration: "none", padding: "12px 0", borderBottom: "1px solid #E8E0D8" }}>{l}</a>
          ))}
          <a href="#kontakt" onClick={() => setMenuOpen(false)} style={{ background: C.blue, color: "#fff", padding: "14px 24px", borderRadius: 28, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center", marginTop: 8 }}>Jetzt beraten lassen</a>
        </div>
      )}

      {/* ── Hero ── */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", minHeight: "100vh", position: "relative", padding: "100px clamp(20px, 5vw, 80px) 60px", overflow: "hidden", background: "linear-gradient(135deg, #FCF5EE 0%, #E8C9A8 40%, #C4956C 100%)" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", overflow: "hidden", pointerEvents: "none" }}>
          <svg width="100%" height="320" viewBox="0 0 1626 320" preserveAspectRatio="none" fill="none" style={{ position: "absolute", opacity: 0.2 }}>
            <path className="ekg-line" d={EKG_PATH} stroke="#E8793A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="100%" height="320" viewBox="0 0 1626 320" preserveAspectRatio="none" fill="none" style={{ position: "absolute", opacity: 0.1 }}>
            <path className="ekg-line-slow" d={EKG_PATH} stroke="#E8793A" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
          <h1 className="anim visible" style={{ fontFamily: "'Lora', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.15, color: C.blue, marginBottom: 20 }}>Immer jemand da. Zu jeder Zeit.</h1>
          <p className="anim visible delay-1" style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.6, color: C.body, marginBottom: 28 }}>Notra 24 — Ihr persönlicher Notdienst in Antalya. Rund um die Uhr erreichbar. Mehrsprachig. Mit echten Menschen.</p>
          <div className="anim visible delay-2" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
            <a href="#pakete" style={{ background: C.blue, color: "#fff", padding: "14px 28px", borderRadius: 32, fontSize: "clamp(14px,1.5vw,16px)", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>Unser Angebot entdecken</a>
            <a href="#kontakt" style={{ border: `2px solid ${C.blue}`, color: C.blue, padding: "14px 28px", borderRadius: 32, fontSize: "clamp(14px,1.5vw,16px)", fontWeight: 700, textDecoration: "none", background: "transparent", whiteSpace: "nowrap" }}>Kostenlos beraten lassen</a>
          </div>
          <div className="anim visible delay-3" style={{ display: "flex", gap: "clamp(12px, 2vw, 24px)", flexWrap: "wrap" }}>
            {["24/7 erreichbar", "Mehrsprachig", "Sofort-Reaktion", "Zertifizierte Hardware"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: C.blue, fontWeight: 700, fontSize: 13 }}>✓</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.body }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warum Notra 24 ── */}
      <section id="angebot" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,120px)", gap: 48, background: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2 className="anim" style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: C.text, marginBottom: 12 }}>Warum Notra 24?</h2>
          <p className="anim delay-1" style={{ fontSize: 16, color: "#8A9B8A" }}>Weil Ihre Sicherheit keine Wartezeit kennt.</p>
        </div>
        <div style={{ display: "flex", gap: 24, width: "100%", flexWrap: "wrap" }}>
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={C.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Sofortige Reaktion", desc: "Wenn Sie den Knopf drücken oder stürzen, sind wir innerhalb von Sekunden bei Ihnen.", d: 1 },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={C.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Wir sprechen Ihre Sprache", desc: "Deutsch, Türkisch, Englisch, Russisch — unsere Operatoren verstehen Sie.", d: 2 },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={C.blue} strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke={C.blue} strokeWidth="2"/></svg>, title: "Zuhause und unterwegs", desc: "Ob auf dem Balkon oder beim Einkaufen — unser GPS weiß immer wo Sie sind.", d: 3 },
          ].map(c => (
            <div key={c.title} className={`anim-scale delay-${c.d} hover-lift`} style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "40px 28px", background: "#fff", borderRadius: 24, boxShadow: "0 4px 24px rgba(45,59,45,0.05)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${C.blue}1A`, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text }}>{c.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B", textAlign: "center" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── So funktioniert's ── */}
      <section id="sofunktionierts" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,120px)", gap: 48, background: C.bg }}>
        <div style={{ textAlign: "center" }}>
          <h2 className="anim" style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: C.text, marginBottom: 12 }}>So funktioniert Notra 24</h2>
          <p className="anim delay-1" style={{ fontSize: 16, color: "#8A9B8A" }}>Hilfe in 3 einfachen Schritten</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, width: "100%", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { num: "1", bg: C.blue, title: "Knopf drücken", desc: "Oder Sturz erkannt — das Armband erkennt automatisch wenn Sie fallen." },
            { num: "2", bg: C.accent, title: "Wir melden uns", desc: "Sofort bei Ihnen — per Freisprechen direkt am Gerät. Ein echter Mensch." },
            { num: "3", bg: C.blue, title: "Hilfe ist da", desc: "Angehörige werden informiert oder 112 wird koordiniert." },
          ].map((s, i) => (
            <div key={s.num} className={`anim delay-${i + 1}`} style={{ flex: "1 1 260px", maxWidth: 360, display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "32px 24px" }}>
              <div className="hover-lift" style={{ width: 72, height: 72, borderRadius: "50%", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 800, transition: "transform .3s" }}>{s.num}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B", textAlign: "center" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pakete ── */}
      <section id="pakete" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,80px)", gap: 48, background: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <h2 className="anim" style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: C.text, marginBottom: 12 }}>Finden Sie das passende Paket</h2>
          <p className="anim delay-1" style={{ fontSize: 16, color: "#8A9B8A", fontStyle: "italic" }}>Drei Schutzstufen — für jeden Lebensstil</p>
        </div>
        <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 1200, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { name: "Safe Home", sub: "Sicherheit zuhause", desc: "Für Menschen, die überwiegend zuhause sind.", features: ["Heimzentrale (4G + Stromausfall-Schutz)", "Funk-Armband (wasserdicht)", "24/7 Leitstellen-Verbindung", "Angehörigen-Benachrichtigung", "Installation vor Ort"], cta: "Mehr erfahren", hl: false },
            { name: "Safe Life", sub: "Schutz zuhause und unterwegs", desc: "Unser meistgewähltes Paket. Voller Schutz überall.", features: ["Alles aus Safe Home", "GPS-Armband mit eigener SIM", "Automatische Sturzerkennung", "GPS-Ortung bei Notfall", "Funktioniert überall in der Türkei"], cta: "Jetzt beraten lassen", hl: true },
            { name: "Safe Home Plus", sub: "Rundum-Schutz für zuhause", desc: "Maximaler Schutz mit Rauch-, CO- und Türsensoren.", features: ["Alles aus Safe Life", "Funk-Rauchmelder", "Funk-CO-Melder", "Türkontakt (Wohnungstür)", "Für Menschen mit höherem Risiko"], cta: "Mehr erfahren", hl: false },
          ].map((p, i) => (
            <div key={p.name} className={`anim-scale delay-${i + 1} hover-lift`} style={{ flex: "1 1 320px", maxWidth: 400, display: "flex", flexDirection: "column", gap: 20, padding: "clamp(24px,3vw,36px)", background: "#fff", borderRadius: 24, border: p.hl ? `2px solid ${C.blue}` : "none", boxShadow: p.hl ? `0 8px 32px rgba(26,92,138,0.12)` : "0 4px 24px rgba(45,59,45,0.05)", position: "relative" }}>
              {p.hl && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.blue, color: "#fff", padding: "6px 20px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>Beliebteste Wahl</div>}
              <div><h3 style={{ fontSize: 22, fontWeight: 700, color: C.text }}>{p.name}</h3><p style={{ fontSize: 13, color: "#8A9B8A", marginTop: 4 }}>{p.sub}</p></div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {p.features.map(f => <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: C.blue, fontWeight: 700, fontSize: 13 }}>✓</span><span style={{ fontSize: 14, color: "#4A5B4A" }}>{f}</span></div>)}
              </div>
              <a href="#kontakt" style={{ display: "flex", justifyContent: "center", padding: 14, borderRadius: 28, fontSize: 14, fontWeight: p.hl ? 700 : 600, textDecoration: "none", background: p.hl ? C.blue : "transparent", color: p.hl ? "#fff" : C.blue, border: p.hl ? "none" : `2px solid ${C.blue}`, marginTop: "auto" }}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="anim" style={{ fontSize: 13, color: "#B0B8B0" }}>Alle Pakete beinhalten kostenlose Installation und sind monatlich kündbar.</p>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,80px)", gap: 48, background: C.bg }}>
        <div style={{ textAlign: "center" }}>
          <h2 className="anim" style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: C.text, marginBottom: 12 }}>Was unsere Kunden sagen</h2>
          <p className="anim delay-1" style={{ fontSize: 16, color: "#8A9B8A" }}>Menschen, die sich auf uns verlassen</p>
        </div>
        <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 1200, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { ini: "HM", name: "Hans M., 78", loc: "Konyaaltı", q: "\"Mit Notra 24 fühle ich mich nicht mehr allein — die sind wirklich immer da, auch nachts um 3 Uhr.\"", bg: C.blue },
            { ini: "AY", name: "Ayşe Y., 71", loc: "Lara", q: "\"Benim kızım İstanbul'da yaşıyor. Notra 24 sayesinde güvende olduğumu biliyor. Çok teşekkürler!\"", bg: C.accent },
            { ini: "MK", name: "Margaret K., 69", loc: "Belek", q: "\"The bracelet detected my fall automatically and Notra called me within seconds. Life-saving.\"", bg: C.blue },
          ].map((t, i) => (
            <div key={t.name} className={`anim delay-${i + 1} hover-lift`} style={{ flex: "1 1 300px", maxWidth: 400, display: "flex", flexDirection: "column", gap: 16, padding: "clamp(24px,3vw,32px)", background: "#fff", borderRadius: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{t.ini}</div>
                <div><div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{t.name}</div><div style={{ fontSize: 12, color: "#8A9B8A" }}>{t.loc}, Antalya</div></div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{t.q}</p>
              <div style={{ color: "#D4943A", fontSize: 14 }}>★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Über uns ── */}
      <section id="uberuns" style={{ display: "flex", alignItems: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,120px)", gap: "clamp(24px,4vw,60px)", background: "#fff", flexWrap: "wrap" }}>
        <div className="anim-left" style={{ flex: "1 1 400px" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: C.text, marginBottom: 20 }}>Echte Menschen. Echte Fürsorge.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B", marginBottom: 16 }}>Notra 24 wurde gegründet, weil wir gesehen haben, wie viele ältere Menschen in Antalya allein leben. Wir haben eine professionelle Leitstelle nach dem Vorbild des Deutschen Roten Kreuzes aufgebaut.</p>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B", marginBottom: 24 }}>Keine Warteschleife, kein Anrufbeantworter — ein echter Mensch hebt ab.</p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {[{ v: "24/7", l: "Erreichbar", c: C.blue }, { v: "4", l: "Sprachen", c: C.blue }, { v: "< 10s", l: "Reaktionszeit", c: C.blue }, { v: "Antalya", l: "Türkei", c: C.blue }].map((s, i, a) => (
              <div key={s.l} className={`anim delay-${i + 1}`} style={{ flex: "1 1 100px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: 16, borderRight: i < a.length - 1 ? "1px solid rgba(45,59,45,0.1)" : "none" }}>
                <span style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 800, color: s.c }}>{s.v}</span>
                <span style={{ fontSize: 12, color: "#8A9B8A" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="anim-right" style={{ flex: "0 1 380px", height: 300, borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 24px rgba(45,59,45,0.05)" }}>
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=760&h=600&fit=crop" alt="Leitstellen-Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,200px)", gap: 40, background: C.bg }}>
        <h2 className="anim" style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, color: C.text }}>Häufige Fragen</h2>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: 800 }}>
          {FAQs.map((faq, i) => (
            <div key={i} className={`anim delay-${Math.min(i + 1, 4)}`} style={{ borderBottom: i < FAQs.length - 1 ? "1px solid rgba(45,59,45,0.1)" : "none" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "20px 0", border: "none", background: "none", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}>
                <span style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#4A5B4A", textAlign: "left" }}>{faq.q}</span>
                <span style={{ color: C.blue, fontSize: 20, flexShrink: 0, marginLeft: 16, transition: "transform .3s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <div style={{ maxHeight: openFaq === i ? 200 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.16,1,.3,1)" }}>
                <div style={{ paddingBottom: 20, fontSize: 14, lineHeight: 1.6, color: "#6B7B6B" }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" style={{ display: "flex", padding: "clamp(48px,8vw,80px) clamp(20px,5vw,120px)", gap: "clamp(24px,4vw,60px)", background: "#fff", flexWrap: "wrap" }}>
        <div className="anim-left" style={{ flex: "1 1 300px" }}>
          <h2 style={{ fontFamily: "'Lora', serif", fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: C.text, marginBottom: 16 }}>Wir freuen uns auf Ihren Anruf.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6B7B6B", marginBottom: 24 }}>Kein Druck, kein Verkaufsgespräch — wir beraten Sie ehrlich.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}><span style={{ color: C.blue, fontWeight: 600, fontSize: 14 }}>+90 XXX XXX XX XX</span><span style={{ color: "#8A9B8A", fontSize: 12 }}>Mo-So, 24 Stunden</span></div>
            <span style={{ color: "#4A5B4A", fontSize: 14 }}>info@notra24.com</span>
            <span style={{ color: "#4A5B4A", fontSize: 14 }}>Antalya, Türkei</span>
          </div>
        </div>
        <div className="anim-right" style={{ flex: "1 1 340px", maxWidth: 500, background: C.bg, borderRadius: 24, padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: 14 }}>
          {[{ l: "Name", p: "Ihr vollständiger Name", t: "text" }, { l: "Telefonnummer", p: "+90 ...", t: "tel" }].map(f => (
            <div key={f.l} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 13, color: "#6B7B6B" }}>{f.l}</label>
              <input type={f.t} placeholder={f.p} style={{ background: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", fontFamily: "'Nunito'" }} />
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "#6B7B6B" }}>Sprache</label>
            <select style={{ background: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", fontFamily: "'Nunito'" }}>
              <option>Deutsch</option><option>Türkçe</option><option>English</option><option>Русский</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, color: "#6B7B6B" }}>Nachricht (optional)</label>
            <textarea rows={3} placeholder="Ihre Nachricht..." style={{ background: "#fff", border: "1px solid rgba(45,59,45,0.12)", borderRadius: 12, padding: "12px 16px", fontSize: 14, color: "#4A5B4A", outline: "none", resize: "none", fontFamily: "'Nunito'" }} />
          </div>
          <button style={{ background: C.blue, color: "#fff", padding: 16, borderRadius: 28, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Nunito'" }}>Rückruf anfragen</button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "clamp(24px,4vw,40px) clamp(20px,5vw,120px)", background: "#1A3A52", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <Heart s={20} c="#E8793A" f="#E8793A" />
            <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Notra 24</span>
          </div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Ihr 24/7 Notdienst in Antalya</span>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {["Pakete", "Über uns", "Kontakt", "Datenschutz"].map(l => <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{l}</a>)}
        </div>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2025 Notra 24. Alle Rechte vorbehalten.</span>
      </footer>
    </div>
  );
}
