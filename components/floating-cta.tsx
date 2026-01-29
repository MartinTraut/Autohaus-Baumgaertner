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
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.012-3.18 2.278-.854.18-1.968.324-5.72-1.23-4.8-1.988-7.886-6.852-8.124-7.17-.228-.318-1.924-2.562-1.924-4.886 0-2.324 1.218-3.466 1.65-3.94.39-.428 1.032-.624 1.644-.624.198 0 .378.012.538.02.432.018.648.042.936.726.36.852 1.236 3.012 1.344 3.23.108.218.216.516.066.816-.138.306-.258.498-.48.762-.216.264-.444.468-.66.726-.198.228-.42.474-.174.906.246.426 1.092 1.8 2.346 2.916 1.614 1.434 2.946 1.896 3.408 2.094.33.144.726.114.984-.156.324-.342.726-.912 1.134-1.476.294-.402.66-.456 1.02-.312.366.138 2.316 1.092 2.712 1.29.396.198.66.294.756.462.096.168.096.972-.294 2.07z"/>
        </svg>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-[#1a1a2e] text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>
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
