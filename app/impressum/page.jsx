import LegalShell from "@/components/LegalShell";
import Link from "next/link";

export const metadata = {
  title: "Impressum — Katana Labs",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <LegalShell eyebrow="法 · LEGAL" title="Impressum" updated="Stand: April 2026">
      <h2>Anbieter</h2>
      <img className="anbieter-img" src="/images/impressum-anbieter.png" alt="Anbieterangaben" />
      <p className="anbieter-note">Anbieterangaben werden aus Datenschutzgründen als Grafik angezeigt.</p>

      <h2>Rechtsform</h2>
      <p>Free Zone Company (FZCO) mit Sitz in den Vereinigten Arabischen Emiraten.</p>
      <p>Lizenziert durch die Dubai Silicon Oasis Authority (DSOA).</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:info@katanalabs.de">info@katanalabs.de</a>
        <br />
        Web: <Link href="/">katanalabs.de</Link>
      </p>

      <h2>Vertretungsberechtigt</h2>
      <p>Der jeweilige Geschäftsführer (Manager) gemäß Handelslizenz. Auskunft auf schriftliche Anfrage per E-Mail.</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Die Geschäftsleitung der ChainVision Games FZCO, erreichbar unter der oben genannten E-Mail-Adresse.</p>

      <h2>Umsatzsteuer</h2>
      <p>Da der Anbieter seinen Sitz außerhalb der Europäischen Union hat, wird gemäß § 13b UStG bei Leistungen an Unternehmen in der EU das Reverse-Charge-Verfahren angewendet. Eine deutsche Umsatzsteuer-Identifikationsnummer wird daher nicht ausgewiesen.</p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die du unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a> findest.</p>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Haftung für Inhalte</h2>
      <p>Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
      <p>Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

      <h2>Haftung für Links</h2>
      <p>Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

      <h2>Urheberrecht</h2>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors.</p>
    </LegalShell>
  );
}
