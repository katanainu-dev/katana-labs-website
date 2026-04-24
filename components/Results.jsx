"use client";

export default function Results() {
  return (
    <div className="results-section reveal" id="work">
      <video
        className="results-video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/samuraihakama.mp4" type="video/mp4" />
      </video>
      <div className="results-video-scrim" />

      <div className="results-inner">
        <div className="results-left">
          <div className="section-eyebrow">作 · UNSERE ERFOLGE</div>
          <h2>
            Was <span className="gray">unsere Kunden</span><br/>
            durch uns <span className="gray">erreichen:</span><br/>
            <span className="red">Wachstum.</span>
          </h2>

          <button
            className="brush-btn"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <svg className="brush-bg" viewBox="0 0 320 120" preserveAspectRatio="none">
              <path
                d="M 12,40 C 28,18 60,12 100,18 C 145,24 180,8 220,14 C 260,20 295,18 312,32 C 318,52 305,72 285,88 C 245,104 200,108 150,102 C 95,96 50,108 22,98 C 4,84 2,62 12,40 Z"
                fill="#ed1c24"
              />
              <circle cx="14" cy="60" r="3" fill="#ed1c24"/>
              <circle cx="306" cy="76" r="2.5" fill="#ed1c24"/>
            </svg>
            <span>LASS UNS REDEN</span>
          </button>

          <div className="results-stats">
            <div>
              <div className="r-stat-num">20<span className="red">J</span></div>
              <div className="r-stat-label">Erfahrung</div>
            </div>
            <div>
              <div className="r-stat-num">10<span className="red">M€</span></div>
              <div className="r-stat-label">Umsatz mit einer Person</div>
            </div>
            <div>
              <div className="r-stat-num">7.5<span className="red">M$</span></div>
              <div className="r-stat-label">Investition für eine Person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
