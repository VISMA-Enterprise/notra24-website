"use client";
import { useState, useEffect, useRef } from "react";
const K = "#E8793A";
const EKG = "M-20,200 L100,200 L140,200 L180,198 L200,202 L220,195 L240,205 L260,170 L280,230 L300,80 L320,320 L340,130 L360,270 L380,190 L400,200 L480,200 L600,200 L640,198 L660,202 L680,195 L700,205 L720,170 L740,230 L760,80 L780,320 L800,130 L820,270 L840,190 L860,200 L940,200 L1060,200 L1100,198 L1120,202 L1140,195 L1160,205 L1180,170 L1200,230 L1220,80 L1240,320 L1260,130 L1280,270 L1300,190 L1320,200 L1460,200";

function useA() {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!r.current) return;
    const o = new IntersectionObserver((e) => e.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("visible"); o.unobserve(x.target); } }), { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    r.current.querySelectorAll(".anim,.anim-scale").forEach((e) => o.observe(e));
    return () => o.disconnect();
  }, []);
  return r;
}

function Heart({ s = 24, c = K }: { s?: number; c?: string }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill={c}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
}

function Pill({ t, right }: { t: string; right?: boolean }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #E0D8CF", borderRadius: 24, padding: "10px 20px", flexDirection: right ? "row-reverse" : "row" }}><span style={{ color: K, fontSize: 13 }}>{t}</span><div style={{ width: 24, height: 24, borderRadius: "50%", background: K, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14 }}>+</div></div>;
}

export default function Page() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useA();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, padding: "0 clamp(20px,5vw,60px)", background: scrolled ? "rgba(255,255,255,.97)" : "#fff", backdropFilter: scrolled ? "blur(8px)" : "none", borderBottom: scrolled ? "1px solid #E8E0D8" : "none", transition: "all .3s" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}><Heart s={20} /><span style={{ fontSize: 18, fontWeight: 700, color: "#2D2D2D" }}>Notra 24</span></a>
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ background: "#FFF3ED", borderRadius: 24, padding: "10px 20px", fontSize: 14, fontWeight: 600, color: K, display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: K, display: "inline-block" }} /> Home</span>
          {["Angebot", "Pakete", "Kontakt"].map((l) => <a key={l} href={`#${l.toLowerCase()}`} style={{ padding: "10px 16px", fontSize: 14, color: "#666", textDecoration: "none" }}>{l}</a>)}
        </div>
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 14, color: "#666" }}>DE</span>
          <a href="#kontakt" style={{ background: K, color: "#fff", padding: "10px 24px", borderRadius: 24, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Jetzt anrufen</a>
        </div>
        <button className="show-mobile" onClick={() => setMenu(!menu)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ height: 2, background: "#2D2D2D", borderRadius: 1, transition: "all .3s", transform: menu ? "rotate(45deg) translateY(7px)" : "none" }} />
            <div style={{ height: 2, background: "#2D2D2D", borderRadius: 1, transition: "all .3s", opacity: menu ? 0 : 1 }} />
            <div style={{ height: 2, background: "#2D2D2D", borderRadius: 1, transition: "all .3s", transform: menu ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </div>
        </button>
      </nav>

      {menu && <div className="show-mobile" style={{ position: "fixed", top: 72, left: 0, right: 0, bottom: 0, zIndex: 49, background: "rgba(245,243,239,.98)", padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
        {["Angebot", "Pakete", "Kontakt"].map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenu(false)} style={{ fontSize: 18, fontWeight: 600, color: "#2D2D2D", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid #E0D8CF" }}>{l}</a>)}
        <a href="#kontakt" onClick={() => setMenu(false)} style={{ background: K, color: "#fff", padding: "14px 24px", borderRadius: 28, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center", marginTop: 8 }}>Jetzt anrufen</a>
      </div>}

      {/* Hero */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh", position: "relative", padding: "clamp(100px,12vw,140px) clamp(20px,5vw,60px) 40px", overflow: "hidden", background: "linear-gradient(180deg, #fff 0%, #F5F0EA 100%)" }}>
        <div style={{ position: "absolute", top: "30%", left: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.04, pointerEvents: "none" }}>
          <svg width="100%" height="400" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none"><path className="ekg-line" d={EKG} stroke={K} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ position: "relative", textAlign: "center", maxWidth: 960 }}>
          <h1 className="anim visible" style={{ fontFamily: "'Lora',serif", fontSize: "clamp(36px,7vw,72px)", fontWeight: 700, lineHeight: 1.15, color: "#2D2D2D", textTransform: "uppercase", letterSpacing: -1 }}>IHRE SICHERHEIT, UNSERE</h1>
          <p className="anim visible d1" style={{ fontSize: "clamp(13px,1.5vw,14px)", color: "#888", margin: "12px 0" }}>Persönlicher Notdienst und Sicherheitsservice für Senioren in Antalya.</p>
          <h1 className="anim visible d2" style={{ fontFamily: "'Lora',serif", fontSize: "clamp(36px,7vw,72px)", fontWeight: 700, lineHeight: 1.15, color: "#2D2D2D", textTransform: "uppercase", letterSpacing: -1 }}>24/7 NOTDIENST</h1>
        </div>
        <div className="anim visible d3" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: 1000, padding: "clamp(20px,4vw,40px) 0", marginTop: 16 }}>
          <div className="hide-mobile" style={{ display: "flex", flexDirection: "column", gap: 16, position: "absolute", left: 0 }}><Pill t="Sofort-Reaktion" /><Pill t="Mehrsprachig" /></div>
          <div style={{ position: "relative", width: "clamp(120px,20vw,200px)", height: "clamp(120px,20vw,200px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="ring-pulse" style={{ position: "absolute", width: "160%", height: "160%", borderRadius: "50%", border: `1px solid ${K}` }} />
            <div style={{ position: "absolute", width: "140%", height: "140%", borderRadius: "50%", border: "1px solid rgba(232,121,58,0.12)" }} />
            <div className="heart-float"><Heart s={120} c={K} /></div>
          </div>
          <div className="hide-mobile" style={{ display: "flex", flexDirection: "column", gap: 16, position: "absolute", right: 0, alignItems: "flex-end" }}><Pill t="GPS-Ortung" right /><Pill t="Sturzerkennung" right /></div>
        </div>
        <div className="anim d4" style={{ display: "flex", borderRadius: 32, border: `2px solid ${K}`, overflow: "hidden", maxWidth: 520, width: "100%", marginTop: "clamp(16px,3vw,32px)" }}>
          <div style={{ flex: 1, background: K, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px" }}><span style={{ color: "rgba(255,255,255,.7)", fontSize: 14 }}>Ihre Telefonnummer eingeben</span></div>
          <a href="#kontakt" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 28px", background: "#fff", color: K, fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Rückruf anfragen</a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(24px,4vw,40px) clamp(20px,5vw,60px)", gap: "clamp(20px,4vw,40px)", flexWrap: "wrap" }}>
        <div className="anim-scale" style={{ background: "#fff", borderRadius: 16, padding: "20px 28px", border: "1px solid #E8E0D8" }}>
          <p style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Reaktionszeit</p>
          <p style={{ fontSize: 11, color: "#888" }}>Durchschnitt</p>
          <p style={{ fontSize: 36, fontWeight: 700, color: "#2D2D2D" }}>{"< 10s"}</p>
        </div>
        <div className="anim-scale d1" style={{ textAlign: "center", flex: "1 1 300px", maxWidth: 500 }}>
          <p style={{ fontSize: 14, color: "#888", marginBottom: 12 }}>Vertrauen Sie auf Notra 24 — Ihr persönlicher Sicherheitspartner für Angehörige in der Türkei.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {["M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"].map((d, i) => <div key={i} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #E0D8CF", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d={d} /></svg></div>)}
          </div>
        </div>
        <div className="anim-scale d2" style={{ background: "#fff", borderRadius: 16, padding: "20px 28px", border: "1px solid #E8E0D8" }}>
          <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Kundenzufriedenheit</p>
          <div style={{ display: "flex", gap: 4 }}>{[1, 2, 3].map((i) => <div key={i} style={{ width: 40, height: 48, borderRadius: 8, background: i < 3 ? "#E8E0D8" : K, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 4 }}><span style={{ fontSize: 10, color: i < 3 ? "#888" : "#fff", fontWeight: 700 }}>{i === 3 ? "98%" : ""}</span></div>)}</div>
        </div>
      </section>

      {/* Features */}
      <section id="angebot" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(40px,6vw,60px) clamp(20px,5vw,60px)", gap: 40 }}>
        <div style={{ textAlign: "center" }}>
          <p className="anim" style={{ fontSize: 12, color: K, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>WARUM NOTRA 24</p>
          <h2 className="anim d1" style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, lineHeight: 1.2 }}>{"Sicherheit, die keine"}<br />Wartezeit kennt.</h2>
        </div>
        <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 1320, flexWrap: "wrap", justifyContent: "center" }}>
          {[{ icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", t: "Sofortige Reaktion", d: "Wenn Sie den Knopf drücken oder stürzen, sind wir innerhalb von Sekunden bei Ihnen." }, { icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z", t: "Wir sprechen Ihre Sprache", d: "Deutsch, Türkisch, Englisch, Russisch — unsere Operatoren verstehen Sie." }, { icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z", t: "Zuhause und unterwegs", d: "Ob auf dem Balkon, im Park oder beim Einkaufen — unser GPS weiss wo Sie sind." }, { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", t: "Zertifizierte Hardware", d: "Wasserdichte Armbänder und 4G-Heimzentrale mit Stromausfall-Schutz." }].map((c, i) => (
            <div key={c.t} className={`anim-scale d${i + 1} hover-up`} style={{ flex: "1 1 280px", maxWidth: 320, background: "#fff", borderRadius: 16, border: "1px solid #E8E0D8", padding: "clamp(24px,3vw,32px)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, border: "1px solid #E8E0D8", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={K} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon} /></svg></div>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>{c.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#888" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(40px,6vw,60px) clamp(20px,5vw,60px)", gap: 40 }}>
        <div style={{ textAlign: "center" }}>
          <p className="anim" style={{ fontSize: 12, color: K, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>{"SO FUNKTIONIERT\u0027S"}</p>
          <h2 className="anim d1" style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700 }}>Hilfe in 3 Schritten</h2>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, width: "100%", maxWidth: 1000, flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "1", t: "Knopf drücken", d: "Oder Sturz erkannt — das Armband erkennt automatisch wenn Sie fallen." }, { n: "2", t: "Wir melden uns", d: "Sofort bei Ihnen — per Freisprechen direkt am Gerät. Ein echter Mensch." }, { n: "3", t: "Hilfe ist da", d: "Angehörige werden informiert oder 112 wird koordiniert." }].map((s, i) => (
            <div key={s.n} style={{ display: "flex", alignItems: "flex-start", flex: "1 1 200px" }}>
              <div className={`anim d${i + 1}`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "clamp(16px,2vw,24px)", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: K, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 22, fontWeight: 800 }}>{s.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>{s.t}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "#888" }}>{s.d}</p>
              </div>
              {i < 2 && <div className="hide-mobile" style={{ paddingTop: 24, flexShrink: 0 }}><svg width="80" height="40" viewBox="0 0 80 40"><line x1="0" y1="20" x2="80" y2="20" stroke="#E0D8CF" strokeWidth="2" strokeDasharray="6 4" /></svg></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(40px,6vw,60px) clamp(20px,5vw,60px)", gap: 40 }}>
        <div style={{ textAlign: "center" }}>
          <p className="anim" style={{ fontSize: 12, color: K, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>PAKETE</p>
          <h2 className="anim d1" style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700 }}>Das passende Paket für Sie</h2>
        </div>
        <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 1320, flexWrap: "wrap", justifyContent: "center" }}>
          {[{ n: "Safe Home", d: "Für Menschen, die überwiegend zuhause sind und auf Knopfdruck verbunden sein möchten.", f: ["Heimzentrale (4G + Stromausfall)", "Funk-Armband (wasserdicht)", "24/7 Leitstellen-Verbindung", "Installation vor Ort"], cta: "Mehr erfahren", hl: false }, { n: "Safe Life", d: "Voller Schutz — ob beim Einkaufen, im Park oder zuhause.", f: ["Alles aus Safe Home", "GPS-Armband mit eigener SIM", "Automatische Sturzerkennung", "GPS-Ortung bei Notfall", "Funktioniert überall in der Türkei"], cta: "Jetzt beraten lassen", hl: true }, { n: "Safe Home Plus", d: "Maximaler Schutz mit Sensoren für Rauch, CO und Türöffnungen.", f: ["Alles aus Safe Life", "Funk-Rauchmelder", "Funk-CO-Melder", "Türkontakt (Wohnungstür)"], cta: "Mehr erfahren", hl: false }].map((p, i) => (
            <div key={p.n} className={`anim-scale d${i + 1} hover-up`} style={{ flex: "1 1 320px", maxWidth: 430, background: "#fff", borderRadius: 16, border: `1px solid ${p.hl ? K : "#E8E0D8"}`, padding: "clamp(24px,3vw,32px)", display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
              {p.hl && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: K, color: "#fff", padding: "5px 16px", borderRadius: 16, fontSize: 11, fontWeight: 700 }}>Beliebteste Wahl</div>}
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>{p.n}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: "#888" }}>{p.d}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{p.f.map((x) => <div key={x} style={{ display: "flex", gap: 8, fontSize: 13 }}><span>•</span>{x}</div>)}</div>
              <a href="#kontakt" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", borderRadius: 24, fontSize: 13, fontWeight: 600, textDecoration: "none", background: p.hl ? K : "transparent", color: p.hl ? "#fff" : "#2D2D2D", border: p.hl ? "none" : "1px solid #E0D8CF", marginTop: "auto" }}>{p.cta} →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "clamp(40px,6vw,60px) clamp(20px,5vw,60px)", gap: 40 }}>
        <h2 className="anim" style={{ fontFamily: "'Lora',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700 }}>Was unsere Kunden sagen</h2>
        <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 1320, flexWrap: "wrap", justifyContent: "center" }}>
          {[{ ini: "HM", n: "Hans M.", a: "78", q: "Seit meiner Frau nicht mehr da ist, lebe ich allein. Mit Notra 24 fühle ich mich nicht mehr allein — auch nachts um 3 Uhr.", bg: K }, { ini: "AY", n: "Ayse Y.", a: "71", q: "Benim kizim Istanbul da yasiyor. Notra 24 sayesinde kizim her zaman güvende oldugumu biliyor.", bg: "#C4725F" }, { ini: "MK", n: "Margaret K.", a: "69", q: "The bracelet detected my fall automatically and Notra called me within seconds. Life-saving.", bg: "#B85C3A" }].map((t, i) => (
            <div key={t.n} className={`anim-scale d${i + 1} hover-up`} style={{ flex: "1 1 300px", maxWidth: 430, background: "#fff", borderRadius: 16, border: "1px solid #E8E0D8", padding: "clamp(24px,3vw,32px)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ color: K, fontSize: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555" }}>{`"${t.q}"`}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "auto" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>{t.ini}</div>
                <div><span style={{ fontSize: 14, fontWeight: 600 }}>{t.n},</span><span style={{ fontSize: 13, color: "#888", marginLeft: 4 }}>{t.a} ...</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + Footer */}
      <section id="kontakt" style={{ padding: "clamp(20px,4vw,40px) clamp(20px,5vw,60px)" }}>
        <div className="anim" style={{ background: K, borderRadius: 24, padding: "clamp(32px,5vw,60px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontFamily: "'Lora',serif", fontSize: "clamp(24px,3.5vw,32px)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>Wir freuen uns auf Ihren Anruf.</h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,.7)", marginBottom: 16 }}>Kein Druck, kein Verkaufsgespräch — wir beraten Sie ehrlich.</p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}><span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>+90 XXX XXX XX XX</span><span style={{ color: "rgba(255,255,255,.7)", fontSize: 14 }}>info@notra24.com</span></div>
          </div>
          <a href="tel:+90" style={{ background: "#fff", color: K, padding: "14px 32px", borderRadius: 28, fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>Rückruf anfragen →</a>
        </div>
      </section>
      <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "clamp(20px,3vw,30px) clamp(20px,5vw,60px)", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}><Heart s={16} /><span style={{ fontSize: 14, fontWeight: 700 }}>Notra 24</span></div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>{["Pakete", "Über uns", "Kontakt", "Datenschutz", "Impressum"].map((l) => <a key={l} href="#" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>{l}</a>)}</div>
        <span style={{ fontSize: 12, color: "#aaa" }}>© 2025 Notra 24. Alle Rechte vorbehalten.</span>
      </footer>
    </div>
  );
}
