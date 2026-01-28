"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/491722741991"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-[#1a1a2e] text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-25" />
      </motion.a>

      {/* Call Button - Visible on Mobile */}
      <motion.a
        href="tel:07131-60009"
        className="group relative w-16 h-16 bg-[#c9a227] rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all md:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        aria-label="Anrufen"
      >
        <Phone size={28} className="text-white" />
      </motion.a>
    </div>
  );
}
