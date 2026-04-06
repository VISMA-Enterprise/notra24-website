export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ background: "rgba(8,12,20,0.85)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: "var(--gold)", color: "#080c14" }}>N</div>
            <span className="text-lg font-bold tracking-tight">NOTRA <span style={{ color: "var(--gold)" }}>24</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#leistungen" className="transition-colors hover:text-white" style={{ color: "var(--muted)" }}>Leistungen</a>
            <a href="#pakete" className="transition-colors hover:text-white" style={{ color: "var(--muted)" }}>Pakete</a>
            <a href="#franchise" className="transition-colors hover:text-white" style={{ color: "var(--muted)" }}>Franchise</a>
            <a href="#kontakt" className="transition-colors hover:text-white" style={{ color: "var(--muted)" }}>Kontakt</a>
          </div>
          <a href="#kontakt" className="px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:brightness-110" style={{ background: "var(--gold)", color: "#080c14" }}>
            Jetzt anfragen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-8" style={{ background: "rgba(232,160,32,0.1)", color: "var(--gold)", border: "1px solid rgba(232,160,32,0.2)" }}>
            24/7 Notdienst-Leitstelle — Jetzt auch als Franchise
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Sicherheit für<br />
            <span style={{ color: "var(--gold)" }}>Ihre Liebsten.</span><br />
            Rund um die Uhr.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--muted)" }}>
            Notra 24 verbindet modernste Telecare-Technologie mit menschlicher Fürsorge.
            Ein Knopfdruck genügt — und professionelle Hilfe ist sofort zur Stelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pakete" className="px-8 py-4 rounded-xl text-base font-semibold transition-all hover:brightness-110" style={{ background: "var(--gold)", color: "#080c14" }}>
              Pakete ansehen
            </a>
            <a href="#franchise" className="px-8 py-4 rounded-xl text-base font-semibold transition-all" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
              Franchise-Partner werden
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "24/7", label: "Verfügbarkeit" },
            { value: "<30s", label: "Reaktionszeit" },
            { value: "99.9%", label: "Uptime" },
            { value: "4+", label: "Sprachen" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "var(--gold)" }}>{stat.value}</div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">So funktioniert Notra 24</h2>
          <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>Von der Alarmierung bis zur Hilfe — in unter 30 Sekunden.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔴", title: "SOS-Knopf", desc: "Ein Knopfdruck am Armband oder Basisstation — der Alarm geht sofort an unsere Leitstelle." },
              { icon: "📞", title: "Sofortiger Rückruf", desc: "Unser Operator ruft den Kunden zurück, spricht in seiner Sprache und koordiniert Hilfe." },
              { icon: "🚑", title: "Notfallkette", desc: "Angehörige, Nachbarn, Rettungsdienst — wir aktivieren die richtige Hilfe in der richtigen Reihenfolge." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { icon: "⚡", title: "Automatische Sturzerkennung", desc: "Das EV-12 Mobilgerät erkennt Stürze automatisch und löst sofort einen Alarm aus — auch wenn der Kunde nicht mehr selbst den Knopf drücken kann." },
              { icon: "🏠", title: "Smart Home Sensoren", desc: "Tür-/Fenstersensoren, Rauch- und CO-Melder verbunden mit dem EV-Hub. Jede Anomalie wird sofort erkannt und an die Leitstelle gemeldet." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" className="py-20 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unsere Pakete</h2>
          <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>Für jeden Bedarf die passende Lösung.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "SAFE HOME",
                price: "ab 49",
                features: ["EV-Hub Basisstation", "24/7 Leitstelle", "SOS-Knopf", "2 Notfallkontakte", "Monatlicher Gerätebericht"],
                popular: false,
              },
              {
                name: "SAFE LIFE",
                price: "ab 79",
                features: ["Alles aus Safe Home", "EV-12 Mobiles SOS-Gerät", "GPS-Ortung", "Automatische Sturzerkennung", "5 Notfallkontakte", "Mehrsprachiger Support"],
                popular: true,
              },
              {
                name: "SAFE HOME+",
                price: "ab 99",
                features: ["Alles aus Safe Life", "Rauch- & CO-Melder", "Tür-/Fenstersensor", "Stromausfall-Erkennung", "Premium-Support", "Unbegrenzte Kontakte"],
                popular: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="p-6 rounded-2xl relative"
                style={{
                  background: pkg.popular ? "rgba(232,160,32,0.05)" : "var(--bg)",
                  border: pkg.popular ? "2px solid var(--gold)" : "1px solid var(--border)",
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: "var(--gold)", color: "#080c14" }}>
                    Beliebtestes Paket
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold" style={{ color: "var(--gold)" }}>{pkg.price}</span>
                  <span className="text-sm ml-1" style={{ color: "var(--muted)" }}>&euro;/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span style={{ color: "var(--green)" }}>&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className="block text-center py-3 rounded-lg text-sm font-semibold transition-all" style={{ background: pkg.popular ? "var(--gold)" : "transparent", color: pkg.popular ? "#080c14" : "var(--text)", border: pkg.popular ? "none" : "1px solid var(--border)" }}>
                  Jetzt anfragen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise */}
      <section id="franchise" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Franchise-Partner werden</h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Starten Sie Ihren eigenen Notra 24 Standort — mit bewährter Technologie, fertigem System und vollem Support.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: "🖥️", title: "Eigenes Dashboard", desc: "Ihr Standort bekommt ein eigenes Dashboard unter Ihrem Stadtnamen (z.B. istanbul.notra24.com)." },
              { icon: "🔧", title: "Schlüsselfertig", desc: "Hardware, Software, Schulung — wir liefern alles. Sie kümmern sich um die Kunden." },
              { icon: "📈", title: "Skalierbar", desc: "Von 10 bis 10.000 Kunden. Das System wächst mit Ihrem Geschäft." },
              { icon: "🌍", title: "Mehrsprachig", desc: "Deutsch, Türkisch, Englisch, Russisch — für die Expat-Community in jeder Stadt." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kontakt aufnehmen</h2>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            Ob als Kunde oder Franchise-Partner — wir beraten Sie gerne.
          </p>
          <div className="space-y-4 text-left">
            <input type="text" placeholder="Ihr Name" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            <input type="email" placeholder="E-Mail-Adresse" className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            <select className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}>
              <option>Ich bin Privatperson (Kundenanfrage)</option>
              <option>Ich bin Unternehmer (Franchise-Anfrage)</option>
            </select>
            <textarea rows={4} placeholder="Ihre Nachricht..." className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
            <button className="w-full py-3 rounded-lg text-sm font-semibold transition-all hover:brightness-110" style={{ background: "var(--gold)", color: "#080c14" }}>
              Nachricht senden
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: "var(--gold)", color: "#080c14" }}>N</div>
            <span className="text-sm font-semibold">NOTRA 24</span>
          </div>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Notra 24. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "var(--muted)" }}>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
