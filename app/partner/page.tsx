"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, Shield, Check } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

export default function PartnerPage() {
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
              Unsere Partner
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Starke Partner für Ihre Sicherheit
            </h1>
            <p className="text-xl text-white/70">
              Wir arbeiten mit ausgewählten Partnern zusammen, um Ihnen den bestmöglichen
              Service und höchste Qualität zu bieten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner: AM Fahrzeugtechnik */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] rounded-full text-sm font-medium mb-6">
                <Wrench size={18} />
                Partner-Werkstatt
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                AM Fahrzeugtechnik
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unsere Partner-Werkstatt AM Fahrzeugtechnik befindet sich direkt bei uns vor Ort.
                Hier werden alle Wartungs- und Reparaturarbeiten professionell und zuverlässig durchgeführt.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Professionelle KFZ-Werkstatt vor Ort",
                  "Alle Wartungs- und Reparaturarbeiten",
                  "Erfahrene Fachkräfte",
                  "Faire und transparente Preise",
                  "Schnelle Terminvergabe",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[#c9a227]" />
                    </div>
                    <span className="text-[#1a1a2e]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white rounded-lg font-semibold hover:bg-[#1a1a2e]/90 transition-colors"
              >
                Werkstatt-Termin anfragen
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden bg-[#f5f5f7] flex items-center justify-center p-8"
            >
              <img
                src="https://baumgaertner-kessler.de/bilder/startseite/unsere-partner/partner-werkstatt-525113.jpg"
                alt="AM Fahrzeugtechnik"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner: GGG Garantie */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden bg-white flex items-center justify-center p-8 order-2 lg:order-1"
            >
              <img
                src="https://attachments.cms-genial.de/partners/77165e1756245c2d647ec96a72728657.jpg"
                alt="GGG Garantie"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] rounded-full text-sm font-medium mb-6">
                <Shield size={18} />
                Garantie-Partner
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                GGG Garantie
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In Zusammenarbeit mit GGG Garantie aus Laatzen bieten wir Ihnen umfassenden
                Garantieschutz für Ihr Fahrzeug. So sind Sie auf der sicheren Seite.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Umfassende Garantiepakete verfügbar",
                  "Schutz vor unerwarteten Reparaturkosten",
                  "Schnelle und unkomplizierte Schadenabwicklung",
                  "Deutschlandweite Gültigkeit",
                  "Verschiedene Laufzeiten wählbar",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[#c9a227]" />
                    </div>
                    <span className="text-[#1a1a2e]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
              >
                Garantie anfragen
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
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
              Profitieren Sie von unseren Partnerschaften
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Fragen Sie uns nach Garantie und Werkstatt-Service –
              wir beraten Sie gerne zu allen Möglichkeiten.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
            >
              Jetzt beraten lassen
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
