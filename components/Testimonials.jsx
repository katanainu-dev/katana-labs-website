const testimonials = [
  {
    initials: "SK",
    name: "Sandra Kraft",
    role: "CMO · Phase Neun",
    quote:
      "Wir hatten vorher drei Agenturen — keine hat das Tempo und Verständnis von VISIBITLY erreicht. Unser CRM läuft endlich so wie wir es brauchen.",
  },
  {
    initials: "MB",
    name: "Marco Bauer",
    role: "Founder · Fiori GmbH",
    quote:
      "Der KI-KI Automation hat unsere Support-Kosten um 64% gesenkt und gleichzeitig die CSAT-Werte verbessert. Verrückt, was möglich ist.",
  },
  {
    initials: "JR",
    name: "Julia Renner",
    role: "CEO · Kairos Labs",
    quote:
      "Vom ersten Pitch bis zum Launch waren es 6 Wochen. Die neue Website hat unsere Lead-Quote in den ersten 30 Tagen verdreifacht.",
  },
];

export default function Testimonials() {
  return (
    <section className="block reveal" id="testimonials">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">声 · KUNDENSTIMMEN</div>
          <h2 className="section-title">
            Vertrauen, das wir uns <span className="red">verdient.</span>
          </h2>
        </div>
      </div>

      <div className="testi-grid">
        {testimonials.map((t) => (
          <div className="testi" key={t.initials}>
            <div className="stars">★★★★★</div>
            <p className="testi-q">{t.quote}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
