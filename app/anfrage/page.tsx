"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function AnfragePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm font-medium mb-6">
              Anfrage
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ihre Anfrage an uns
            </h1>
            <p className="text-xl text-white/70">
              Ob Fahrzeuganfrage, Probefahrt, Finanzierung oder allgemeine Fragen –
              wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border"
            >
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">
                Kontaktformular
              </h2>
              <p className="text-muted-foreground mb-8">
                Bitte füllen Sie das Formular aus. Wir antworten in der Regel innerhalb eines Werktages.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <Phone className="w-12 h-12 text-[#c9a227] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
                  Lieber telefonisch?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Rufen Sie uns an – wir sind während der Öffnungszeiten erreichbar.
                </p>
                <a
                  href="tel:07131-60009"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white rounded-lg font-semibold hover:bg-[#1a1a2e]/90 transition-colors"
                >
                  <Phone size={18} />
                  07131-60009
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1a1a2e] rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Fahrzeug verkaufen?
                </h3>
                <p className="text-white/70 mb-6">
                  Nutzen Sie unser spezielles Ankauf-Formular für ein schnelles Angebot.
                </p>
                <Link
                  href="/ankauf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
                >
                  Zum Ankauf
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
