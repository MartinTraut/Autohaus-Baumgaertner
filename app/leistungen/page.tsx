"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Car, Wrench, CreditCard, Shield, Check, Phone } from "lucide-react";
import { SectionHeader } from "@/components/section-header";

export default function LeistungenPage() {
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
              Unsere Leistungen
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rundum-Service für Ihren Fahrzeugkauf
            </h1>
            <p className="text-xl text-white/70">
              Bei uns erhalten Sie mehr als nur ein Fahrzeug. Von der persönlichen Beratung über
              flexible Finanzierung bis zur Garantie – wir begleiten Sie auf dem gesamten Weg.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top Service */}
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
                Top Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                Service, der über den Kauf hinausgeht
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bei Baumgärtner - Kessler endet die Betreuung nicht mit der Fahrzeugübergabe.
                Wir sind auch nach dem Kauf für Sie da – mit professionellem Service durch
                unsere Partner-Werkstatt im Haus.
              </p>
              <ul className="space-y-4">
                {[
                  "Professionelle Wartung und Inspektion",
                  "Reparaturen aller Art durch Fachpersonal",
                  "Schnelle Terminvergabe",
                  "Faire und transparente Preise",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-[#c9a227]" />
                    </div>
                    <span className="text-[#1a1a2e]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="https://baumgaertner-kessler.de/bilder/startseite/unsere-partner/partner-werkstatt-525113.jpg"
                alt="Werkstatt Service"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Fahrzeuge */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src="https://baumgaertner-kessler.de/bilder/Impressionen_2_861367.JPG"
                alt="Premium Fahrzeuge"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] rounded-full text-sm font-medium mb-6">
                <Car size={18} />
                Top Fahrzeuge
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                Hochwertige Gebraucht- und Jahreswagen
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unser Fahrzeugbestand umfasst sorgfältig ausgewählte Jahreswagen und
                Gebrauchtwagen. Jedes Fahrzeug wird vor dem Verkauf gründlich geprüft
                und erhält auf Wunsch neue HU sowie Garantie.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Geprüfte Qualität – jedes Fahrzeug wird inspiziert",
                  "Neue Hauptuntersuchung (HU) auf Wunsch",
                  "Garantie auf alle Fahrzeuge möglich",
                  "Transparente Fahrzeughistorie",
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
                href="/fahrzeuge"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white rounded-lg font-semibold hover:bg-[#1a1a2e]/90 transition-colors"
              >
                Fahrzeugbestand ansehen
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Finanzierung */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/10 text-[#c9a227] rounded-full text-sm font-medium mb-6">
                <CreditCard size={18} />
                Top Finanzierung
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                Flexible Finanzierung für Ihr Wunschfahrzeug
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dank unserer Finanzierungspartner bieten wir Ihnen attraktive Konditionen
                mit niedrigen Zinsen und flexiblen Laufzeiten. Eine Anzahlung ist bei uns
                nicht zwingend erforderlich.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Finanzierung ohne Anzahlung möglich",
                  "Niedrige Zinsen durch starke Partner",
                  "Flexible Laufzeiten nach Ihren Wünschen",
                  "Schnelle und unkomplizierte Abwicklung",
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
                Finanzierung anfragen
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a2e] rounded-2xl p-8 md:p-12"
            >
              <Shield className="w-16 h-16 text-[#c9a227] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Garantie für Ihre Sicherheit
              </h3>
              <p className="text-white/70 mb-6">
                In Zusammenarbeit mit GGG Garantie bieten wir Ihnen umfassenden Schutz
                für Ihr Fahrzeug. So fahren Sie sorgenfrei und gut abgesichert.
              </p>
              <ul className="space-y-3">
                {[
                  "Umfassender Garantieschutz",
                  "Schnelle Schadenabwicklung",
                  "Deutschlandweite Gültigkeit",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <Check size={16} className="text-[#c9a227]" />
                    {item}
                  </li>
                ))}
              </ul>
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
              Überzeugen Sie sich selbst
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Besuchen Sie uns in Heilbronn oder rufen Sie uns an.
              Wir beraten Sie gerne persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07131-60009"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
              >
                <Phone size={20} />
                07131-60009
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
