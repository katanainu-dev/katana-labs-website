import Link from "next/link";
import Footer from "./Footer";

export default function LegalShell({ eyebrow, title, updated, children }) {
  return (
    <>
      <nav className="nav-wrap">
        <div className="nav">
          <Link href="/" className="brand">KATANA<span className="red">·</span>LABS</Link>
          <Link href="/" className="nav-cta" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)" }}>← Zurück</Link>
        </div>
      </nav>
      <main className="legal-wrap">
        <div className="legal-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="updated">{updated}</p>
        {children}
      </main>
      <Footer />
    </>
  );
}
