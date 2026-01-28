"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <motion.div
        className="hidden lg:block bg-[#0f0f1e] text-white/80"
        initial={false}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-11 text-[13px]">
            <div className="flex items-center gap-6">
              <a
                href="tel:07131-60009"
                className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"
              >
                <Phone size={13} className="text-[#c9a227]" />
                <span>07131-60009</span>
              </a>
              <span className="w-px h-4 bg-white/20" />
              <a
                href="mailto:Info@baumgaertner-kessler.de"
                className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"
              >
                <Mail size={13} className="text-[#c9a227]" />
                <span>Info@baumgaertner-kessler.de</span>
              </a>
              <span className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50">
                <MapPin size={13} className="text-[#c9a227]" />
                <span>Heidelberger Str. 142, 74080 Heilbronn</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/50">
                <Clock size={13} className="text-[#c9a227]" />
                <span>Mo–Fr 08–18 Uhr · Sa 08–14 Uhr</span>
              </div>
              <span className="w-px h-4 bg-white/20" />
              <a
                href="https://www.instagram.com/b_k_automobile/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c9a227] transition-colors"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <img
                src="/logo-car-gold.png"
                alt="BK Automobile"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[15px] font-bold text-[#1a1a2e] tracking-tight">
                  Baumgärtner - Kessler
                </span>
                <span className="text-[11px] font-semibold text-[#c9a227] uppercase tracking-[0.2em]">
                  Automobile
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[15px] text-[#1a1a2e]/80 hover:text-[#1a1a2e] font-medium transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#c9a227] transition-all duration-300 group-hover:w-3/4 rounded-full" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:07131-60009"
                className="flex items-center gap-2 px-4 py-2.5 text-[#1a1a2e] hover:text-[#c9a227] transition-colors font-medium text-sm"
              >
                <Phone size={16} />
                <span className="hidden xl:inline">07131-60009</span>
              </a>
              <Link
                href="/anfrage"
                className="px-5 py-2.5 border-2 border-[#1a1a2e] text-[#1a1a2e] rounded-lg font-semibold text-sm hover:bg-[#1a1a2e] hover:text-white transition-all"
              >
                Anfrage
              </Link>
              <Link
                href="/ankauf"
                className="px-5 py-2.5 bg-[#c9a227] text-white rounded-lg font-semibold text-sm hover:bg-[#b89223] transition-colors shadow-md shadow-[#c9a227]/20"
              >
                Fahrzeug verkaufen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1a1a2e] hover:bg-[#eee] transition-colors"
              aria-label="Menü"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo-car-gold.png"
                    alt="BK Automobile"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-bold text-[#1a1a2e] tracking-tight">
                      Baumgärtner - Kessler
                    </span>
                    <span className="text-[9px] font-semibold text-[#c9a227] uppercase tracking-[0.2em]">
                      Automobile
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f5f5f7] text-[#1a1a2e]"
                  aria-label="Menü schließen"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 text-[#1a1a2e] hover:bg-[#f5f5f7] rounded-xl font-medium text-[16px] transition-colors"
                      >
                        {link.label}
                        <ChevronRight
                          size={16}
                          className="text-gray-300"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 space-y-3"
                >
                  <Link
                    href="/anfrage"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-3.5 bg-[#1a1a2e] text-white rounded-xl font-semibold text-[15px]"
                  >
                    Anfrage senden
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/ankauf"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-3.5 bg-[#c9a227] text-white rounded-xl font-semibold text-[15px]"
                  >
                    Fahrzeug verkaufen
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-t border-gray-100 px-6 py-5 space-y-4"
              >
                <a
                  href="tel:07131-60009"
                  className="flex items-center gap-3 text-[#1a1a2e]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                    <Phone size={17} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Anrufen</div>
                    <div className="font-semibold text-sm">07131-60009</div>
                  </div>
                </a>
                <a
                  href="mailto:Info@baumgaertner-kessler.de"
                  className="flex items-center gap-3 text-[#1a1a2e]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center">
                    <Mail size={17} className="text-[#c9a227]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">E-Mail</div>
                    <div className="font-semibold text-sm">Info@baumgaertner-kessler.de</div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
