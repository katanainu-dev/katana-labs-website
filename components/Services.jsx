import Image from "next/image";
import ScrollOverlay from "@/components/ScrollOverlay";

const services = [
  {
    num: "01",
    cat: "Webseiten & SEO",
    title: "Modernes Webdesign & SEO",
    desc: "Handgesetzte Websites mit Charakter — kein Template, kein 0815. Pixel-perfekte Umsetzung, Mobile-First, blitzschnell. On-Page SEO, technische Optimierung, Core Web Vitals & strukturierte Daten inklusive — damit Google dich findet, bevor es die Konkurrenz tut.",
    img: "/images/webdesign.jpg",
    alt: "Webdesign Workspace",
  },
  {
    num: "02",
    cat: "KI & Automation",
    title: "KI - Chat & Stimme AI",
    desc: "Intelligente Assistenten, die qualifizieren, beraten und verkaufen — 24/7, mehrsprachig, trainiert auf deine Marke. Sprach-Agenten, die telefonieren, Termine buchen und Anfragen screenen. Integration in WhatsApp, Web & CRM inklusive.",
    img: "/images/ki-chatbot-voice.png",
    alt: "KI Chatbot & Stimme",
  },
  {
    num: "03",
    cat: "Produktentwicklung",
    title: "Apps & SaaS",
    desc: "Von MVP bis Scale: Web-Apps, Mobile, Dashboards, SaaS-Plattformen — produktionsreif, wartbar, skalierbar. Stack nach Wahl: React, Next.js, Swift, Flutter.",
    img: "/images/apps-saas.png",
    alt: "Apps & SaaS",
  },
  {
    num: "04",
    cat: "CMS",
    title: "WordPress & CMS",
    desc: "Maßgeschneiderte WordPress-Themes, Headless-CMS, Editor-Workflows — schnell, sicher, SEO-fest. Du pflegst Inhalte selbst, wir sorgen für die Technik im Hintergrund.",
    img: "/images/samurai - Kopie.png",
    alt: "WordPress & CMS",
  },
  {
    num: "05",
    cat: "Workflows",
    title: "CRM & Automation",
    desc: "CRM-Setup, Lead-Pipelines, Workflow-Automation — HubSpot, Salesforce oder Custom. Kein Tool-Chaos mehr, alle Daten fließen dorthin, wo sie Umsatz erzeugen.",
    img: "/images/crm-automation.png",
    alt: "CRM & Automation",
  },
  {
    num: "06",
    cat: "Präsentation",
    title: "Präsentationsentwicklung",
    desc: "Professionelle Präsentationen für Produkte, Services, Webinare und Pitch-Decks — designed um zu überzeugen.",
    img: "/images/praesentation.png",
    alt: "Präsentation",
  },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10"/>
    </svg>
  );
}

export default function Services() {
  return (
    <>
      {/* Under-hero strip */}
      <div className="hero-undertitle">
        <div className="hero-undertitle-inner">
          <span className="logo-mark">武</span>
          <h2>
            Nicht nur Websites —<br/>
            <span className="dim">sondern</span> Werkzeuge <span className="dim">die</span>{" "}
            <span className="red">Umsatz bringen.</span>
          </h2>
          <div className="jp-side">
            勝者の道あなたの物語を形に<br/>
            強さは静けさの中にある<br/>
            戦う理由を持て
          </div>
        </div>
      </div>

      {/* Ink Banner before Services */}
      <ScrollOverlay>
      <section
        className="reveal"
        style={{
          padding: "160px 36px",
          background:
            "linear-gradient(180deg, rgba(8,8,10,0.45) 0%, rgba(8,8,10,0.15) 40%, rgba(8,8,10,0.55) 100%), url('/images/samurai.png') center/cover no-repeat, #08080a",
          backgroundAttachment: "scroll, fixed, scroll",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "560px",
        }}
      >
        <div style={{ maxWidth: "900px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "15px",
              letterSpacing: "0.3em",
              color: "var(--red)",
              marginBottom: "32px",
              textTransform: "uppercase",
            }}
          >
            技 · HANDWERK &amp; MEISTERSCHAFT
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 5.6vw, 72px)",
              letterSpacing: "0.02em",
              lineHeight: "1.15",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "var(--red)" }}>Viele Meister in unserer Schmiede</span>
            <br/>
            <span style={{ color: "#fff" }}>formen jede</span>{" "}
            <span style={{ color: "var(--red)" }}>Disziplin –</span>
          </h2>
          <p
            style={{
              fontFamily: "'Shippori Mincho', serif",
              fontStyle: "italic",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "18px",
            }}
          >
            so präzise und scharf wie die Klinge eines Samurai.
          </p>
          <p
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "15px",
              color: "var(--red)",
              letterSpacing: "0.12em",
            }}
          >
            コンピューターの時代
          </p>
        </div>
      </section>
      </ScrollOverlay>

      {/* Services Grid */}
      <div className="svc-bg">
        <section className="block reveal" id="services">
          <span className="svc-bg-kanji">蛇</span>
          <div className="section-head">
            <div>
              <div className="section-eyebrow">技 · WAS WIR SCHMIEDEN</div>
              <h2 className="section-title">
                Sechs Disziplinen. <span className="gray">Ein</span>{" "}
                <span className="red">Ziel.</span>
              </h2>
              <div
                style={{
                  fontFamily: "'Shippori Mincho', serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "12px",
                }}
              >
                六つの道 · 一つの目標
              </div>
            </div>
            <div className="section-sub-jp" style={{ color: "rgba(255,255,255,0.45)" }}>
              强さは静けさの中にある<br/>
              戦う理由を持て
            </div>
          </div>

          <div className="svc-stack">
            {services.map((s) => (
              <div className="svc-row" key={s.num}>
                <div className="svc-thumb">
                  <img src={s.img} alt={s.alt} />
                </div>
                <div className="svc-body">
                  <div>
                    <div className="svc-eyebrow-txt">
                      <span className="svc-num-txt">{s.num}</span> · {s.cat}
                    </div>
                    <h3 style={{ fontSize: "23px", letterSpacing: "0.08em", fontWeight: 300 }}>
                      {s.title}
                    </h3>
                    <p className="svc-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
