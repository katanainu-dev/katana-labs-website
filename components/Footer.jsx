import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src="/images/katanalabslogo.jpg" alt="Katana Labs" style={{height:"70px",width:"auto",display:"block"}} />
            </div>
            <p>
              Wir bauen digitale Erlebnisse, die Marken voranbringen — von der Idee bis zum Live-Launch
              und darüber hinaus.
            </p>
            <div className="jp-quote">「品質 · 速度 · 名誉」</div>
          </div>

          <div className="footer-col">
            <h4>LEISTUNGEN</h4>
            <Link href="#services">KI-Stimmen</Link>
            <Link href="#services">KI Automations</Link>
            <Link href="#services">Webdesign</Link>
            <Link href="#services">CRM Systeme</Link>
            <Link href="#services">WordPress</Link>
          </div>

          <div className="footer-col">
            <h4>STUDIO</h4>
            <Link href="#philosophy">Über uns</Link>
            <Link href="#contact">Kontakt</Link>
          </div>

          <div className="footer-col">
            <h4>RESSOURCEN</h4>
            <Link href="#work">Fallstudien</Link>
          </div>

          <div className="footer-col">
            <h4>LEGAL</h4>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/agb">AGB</Link>
            <Link href="/widerruf">Widerrufsrecht</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Katana Labs · Powered by ChainVision Games FZCO</div>
          <div className="socials">
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2H21l-6.51 7.44L22 22h-6.79l-4.62-6.05L5.27 22H2.51l6.96-7.96L2 2h6.92l4.18 5.53L18.244 2zm-1.19 18h1.83L7.04 4H5.07l11.984 16z"/>
              </svg>
            </a>
            <a href="#" aria-label="Behance">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5h6c2 0 3.5 1 3.5 3 0 1.3-.7 2.2-2 2.5 1.6.3 2.5 1.4 2.5 3 0 2-1.5 3.5-4 3.5H3V5z"/>
                <line x1="15" y1="7" x2="21" y2="7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
