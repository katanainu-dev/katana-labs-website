const cards = [
  {
    cat: "Gaming",
    sub: "Development",
    title: "Gaming Entwicklung",
    desc: "Web-basierte Games, Interactive Storytelling, Gamification-Systeme mit AAA-Qualität.",
    img: "/images/gaming.jpg",
    alt: "Gaming",
    emoji: "🎮",
  },
  {
    cat: "3D",
    sub: "Character Design",
    title: "3D Character Design",
    desc: "Benutzerdefinierte 3D-Charaktere für Avatare, Mascots und Branding.",
    img: "/images/3d-character.jpg",
    alt: "3D Character",
    emoji: "🎭",
  },
  {
    cat: "3D",
    sub: "Animation & Motion",
    title: "3D Animation & Motion",
    desc: "Cinematic 3D-Animationen für Produkte, Explainer-Videos und Web-Experiences.",
    img: "/images/3d-animation.jpg",
    alt: "3D Animation",
    emoji: "✨",
  },
];

export default function GamingSection() {
  return (
    <section className="gaming-section reveal">
      <div className="gaming-inner">
        <div className="gaming-head">
          <div className="gaming-eyebrow">
            <span />
            🎮 · GAMING &amp; ANIMATION
            <span />
          </div>
          <h2 className="gaming-h2">
            Gaming &amp; <span className="red">Animation.</span>
          </h2>
        </div>

        <div className="gaming-grid">
          {cards.map((c) => (
            <div className="gaming-card" key={c.title}>
              <div className="gaming-img-wrap">
                <img src={c.img} alt={c.alt} />
              </div>
              <div className="gaming-cat">{c.emoji} · {c.cat}</div>
              <div className="gaming-sub">{c.sub}</div>
              <h3 className="gaming-title">{c.title}</h3>
              <p className="gaming-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
