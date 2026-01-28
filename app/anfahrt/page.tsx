"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

export default function AnfahrtPage() {
  const [mapConsent, setMapConsent] = useState(false);

  const address = "Heidelberger Str. 142, 74080 Heilbronn";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const googleMapsEmbed = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5!2d9.2!3d49.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHeidelberger+Str.+142%2C+74080+Heilbronn!5e0!3m2!1sde!2sde!4v1`;

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
              Anfahrt
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              So finden Sie uns
            </h1>
            <p className="text-xl text-white/70">
              Besuchen Sie uns in Heilbronn – wir freuen uns auf Sie.
              Auch ohne Termin sind Sie bei uns willkommen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Address & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#c9a227]" size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#1a1a2e] mb-2">Adresse</h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      Baumgärtner - Kessler Automobile GmbH<br />
                      Heidelberger Str. 142<br />
                      74080 Heilbronn
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#c9a227] font-medium hover:underline"
                    >
                      <Navigation size={18} />
                      Route planen
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#c9a227]" size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#1a1a2e] mb-2">Öffnungszeiten</h2>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between gap-8">
                        <span>Montag – Freitag</span>
                        <span className="font-medium text-[#1a1a2e]">08:00 – 18:00 Uhr</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Samstag</span>
                        <span className="font-medium text-[#1a1a2e]">08:00 – 14:00 Uhr</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sonntag</span>
                        <span className="text-[#1a1a2e]">geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#c9a227]" size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#1a1a2e] mb-2">Kontakt</h2>
                    <div className="space-y-2">
                      <p>
                        <a href="tel:07131-60009" className="text-muted-foreground hover:text-[#c9a227] transition-colors">
                          Tel: 07131-60009
                        </a>
                      </p>
                      <p>
                        <a href="tel:0172-2741991" className="text-muted-foreground hover:text-[#c9a227] transition-colors">
                          Mobil: 0172-2741991
                        </a>
                      </p>
                      <p>
                        <a href="tel:0152-31741474" className="text-muted-foreground hover:text-[#c9a227] transition-colors">
                          Mobil: 0152-31741474
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] lg:h-auto rounded-2xl overflow-hidden bg-[#f5f5f7] border border-border"
            >
              {!mapConsent ? (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <MapPin size={32} className="text-[#1a1a2e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
                    Karte anzeigen
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    Durch das Laden der Karte werden Daten an Google übertragen.
                    Mehr dazu in unserer Datenschutzerklärung.
                  </p>
                  <button
                    onClick={() => setMapConsent(true)}
                    className="px-6 py-3 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors"
                  >
                    Karte laden
                  </button>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-[#c9a227] hover:underline flex items-center gap-1"
                  >
                    In Google Maps öffnen
                    <ExternalLink size={14} />
                  </a>
                </div>
              ) : (
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(address)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Baumgärtner - Kessler Automobile"
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">
              Anfahrtsbeschreibung
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Mit dem Auto</h3>
                  <p className="text-muted-foreground">
                    Unser Autohaus befindet sich an der Heidelberger Straße 142 in Heilbronn.
                    Von der A6 kommend nehmen Sie die Ausfahrt Heilbronn/Neckarsulm und folgen
                    der Beschilderung Richtung Heilbronn-Zentrum. Parkplätze sind direkt vor
                    dem Autohaus vorhanden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Mit öffentlichen Verkehrsmitteln</h3>
                  <p className="text-muted-foreground">
                    Vom Heilbronner Hauptbahnhof erreichen Sie uns mit den Buslinien
                    in Richtung Heidelberger Straße. Die nächste Haltestelle befindet sich
                    in unmittelbarer Nähe unseres Autohauses.
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
