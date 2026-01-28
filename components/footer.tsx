"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/impressionen", label: "Impressionen" },
  { href: "/partner", label: "Partner" },
];

const serviceLinks = [
  { href: "/ankauf", label: "Fahrzeug verkaufen" },
  { href: "/anfrage", label: "Anfrage senden" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Bereit für Ihr nächstes Fahrzeug?
              </h2>
              <p className="text-white/60 text-lg">
                Kontaktieren Sie uns – wir beraten Sie gerne persönlich.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07131-60009"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a1a2e] rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                <Phone size={20} />
                07131-60009
              </a>
              <Link
                href="/anfrage"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a227] text-white rounded-xl font-semibold hover:bg-[#b89223] transition-colors"
              >
                Anfrage senden
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info - Größere Spalte */}
          <div className="lg:col-span-4">
            <img
              src="https://baumgaertner-kessler.de/c6698e15471de794b7b5aa26864d2c4d.png"
              alt="Baumgärtner - Kessler Automobile"
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/60 mb-6 leading-relaxed">
              Ihr Partner für hochwertige Gebrauchtwagen und Jahreswagen in Heilbronn.
              Persönliche Beratung, faire Preise und erstklassiger Service.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/b_k_automobile/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#c9a227] transition-all hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c9a227] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#c9a227] transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Service
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#c9a227] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#c9a227] transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Kontakt & Öffnungszeiten
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#c9a227]" />
                </div>
                <div className="text-white/70">
                  <p className="font-medium text-white">Adresse</p>
                  <p>Heidelberger Str. 142</p>
                  <p>74080 Heilbronn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#c9a227]" />
                </div>
                <div className="text-white/70">
                  <p className="font-medium text-white">Telefon</p>
                  <a href="tel:07131-60009" className="hover:text-[#c9a227] transition-colors">
                    07131-60009
                  </a>
                  <p className="text-sm mt-1">
                    Mobil: 0172-2741991
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#c9a227]" />
                </div>
                <div className="text-white/70">
                  <p className="font-medium text-white">Öffnungszeiten</p>
                  <p>Mo – Fr: 08:00 – 18:00</p>
                  <p>Sa: 08:00 – 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Baumgärtner - Kessler Automobile GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-8 text-sm">
              <Link
                href="/impressum"
                className="text-white/40 hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-white/40 hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
