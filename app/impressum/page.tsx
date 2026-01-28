"use client";

import { motion } from "framer-motion";

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">Impressum</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Firma</h3>
                  <p>
                    Baumgärtner - Kessler Automobile GmbH<br />
                    Heidelberger Str. 142<br />
                    74080 Heilbronn
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Vertreten durch</h3>
                  <p>
                    Sergej Baumgärtner (Geschäftsführer)
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Kontakt</h3>
                  <p>
                    Telefon: 07131-60009<br />
                    Mobil: 0172-2741991 & 0152-31741474<br />
                    E-Mail: Info@baumgaertner-kessler.de
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Umsatzsteuer-ID</h3>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                    DE 14 576 7265
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                  <p>
                    Sergej Baumgärtner<br />
                    Heidelberger Str. 142<br />
                    74080 Heilbronn
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">EU-Streitschlichtung</h3>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9a227] hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p className="mt-2">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                    Tätigkeit hinweisen.
                  </p>
                  <p className="mt-2">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
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
