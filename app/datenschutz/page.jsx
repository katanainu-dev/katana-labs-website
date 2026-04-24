import LegalShell from "@/components/LegalShell";
import Link from "next/link";

export const metadata = { title: "Datenschutz — Katana Labs" };

export default function Datenschutz() {
  return (
    <LegalShell eyebrow="守 · DATENSCHUTZ" title="Datenschutzerklärung" updated="Stand: April 2026">
      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist der im <Link href="/impressum">Impressum</Link> genannte Anbieter. Kontakt: <a href="mailto:info@katanalabs.de">info@katanalabs.de</a>.</p>

      <h2>2. Allgemeines</h2>
      <p>Wir nehmen den Schutz deiner personenbezogenen Daten sehr ernst. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben. Die Verarbeitung erfolgt im Einklang mit der DSGVO und dem BDSG.</p>

      <h2>3. Server-Logs</h2>
      <p>Beim Besuch unserer Website werden durch unseren Hosting-Provider technisch notwendige Daten erfasst:</p>
      <ul>
        <li>IP-Adresse (gekürzt / anonymisiert)</li>
        <li>Datum und Uhrzeit der Anfrage</li>
        <li>Aufgerufene Seite / Datei</li>
        <li>Referrer-URL</li>
        <li>Browser-Typ und Betriebssystem</li>
      </ul>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: maximal 30 Tage.</p>

      <h2>4. Kontaktformular & E-Mail</h2>
      <p>Wenn du uns über das Kontaktformular oder per E-Mail Anfragen zukommen lässt, werden deine Angaben (Name, Firma, E-Mail, Anfrage) zwecks Bearbeitung verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2>5. Cookies</h2>
      <p>Diese Website verwendet ausschließlich technisch notwendige Cookies. Es findet kein Tracking, kein Profiling und keine Übertragung an Dritte statt.</p>

      <h2>6. Google Fonts</h2>
      <p>Diese Website nutzt zur einheitlichen Darstellung Schriftarten von Google Fonts. Beim Aufruf wird eine Verbindung zu Servern von Google LLC hergestellt, wodurch deine IP-Adresse übermittelt wird. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>

      <h2>7. Hosting</h2>
      <p>Unsere Website wird bei einem Drittanbieter gehostet. Mit dem Provider besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.</p>

      <h2>8. Drittlandtransfer</h2>
      <p>Da unser Anbieter seinen Sitz in den Vereinigten Arabischen Emiraten hat, kann es zur Übermittlung personenbezogener Daten in ein Drittland kommen. Übermittlungen erfolgen ausschließlich auf Grundlage geeigneter Garantien (Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO) sowie ergänzender Schutzmaßnahmen.</p>

      <h2>9. Deine Rechte</h2>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch (Art. 21 DSGVO)</li>
        <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>Zur Ausübung genügt eine formlose E-Mail an <a href="mailto:info@katanalabs.de">info@katanalabs.de</a>.</p>

      <h2>10. SSL-Verschlüsselung</h2>
      <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.</p>

      <h2>11. Änderungen</h2>
      <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
    </LegalShell>
  );
}
