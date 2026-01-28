"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";

export default function KontaktPage() {
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
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wir freuen uns auf Sie
            </h1>
            <p className="text-xl text-white/70">
              Haben Sie Fragen zu unseren Fahrzeugen oder Leistungen?
              Kontaktieren Sie uns – wir sind gerne für Sie da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-8">
                Baumgärtner - Kessler Automobile GmbH
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Heidelberger Str. 142<br />
                      74080 Heilbronn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:07131-60009" className="hover:text-[#c9a227] transition-colors">
                        07131-60009
                      </a>
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Mobil:{" "}
                      <a href="tel:0172-2741991" className="hover:text-[#c9a227] transition-colors">
                        0172-2741991
                      </a>{" "}
                      &{" "}
                      <a href="tel:0152-31741474" className="hover:text-[#c9a227] transition-colors">
                        0152-31741474
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:Info@baumgaertner-kessler.de" className="hover:text-[#c9a227] transition-colors">
                        Info@baumgaertner-kessler.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#c9a227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">Öffnungszeiten</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mo – Fr: 08:00 – 18:00 Uhr</p>
                      <p>Sa: 08:00 – 14:00 Uhr</p>
                      <p>So: geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team */}
              <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-[#1a1a2e] mb-4">An- und Verkauf</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-[#1a1a2e]">Sergej Baumgärtner</p>
                    <a href="tel:0172-2741991" className="text-sm text-[#c9a227] hover:underline">
                      0172-2741991
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a2e]">Artur Kessler</p>
                    <a href="tel:0152-31741474" className="text-sm text-[#c9a227] hover:underline">
                      0152-31741474
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/b_k_automobile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-white hover:bg-[#c9a227] transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
            >
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Schreiben Sie uns</h2>
              <p className="text-muted-foreground mb-8">
                Wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Schnellzugriff"
            description="Wählen Sie direkt die passende Option für Ihr Anliegen."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/anfrage"
                className="block bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-[#c9a227]/30 transition-all group"
              >
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#c9a227] transition-colors">
                  Allgemeine Anfrage
                </h3>
                <p className="text-muted-foreground mb-4">
                  Fragen zu Fahrzeugen, Finanzierung oder Service
                </p>
                <span className="text-[#c9a227] font-medium flex items-center gap-1">
                  Zum Formular
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/ankauf"
                className="block bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-[#c9a227]/30 transition-all group"
              >
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#c9a227] transition-colors">
                  Fahrzeug verkaufen
                </h3>
                <p className="text-muted-foreground mb-4">
                  Kostenloses Ankaufangebot erhalten
                </p>
                <span className="text-[#c9a227] font-medium flex items-center gap-1">
                  Zum Ankauf
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/anfahrt"
                className="block bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-[#c9a227]/30 transition-all group"
              >
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 group-hover:text-[#c9a227] transition-colors">
                  Anfahrt planen
                </h3>
                <p className="text-muted-foreground mb-4">
                  So finden Sie uns in Heilbronn
                </p>
                <span className="text-[#c9a227] font-medium flex items-center gap-1">
                  Zur Anfahrt
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
