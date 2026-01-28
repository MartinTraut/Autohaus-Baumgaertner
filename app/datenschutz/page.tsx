"use client";

import { motion } from "framer-motion";

export default function DatenschutzPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">Datenschutzerklärung</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              <div className="space-y-10 text-muted-foreground">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">1. Datenschutz auf einen Blick</h2>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                    Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                    denen Sie persönlich identifiziert werden können.
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Datenerfassung auf dieser Website</h3>
                  <p className="font-medium text-[#1a1a2e]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                  <p className="mt-2">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                  </p>
                  <p className="mt-2">
                    Baumgärtner - Kessler Automobile GmbH<br />
                    Heidelberger Str. 142<br />
                    74080 Heilbronn<br />
                    Telefon: 07131-60009<br />
                    E-Mail: Info@baumgaertner-kessler.de
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">2. Hosting</h2>
                  <p>
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                    die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann
                    es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                    Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                    Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                    sowie dieser Datenschutzerklärung.
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="mt-2">
                    Baumgärtner - Kessler Automobile GmbH<br />
                    Sergej Baumgärtner<br />
                    Heidelberger Str. 142<br />
                    74080 Heilbronn<br />
                    E-Mail: Info@baumgaertner-kessler.de
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p>
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                    Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                    der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Recht auf Datenübertragbarkeit</h3>
                  <p>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                    Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                    maschinenlesbaren Format aushändigen zu lassen.
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Auskunft, Löschung und Berichtigung</h3>
                  <p>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
                    der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
                  <p>
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">4. Datenerfassung auf dieser Website</h2>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Kontaktformular</h3>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                    wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                    Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                    auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                    Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p>
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller
                    daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                    Anliegens bei uns gespeichert und verarbeitet.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">5. Externe Dienste</h2>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">Google Maps</h3>
                  <p>
                    Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland
                    Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google
                    Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel
                    an einen Server von Google in den USA übertragen und dort gespeichert.
                  </p>
                  <p className="mt-2">
                    Die Karte wird erst nach Ihrer ausdrücklichen Einwilligung geladen.
                  </p>

                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 mt-6">mobile.de Integration</h3>
                  <p>
                    Für die Anzeige unseres Fahrzeugbestandes nutzen wir eine Verlinkung zu mobile.de.
                    Beim Besuch von mobile.de gelten die dortigen Datenschutzbestimmungen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
                  <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                    wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                    SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                    Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm">
                    Stand: Januar 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
