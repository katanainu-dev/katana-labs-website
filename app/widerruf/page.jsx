import LegalShell from "@/components/LegalShell";
import Link from "next/link";

export const metadata = { title: "Widerrufsrecht — Katana Labs" };

export default function Widerruf() {
  return (
    <LegalShell eyebrow="解 · WIDERRUF" title="Widerrufsrecht" updated="Stand: April 2026 · Gilt ausschließlich für Verbraucher i. S. d. § 13 BGB">
      <p>Verbrauchern steht ein gesetzliches Widerrufsrecht nach Maßgabe der nachfolgenden Bestimmungen zu. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu einem Zweck abschließt, der überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann.</p>
      <p><strong>Gegenüber Unternehmern besteht kein Widerrufsrecht.</strong></p>

      <h2>Widerrufsbelehrung</h2>

      <h3>Widerrufsrecht</h3>
      <p>Du hast das Recht, binnen <strong>vierzehn Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
      <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
      <p>Um dein Widerrufsrecht auszuüben, musst du uns</p>
      <p style={{ marginLeft: 20 }}>
        <strong>ChainVision Games FZCO</strong>
        <br />
        E-Mail: <a href="mailto:info@katanalabs.de">info@katanalabs.de</a>
      </p>
      <p>mittels einer eindeutigen Erklärung (z. B. Brief oder E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das untenstehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
      <p>Zur Wahrung der Frist reicht es, die Mitteilung vor Fristablauf abzusenden.</p>

      <h3>Folgen des Widerrufs</h3>
      <p>Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab Eingang deiner Widerrufsmitteilung zurückzuzahlen.</p>
      <p>Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel wie bei der ursprünglichen Transaktion, sofern nicht ausdrücklich etwas anderes vereinbart wurde. Es entstehen dir hierfür keine Entgelte.</p>
      <p>Hast du verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, hast du uns einen angemessenen Betrag für die bis zum Widerruf bereits erbrachten Leistungen zu zahlen.</p>

      <h2>Vorzeitiges Erlöschen des Widerrufsrechts</h2>
      <p>Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung begonnen wurde, nachdem du ausdrücklich zugestimmt und bestätigt hast, dass du dein Widerrufsrecht bei vollständiger Vertragserfüllung verlierst (§ 356 Abs. 4 BGB).</p>
      <p>Bei Verträgen über digitale Inhalte (Designs, Code, Mediendateien) erlischt das Widerrufsrecht ebenfalls, wenn wir mit der Ausführung begonnen haben, nachdem du ausdrücklich zugestimmt hast und bestätigt hast, dass du dein Widerrufsrecht mit Beginn der Ausführung verlierst (§ 356 Abs. 5 BGB).</p>

      <h2>Muster-Widerrufsformular</h2>
      <p style={{ opacity: 0.75, fontSize: 14, fontStyle: "italic" }}>(Wenn du den Vertrag widerrufen willst, fülle bitte dieses Formular aus und sende es zurück.)</p>
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: 24,
        margin: "20px 0",
        fontFamily: "'Inter',monospace",
        fontSize: 14,
        lineHeight: 1.9,
        color: "#c7c8d0",
      }}>
        An:<br />
        <strong>ChainVision Games FZCO</strong><br />
        E-Mail: info@katanalabs.de<br /><br />
        Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag<br />
        über die Erbringung der folgenden Dienstleistung (*):<br />
        ____________________________________________________<br /><br />
        Bestellt am (*)/erhalten am (*): ________________<br />
        Name des/der Verbraucher(s): ________________<br />
        Anschrift des/der Verbraucher(s): ________________<br />
        Unterschrift (nur bei Mitteilung auf Papier): ________________<br />
        Datum: ________________<br /><br />
        <span style={{ opacity: 0.6 }}>(*) Unzutreffendes streichen.</span>
      </div>

      <h2>Hinweis</h2>
      <p>Diese Widerrufsbelehrung gilt ausschließlich für Verbraucher. Für Unternehmer (B2B) besteht kein gesetzliches Widerrufsrecht. Maßgeblich sind insoweit unsere <Link href="/agb">Allgemeinen Geschäftsbedingungen</Link>.</p>
    </LegalShell>
  );
}
