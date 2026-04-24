"use client";
import { useState } from "react";

const items = [
  { cat: "01 · Character", title: "Miko no Yume", img: "/images/portfolio/poly.png", video: "https://www.youtube.com/watch?v=PN4pmcl_RRY" },
  { cat: "02 · Trailer", title: "Elon on Moon", img: "/images/portfolio/elon.png", video: "https://www.youtube.com/watch?v=tM5c3p2WK2w" },
  { cat: "03 · Animation", title: "Immutable", img: "/images/portfolio/imx.png", video: "https://www.youtube.com/watch?v=f-YYtRyK9TM" },
  { cat: "04 · Spiel Entwicklung", title: "3 Team in Game", img: "/images/portfolio/3er.png", video: "https://www.youtube.com/watch?v=Ibp5EsuAvtU" },
  { cat: "05 · Animation", title: "Katana Inu Samurai", img: "/images/portfolio/ki_samurai.png", video: "https://www.youtube.com/watch?v=Ye9392LhO9s" },
  { cat: "06 · Environment", title: "Battle Royale Map", img: "/images/portfolio/map.png", video: "https://youtu.be/GaKAlsWe2ik" },
  { cat: "07 · Trailer", title: "Outtro", img: "/images/portfolio/trailer.png", video: "https://youtu.be/LG4L11Q0pBk?si=qmv-eSiS28jY8niE&t=172" },
];

const VISIBLE = 4;

export default function Portfolio() {
  const [page, setPage] = useState(0);
  const maxPage = items.length - VISIBLE;

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(maxPage, p + 1));

  const offset = `calc(-${page} * (25% + 5px))`;

  const handleCardClick = (video) => {
    if (video) window.open(video, "_blank", "noopener");
  };

  return (
    <section className="media-section reveal" id="media">
      <div className="media-inner">
        <div className="media-head">
          <div className="section-eyebrow">作品 · PORTFOLIO</div>
          <h2>
            Unsere <span className="red">Klingen.</span>{" "}
            <span className="gray">Im Einsatz.</span>
          </h2>
          <div className="media-head-sub">
            100% aus unserer Schmiede —{" "}
            <span className="no-ai">KEINE KI</span>
          </div>
        </div>

        <div className="media-viewport">
          <button className="media-side-arrow prev" onClick={prev} disabled={page === 0} aria-label="Vorheriges">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="media-side-arrow next" onClick={next} disabled={page >= maxPage} aria-label="Nächstes">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div className="media-track" style={{ transform: `translateX(${offset})` }}>
            {items.map((item, i) => (
              <div
                className="media-card"
                key={i}
                onClick={() => handleCardClick(item.video)}
                style={{ cursor: item.video ? "pointer" : "default" }}
              >
                <img src={item.img} alt={item.title} />
                <div className="media-card-play">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="media-card-info">
                  <div className="media-card-cat">{item.cat}</div>
                  <div className="media-card-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="media-bottom">
          <div className="media-controls">
            <div className="media-counter">
              <span className="current">{String(page + 1).padStart(2, "0")}</span>{" "}
              / <span>{String(maxPage + 1).padStart(2, "0")}</span>
            </div>
            <button className="media-arrow" onClick={prev} disabled={page === 0} aria-label="Vorheriges">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="media-arrow" onClick={next} disabled={page >= maxPage} aria-label="Nächstes">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
          <div className="media-dots">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                className={`media-dot${i === page ? " active" : ""}`}
                onClick={() => setPage(i)}
                aria-label={`Seite ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
