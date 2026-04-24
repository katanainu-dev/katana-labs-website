function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10"/>
    </svg>
  );
}

const rows = [
  {
    img: "/images/quiz-landing.jpg",
    alt: "",
    title: "Quiz-Landings & Lead Magnets",
    desc: "Zusätzliche leistungsstarke Tools zur automatischen Lead-Generierung und Qualifizierung.",
  },
  {
    img: "/images/praesentation.png",
    alt: "",
    title: "Präsentationsentwicklung",
    desc: "Für deine Dienstleistungen, Produkte, Webinare und Präsentationen.",
  },
  {
    img: "/images/ki-chatbot-voice.png",
    alt: "",
    title: "KI-Avatare & Voice Cloning",
    desc: "Benutzerdefinierte Voice-Modelle für Hotlines, Video-Narrative und mehrsprachige Kampagnen.",
  },
];

export default function AdditionalServices() {
  return (
    <div className="add-bg reveal">
      <div className="add-grid">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">補 · ZUSÄTZLICH</div>
            <h2 className="section-title">
              Zusätzliche <span className="gray">Services.</span>
            </h2>
          </div>
          <div className="section-sub-jp" style={{ color: "rgba(255,255,255,0.45)" }}>
            neben Website-Erstellung<br/>
            bieten wir auch vollständige Services<br/>
            für visuelles Branding
          </div>
        </div>

        {rows.map((row, i) => (
          <div className="add-row" key={i}>
            <div className="add-thumb">
              <img src={row.img} alt={row.alt} />
            </div>
            <div className="add-content">
              <h3>{row.title}</h3>
              <p>{row.desc}</p>
            </div>
            <div className="add-arrow">
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
