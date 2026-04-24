const tiers = [
  {
    num: "壱 · I",
    name: "LANDINGPAGE",
    sub: "Präsentation · One-Pager",
    priceLabel: "Einmalig",
    price: "750",
    note: "Je nach Aufwand und Komplexität.",
    includes: [
      "Standard-Website mit Firmeninformationen",
      "Foto-Integration & Bildoptimierung",
      "Impressum & Datenschutz",
      "Kontaktformular",
    ],
  },
  {
    num: "弐 · II",
    name: "CHATBOT",
    sub: "Conversational AI",
    priceLabel: "Einmalig",
    price: "1.000",
    note: "Je nach Aufwand und Komplexität.",
    includes: [
      "Einfache Fragen eigenständig beantworten",
      "Integrierte Denk-Logik & Kontextverständnis",
      "Individuelle Antworten auf deine Themen",
      "Lernfähig — passt sich deiner Sprache an",
    ],
  },
  {
    num: "参 · III",
    name: "KI VOICE AGENT",
    sub: "Telefon · 24/7 Erreichbarkeit",
    priceLabel: "Einmalig",
    price: "1.500",
    note: "Je nach Aufwand und Komplexität.",
    includes: [
      "Natürliche Gesprächsführung am Telefon",
      "Beantwortet vordefinierte Fragen zuverlässig",
      "Nahtlose Weiterleitung an echte Mitarbeiter",
      "24/7 Erreichbarkeit, kein verpasster Anruf",
    ],
  },
  {
    num: "肆 · IV",
    name: "PRINTMEDIEN",
    sub: "Flyer · Broschüren · Branding",
    priceLabel: "Paket",
    price: "950",
    note: "Je nach Aufwand und Komplexität.",
    includes: [
      "Visitenkarten — Design & Druckvorlage",
      "Flyer in gewohnter Qualität",
      "Logo-Design als zentrales Element",
      "Einheitliches, übersichtliches Branding",
    ],
  },
];

const monthlyCosts = [
  { label: "KI-Automationsbetrieb", val: "150€", mtl: true },
  { label: "Chatbot Betrieb", val: "99€", mtl: true },
  { label: "Wartung", val: "25€", mtl: true },
  { label: "Hosting", val: "19€", mtl: true },
  { label: "Voice-Agent Laufzeit", val: "nach Volumen", custom: true },
  { label: "Bundle-Rabatt möglich", val: "✓", check: true },
  { label: "Individuelle Konditionen", val: "✓", check: true },
];

export default function Pricing() {
  return (
    <section className="pt-section reveal" id="pricing">
      <div className="pt-inner">
        <div className="pt-head">
          <div className="pt-eyebrow">価格 · TRANSPARENTE PREISE</div>
          <h2 className="pt-title">
            Solide Preise. <span className="gray">Solide Arbeit.</span><br/>
            <span className="red">Kein Budget-Theater.</span>
          </h2>
          <p className="pt-lead">
            Unsere Preise sind fair — fairer, als die meisten denken. Wir setzen auf{" "}
            <strong>Qualität statt Masse</strong> und arbeiten ausschließlich mit renommierten Entwicklern.
            Jedes Projekt ist individuell, deshalb nennen wir bewusst <strong>Ab-Preise</strong>: Ein
            verbindliches Angebot erstellen wir nach einem kurzen Gespräch über Umfang, Funktionen und Ziele.
          </p>
        </div>

        <div className="pt-grid">
          {tiers.map((t) => (
            <div className="pt-tier" key={t.num}>
              <div className="pt-tier-num">{t.num}</div>
              <div className="pt-tier-name">{t.name}</div>
              <div className="pt-tier-sub">{t.sub}</div>
              <div className="pt-price-block">
                <div className="pt-price-label">{t.priceLabel}</div>
                <div className="pt-price">
                  <span className="pt-ab">AB</span>
                  {t.price}
                  <span className="pt-euro">€</span>
                </div>
                <div className="pt-note">{t.note}</div>
                <div className="pt-includes">
                  <div className="pt-includes-label">★ AB START</div>
                  <ul>
                    {t.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-philosophy">
          <div className="pt-phil-left">
            <h3>
              Alles aus einer Hand —<br/>
              <em>deine Klinge, maßgeschneidert.</em>
            </h3>
            <p>
              Eine Website kann <strong>750 €</strong> kosten oder <strong>10.000 €+</strong> — je nachdem,
              was du brauchst: mit oder ohne Video, mit oder ohne KI-generierte Inhalte, mit CRM-Anbindung,
              Automationen, Chatbot oder KI-Stimme, die deine Anrufe annimmt, qualifiziert und Termine
              direkt in den Kalender einträgt.
            </p>
            <p>
              Ob <strong>kleines Unternehmen oder etablierter Brand</strong> — wir unterstützen dich durch
              die gesamte Entwicklung. Strategie, Design, Entwicklung, Content, Integration, Launch. Kein
              Agentur-Pingpong, keine Schnittstellen-Gebastel.
            </p>
            <p>
              Du sagst uns, <strong>was du erreichen willst</strong> — wir sagen dir,{" "}
              <strong>was es kostet</strong> und <strong>wie wir dorthin kommen</strong>.
            </p>
          </div>

          <div className="pt-phil-right">
            <div className="pt-phil-right-title">料 · LAUFENDE KOSTEN</div>
            {monthlyCosts.map((row, i) => (
              <div className="pt-bullet" key={i}>
                <span className="pt-bullet-label">{row.label}</span>
                <span
                  className="pt-bullet-val"
                  style={
                    row.custom
                      ? { fontSize: "16px", color: "rgba(255,255,255,0.75)" }
                      : row.check
                      ? { color: "var(--red)" }
                      : {}
                  }
                >
                  {row.mtl ? (
                    <>
                      <span className="ab">AB</span>
                      {row.val}
                      <span className="mtl">/ MTL.</span>
                    </>
                  ) : (
                    row.val
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-footnote">
          <div className="pt-footnote-icon">束</div>
          <div className="pt-footnote-text">
            <strong>Bundle-Angebote auf Anfrage.</strong> Kombinierst du Website, KI-Chat, Voice-Agent
            und CRM — erstellen wir dir ein individuelles Paket mit Preisvorteil. Sprich uns an, wir
            rechnen ehrlich.
          </div>
          <a href="#contact" className="pt-footnote-cta">ANGEBOT ANFRAGEN →</a>
        </div>
      </div>
    </section>
  );
}
