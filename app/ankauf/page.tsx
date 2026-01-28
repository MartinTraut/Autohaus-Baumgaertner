"use client";

import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { AnkaufForm } from "@/components/ankauf-form";

export default function AnkaufPage() {
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
              Fahrzeugankauf
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wir kaufen Ihr Fahrzeug
            </h1>
            <p className="text-xl text-white/70">
              Schnell, fair und unkompliziert. Erhalten Sie ein kostenloses Ankaufangebot
              für Ihr Fahrzeug – ganz ohne Verpflichtung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Faire Preise",
              "Schnelle Abwicklung",
              "Sofortige Auszahlung",
              "Kostenlose Bewertung",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-[#c9a227] flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <span className="font-medium text-[#1a1a2e]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ankauf-Formular"
            description="Beantworten Sie einfach ein paar Fragen zu Ihrem Fahrzeug. Wir melden uns innerhalb von 24 Stunden mit einem Angebot."
          />

          <AnkaufForm />
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">
              Lieber persönlich?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Rufen Sie uns an oder kommen Sie vorbei – wir bewerten Ihr Fahrzeug
              gerne direkt vor Ort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07131-60009"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-lg font-semibold hover:bg-[#1a1a2e]/90 transition-colors"
              >
                <Phone size={20} />
                07131-60009
              </a>
              <a
                href="tel:0172-2741991"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a1a2e] rounded-lg font-semibold hover:bg-white/90 transition-colors border border-border"
              >
                <Phone size={20} />
                0172-2741991
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="So funktioniert's"
            title="Fahrzeugankauf in 3 Schritten"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Anfrage senden",
                description: "Füllen Sie das Formular aus oder rufen Sie uns an.",
              },
              {
                step: "2",
                title: "Angebot erhalten",
                description: "Wir prüfen Ihre Angaben und machen Ihnen ein faires Angebot.",
              },
              {
                step: "3",
                title: "Fahrzeug verkaufen",
                description: "Bei Einigung übernehmen wir alle Formalitäten und zahlen sofort aus.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
