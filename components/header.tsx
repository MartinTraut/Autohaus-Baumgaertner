"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Clock, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/fahrzeuge", label: "Fahrzeuge" },
  { href: "/impressionen", label: "Impressionen" },
  { href: "/partner", label: "Partner" },
  { href: "/ankauf", label: "Ankauf" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - versteckt sich beim Scrollen */}
      <motion.div
        className="hidden lg:block bg-[#1a1a2e] text-white"
        initial={false}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-3 text-sm border-b border-white/10">
            <div className="flex items-center gap-8">
              <a
                href="tel:07131-60009"
                className="flex items-center gap-2.5 hover:text-[#c9a227] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span className="font-medium">07131-60009</span>
              </a>
              <a
                href="mailto:Info@baumgaertner-kessler.de"
                className="flex items-center gap-2.5 hover:text-[#c9a227] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <span>Info@baumgaertner-kessler.de</span>
              </a>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2.5 text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock size={14} />
                </div>
                <span>Mo–Fr 08:00–18:00 · Sa 08:00–14:00</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span>Heilbronn</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Nav */}
      <nav
        className={`bg-white/98 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 flex-shrink-0">
              <img
                src="https://baumgaertner-kessler.de/c6698e15471de794b7b5aa26864d2c4d.png"
                alt="Baumgärtner - Kessler Automobile"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-[#1a1a2e] hover:text-[#c9a227] font-medium transition-colors relative group rounded-lg hover:bg-[#f5f5f7]"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#c9a227] transition-all group-hover:w-1/2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/anfrage"
                className="px-6 py-3 border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-lg font-semibold hover:bg-[#1a1a2e] hover:text-white transition-all"
              >
                Anfrage senden
              </Link>
              <Link
                href="/ankauf"
                className="px-6 py-3 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#b89223] transition-colors shadow-lg shadow-[#c9a227]/25"
              >
                Fahrzeug verkaufen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-lg bg-[#f5f5f7] text-[#1a1a2e]"
              aria-label="Menü öffnen"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-white"
            >
              <div className="container mx-auto px-6 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 px-5 text-[#1a1a2e] hover:bg-[#f5f5f7] rounded-xl font-medium transition-colors text-lg"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 space-y-3">
                  <Link
                    href="/anfrage"
                    onClick={() => setIsOpen(false)}
                    className="block py-4 px-5 bg-[#1a1a2e] text-white rounded-xl font-semibold text-center text-lg"
                  >
                    Anfrage senden
                  </Link>
                  <Link
                    href="/ankauf"
                    onClick={() => setIsOpen(false)}
                    className="block py-4 px-5 bg-[#c9a227] text-white rounded-xl font-semibold text-center text-lg"
                  >
                    Fahrzeug verkaufen
                  </Link>
                </div>

                <div className="pt-6 border-t border-border space-y-3">
                  <a
                    href="tel:07131-60009"
                    className="flex items-center gap-4 py-3 text-[#1a1a2e]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Telefon</div>
                      <div className="font-semibold">07131-60009</div>
                    </div>
                  </a>
                  <a
                    href="mailto:Info@baumgaertner-kessler.de"
                    className="flex items-center gap-4 py-3 text-[#1a1a2e]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">E-Mail</div>
                      <div className="font-semibold">Info@baumgaertner-kessler.de</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
