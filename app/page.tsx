"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Repeat,
  Car,
  Wrench,
  Shield,
  CreditCard,
  ArrowRight,
  Star,
  ChevronDown,
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { USPCard } from "@/components/usp-card";
import { Counter } from "@/components/counter";

const usps = [
  {
    icon: Users,
    title: "Persönliche Beratung",
    description: "Individuelle Beratung durch erfahrene Verkäufer – wir nehmen uns Zeit für Sie.",
  },
  {
    icon: Repeat,
    title: "Inzahlungnahme zu Top-Preisen",
    description: "Verkaufen Sie uns Ihr Fahrzeug – faire Bewertung, sofortige Auszahlung.",
  },
  {
    icon: Car,
    title: "Probefahrt ohne Termin",
    description: "Kommen Sie spontan vorbei – Probefahrten jederzeit während der Öffnungszeiten.",
  },
  {
    icon: Wrench,
    title: "Fachwerkstatt im Haus",
    description: "Professionelle Wartung und Reparaturen durch unsere Partner-Werkstatt vor Ort.",
  },
  {
    icon: Shield,
    title: "Garantie auf alle Fahrzeuge",
    description: "Sicherheit beim Kauf – auf Wunsch Garantie für Ihr neues Fahrzeug.",
  },
  {
    icon: CreditCard,
    title: "Finanzierung ohne Anzahlung",
    description: "Flexible Finanzierung zu günstigen Konditionen – auch ohne Eigenkapital.",
  },
];

const testimonials = [
  {
    name: "Michael S.",
    location: "Heilbronn",
    text: "Sehr professionelle Abwicklung und faire Preise. Mein BMW wurde zu einem sehr guten Preis angekauft. Absolut empfehlenswert!",
    rating: 5,
  },
  {
    name: "Sandra K.",
    location: "Neckarsulm",
    text: "Freundliche Beratung ohne Druck. Habe hier meinen Jahreswagen gekauft und bin begeistert. Die Finanzierung war unkompliziert.",
    rating: 5,
  },
  {
    name: "Thomas M.",
    location: "Bad Friedrichshall",
    text: "Schnell, unkompliziert und vertrauenswürdig. Das Team hat sich super um alles gekümmert. Gerne wieder!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://baumgaertner-kessler.de/53a8d9188aad659ffb62f24ad1a9cd59.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#1a1a2e]/90 to-[#1a1a2e]/50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-40 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
                Autohaus in Heilbronn
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                Premium Gebrauchtwagen mit{" "}
                <span className="text-[#c9a227]">Vertrauen</span> kaufen
              </h1>

              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
                Willkommen bei Baumgärtner - Kessler Automobile. Ausgewählte Jahreswagen
                und Gebrauchtwagen zu fairen Preisen – mit persönlicher Beratung,
                Garantie und flexibler Finanzierung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/fahrzeuge"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a227] text-white rounded-xl font-semibold hover:bg-[#b89223] transition-all shadow-lg shadow-[#c9a227]/25 hover:shadow-xl hover:shadow-[#c9a227]/30"
                >
                  Fahrzeugbestand ansehen
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/ankauf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Fahrzeug verkaufen
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Shield, text: "Garantie inklusive" },
                  { icon: CreditCard, text: "Ohne Anzahlung" },
                  { icon: Wrench, text: "Werkstatt im Haus" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon size={18} className="text-[#c9a227]" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Schnellanfrage</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9a227] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#c9a227] transition-colors"
                  />
                  <select className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white/70 focus:outline-none focus:border-[#c9a227] transition-colors appearance-none">
                    <option value="">Interesse an...</option>
                    <option value="kauf">Fahrzeugkauf</option>
                    <option value="verkauf">Fahrzeugverkauf</option>
                    <option value="finanzierung">Finanzierung</option>
                    <option value="probefahrt">Probefahrt</option>
                  </select>
                  <button className="w-full px-5 py-4 bg-[#c9a227] text-white rounded-xl font-semibold hover:bg-[#b89223] transition-colors">
                    Rückruf anfordern
                  </button>
                </div>
                <p className="text-white/50 text-sm mt-4 text-center">
                  Wir melden uns innerhalb von 24 Stunden
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-widest">Mehr entdecken</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Ihre Vorteile"
            title="Warum Baumgärtner - Kessler?"
            description="Wir setzen auf persönlichen Service und Qualität – damit Sie mit gutem Gefühl bei uns kaufen."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <USPCard key={index} {...usp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Counter end={500} suffix="+" label="Zufriedene Kunden" />
            <Counter end={15} suffix="+" label="Jahre Erfahrung" />
            <Counter end={100} suffix="%" label="Geprüfte Fahrzeuge" />
            <Counter end={24} label="Stunden Antwortzeit" />
          </div>
        </div>
      </section>

      {/* Vehicles Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Fahrzeugbestand"
            title="Aktuelle Angebote"
            description="Entdecken Sie unsere Auswahl an hochwertigen Gebrauchtwagen und Jahreswagen."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { img: "https://baumgaertner-kessler.de/bilder/Impressionen_2_861367.JPG", title: "Premium Limousine" },
              { img: "https://baumgaertner-kessler.de/bilder/Impressionen3_861371.JPG", title: "Komfort SUV" },
              { img: "https://baumgaertner-kessler.de/bilder/Impressionen_1_861372.JPG", title: "Sportlicher Kombi" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#f5f5f7] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#c9a227] text-white text-xs font-semibold rounded-full">
                      Verfügbar
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Geprüft", "Garantie", "Finanzierung"].map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-[#f5f5f7] text-xs text-muted-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-bold text-[#c9a227]">Preis auf Anfrage</span>
                    <Link
                      href="/fahrzeuge"
                      className="flex items-center gap-1 text-[#1a1a2e] font-semibold hover:text-[#c9a227] transition-colors"
                    >
                      Details
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fahrzeuge"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a2e] text-white rounded-xl font-semibold hover:bg-[#2a2a3e] transition-colors"
            >
              Alle Fahrzeuge ansehen
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ankauf CTA */}
      <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://baumgaertner-kessler.de/7502fda224d6c12c79e375d8dd0e6798.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#c9a227]/20 text-[#c9a227] rounded-full text-sm font-medium mb-6">
                Fahrzeugankauf
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Sie möchten Ihr Fahrzeug verkaufen?
              </h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Wir kaufen Ihr Fahrzeug zu fairen Preisen – schnell, unkompliziert
                und mit sofortiger Auszahlung.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Kostenlose und unverbindliche Bewertung",
                  "Faire Marktpreise garantiert",
                  "Schnelle Abwicklung & sofortige Auszahlung",
                  "Auch Unfallwagen & Fahrzeuge mit Mängeln",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/ankauf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a227] text-white rounded-xl font-semibold hover:bg-[#b89223] transition-colors shadow-lg shadow-[#c9a227]/25"
              >
                Jetzt Fahrzeug bewerten lassen
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#c9a227]/20 rounded-3xl blur-2xl" />
                <img
                  src="https://baumgaertner-kessler.de/bilder/Impressionen_5_861373.JPG"
                  alt="Fahrzeugankauf"
                  className="relative rounded-2xl w-full shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Kundenstimmen"
            title="Das sagen unsere Kunden"
            description="Vertrauen Sie auf die Erfahrungen anderer – wir freuen uns über jedes positive Feedback."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border relative"
              >
                <div className="absolute -top-3 left-8">
                  <div className="w-10 h-10 bg-[#c9a227] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-serif">&ldquo;</span>
                  </div>
                </div>

                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a2e] flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a2e]">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            badge="Partner"
            title="Unsere starken Partner"
            description="Für erstklassige Qualität und Service arbeiten wir mit kompetenten Partnern zusammen."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                img: "https://baumgaertner-kessler.de/bilder/startseite/unsere-partner/partner-werkstatt-525113.jpg",
                title: "AM Fahrzeugtechnik",
                desc: "Unsere Partner-Werkstatt für alle Wartungs- und Reparaturarbeiten.",
                tag: "Werkstatt",
              },
              {
                img: "https://attachments.cms-genial.de/partners/77165e1756245c2d647ec96a72728657.jpg",
                title: "GGG Garantie",
                desc: "Unser Partner für zuverlässige Fahrzeuggarantien.",
                tag: "Garantie",
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <span className="px-3 py-1 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold rounded-full mb-6">
                    {partner.tag}
                  </span>
                  <img
                    src={partner.img}
                    alt={partner.title}
                    className="w-32 h-32 object-contain mb-6"
                  />
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{partner.title}</h3>
                  <p className="text-muted-foreground">{partner.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
