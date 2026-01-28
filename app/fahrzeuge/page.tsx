"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Shield, Phone } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

export default function FahrzeugePage() {
  const [consentGiven, setConsentGiven] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm font-medium mb-6">
              Fahrzeugbestand
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unsere aktuellen Fahrzeuge
            </h1>
            <p className="text-xl text-white/70">
              Entdecken Sie unsere Auswahl an hochwertigen Jahreswagen und Gebrauchtwagen.
              Alle Fahrzeuge sind geprüft und auf Wunsch mit Garantie erhältlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-[#f5f5f7] border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, text: "Garantie auf alle Fahrzeuge" },
              { icon: Shield, text: "Neue HU auf Wunsch" },
              { icon: Shield, text: "Finanzierung möglich" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#1a1a2e]">
                <item.icon size={20} className="text-[#c9a227]" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Stock Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Fahrzeugbestand"
            description="Unser aktueller Fahrzeugbestand wird über mobile.de gepflegt. Klicken Sie auf den Button, um alle verfügbaren Fahrzeuge zu sehen."
          />

          {!consentGiven ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center"
            >
              <div className="w-20 h-20 bg-[#f5f5f7] rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink size={32} className="text-[#1a1a2e]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                Externe Inhalte laden
              </h3>
              <p className="text-muted-foreground mb-6">
                Um unseren Fahrzeugbestand anzuzeigen, werden Daten von externen Diensten
                (mobile.de) geladen. Mit Klick auf &quot;Bestand anzeigen&quot; stimmen Sie der
                Datenübertragung zu. Mehr dazu in unserer{" "}
                <Link href="/datenschutz" className="text-[#c9a227] hover:underline">
                  Datenschutzerklärung
                </Link>.
              </p>
              <button
                onClick={() => setConsentGiven(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
              >
                Bestand anzeigen
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                  Zum Fahrzeugbestand
                </h3>
                <p className="text-muted-foreground mb-6">
                  Unser kompletter Fahrzeugbestand ist auf mobile.de verfügbar.
                  Klicken Sie auf den Button, um alle aktuellen Angebote zu sehen.
                </p>
                <a
                  href="https://www.mobile.de/haendler/Baumgaertner-Kessler-Automobile-GmbH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
                >
                  Bestand auf mobile.de ansehen
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Sample Vehicles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#f5f5f7]">
                      <img
                        src={`https://baumgaertner-kessler.de/bilder/Impressionen_${(i % 6) + 1}_861372.JPG`}
                        alt={`Fahrzeug ${i}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#1a1a2e] mb-1">Premium Fahrzeug</h3>
                      <p className="text-sm text-muted-foreground mb-3">Geprüft · Mit Garantie</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#c9a227]">Preis auf Anfrage</span>
                        <Link
                          href="/anfrage"
                          className="text-sm text-[#1a1a2e] font-medium hover:text-[#c9a227] transition-colors"
                        >
                          Anfragen
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Das passende Fahrzeug nicht gefunden?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Teilen Sie uns Ihre Wünsche mit – wir finden das passende Fahrzeug für Sie
              oder informieren Sie, sobald es verfügbar ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/anfrage"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
              >
                Wunschfahrzeug anfragen
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:07131-60009"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                <Phone size={20} />
                07131-60009
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
