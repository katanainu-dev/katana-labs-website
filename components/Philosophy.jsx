import ScrollOverlay from "@/components/ScrollOverlay";

const values = [
  {
    kanji: "精",
    title: "Präzision",
    desc: "Jede Zeile Code, jedes Pixel, jede Farbe — mit Absicht gesetzt. Kein Template-Rauschen, kein Bloat. Nur was dient.",
  },
  {
    kanji: "忍",
    title: "Disziplin",
    desc: "Deadlines sind Schwertschläge: sauber, entschlossen, pünktlich. Wir liefern, während andere noch diskutieren.",
  },
  {
    kanji: "勝",
    title: "Wirkung",
    desc: "Schöne Sites gibt es genug. Wir bauen Werkzeuge, die messbar Umsatz, Leads und Sichtbarkeit bringen.",
  },
];

export default function Philosophy() {
  return (
    <>
      {/* Ink Banner */}
      <ScrollOverlay>
      <section className="ink-banner reveal">
        <div className="ink-banner-inner">
          <div className="ink-eyebrow">戦 · DER KAMPF UM AUFMERKSAMKEIT</div>
          <h2>
            Im Schlachtfeld der Algorithmen —<br/>
            <span className="red">führen wir deine Marke</span>{" "}
            <em>zum Sieg.</em>
          </h2>
          <p>
            Zehntausend Mitbewerber, du sollst hervorstechen! Nur wer scharfkantig auftritt, überlebt.
            Wir schmieden dir die Klinge.
          </p>
          <div className="jp-caption">勝者の道 · der Weg des Siegers</div>
        </div>
      </section>
      </ScrollOverlay>

      {/* Philosophy / Bushido */}
      <section className="philosophy reveal" id="philosophy">
        <span className="philosophy-kanji">道</span>
        <div className="philosophy-inner">
          <div className="philosophy-head">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              道 · UNSER CODEX
            </div>
            <h2>
              Bushidō <span className="red">Digital.</span>
              <em>武士道 · der Weg des Kriegers</em>
            </h2>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-portrait">
              <img src="/images/samurai-duo.png" alt="Krieger weiß" />
              <span className="pp-kanji">精</span>
              <div className="pp-label">
                Präzision
                <small>精 · SEI</small>
              </div>
            </div>

            <div className="philosophy-values">
              {values.map((v) => (
                <div className="value-card" key={v.kanji}>
                  <div className="value-kanji">{v.kanji}</div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="philosophy-portrait">
              <img src="/images/samurai-female.png" alt="Krieger dunkel" />
              <span className="pp-kanji">勝</span>
              <div className="pp-label">
                Wirkung
                <small>勝 · SHŌ</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
