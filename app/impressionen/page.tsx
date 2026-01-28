"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ImageGallery } from "@/components/image-gallery";

const images = [
  { src: "https://baumgaertner-kessler.de/bilder/Impressionen_2_861367.JPG", alt: "Autohaus Impression 1" },
  { src: "https://baumgaertner-kessler.de/bilder/Impressionen._4_861370.JPG", alt: "Autohaus Impression 2" },
  { src: "https://baumgaertner-kessler.de/bilder/Impressionen3_861371.JPG", alt: "Autohaus Impression 3" },
  { src: "https://baumgaertner-kessler.de/bilder/Impressionen_1_861372.JPG", alt: "Autohaus Impression 4" },
  { src: "https://baumgaertner-kessler.de/bilder/Impressionen_5_861373.JPG", alt: "Autohaus Impression 5" },
  { src: "https://baumgaertner-kessler.de/bilder/Impressionen_6_861374.JPG", alt: "Autohaus Impression 6" },
];

export default function ImpressionenPage() {
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
              Impressionen
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Einblicke in unser Autohaus
            </h1>
            <p className="text-xl text-white/70">
              Lernen Sie uns kennen – hier finden Sie Bilder unseres Autohauses,
              unserer Fahrzeuge und unserer Arbeitsweise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Galerie"
            description="Klicken Sie auf ein Bild, um es zu vergrößern."
          />

          <ImageGallery images={images} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Unser Team"
            title="Persönlich für Sie da"
            description="Sergej Baumgärtner und Artur Kessler – Ihre Ansprechpartner für An- und Verkauf."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border"
            >
              <div className="w-24 h-24 bg-[#1a1a2e] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">SB</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Sergej Baumgärtner</h3>
              <p className="text-muted-foreground mb-4">Geschäftsführer · An- und Verkauf</p>
              <a
                href="tel:0172-2741991"
                className="text-[#c9a227] font-medium hover:underline"
              >
                0172-2741991
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border"
            >
              <div className="w-24 h-24 bg-[#1a1a2e] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">AK</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">Artur Kessler</h3>
              <p className="text-muted-foreground mb-4">Geschäftsführer · An- und Verkauf</p>
              <a
                href="tel:0152-31741474"
                className="text-[#c9a227] font-medium hover:underline"
              >
                0152-31741474
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
