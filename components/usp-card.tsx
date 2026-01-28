"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface USPCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function USPCard({ icon: Icon, title, description, index }: USPCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-[#c9a227]/20 transition-all duration-300 relative overflow-hidden"
    >
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-[#f8f8f8] flex items-center justify-center mb-6 group-hover:bg-[#c9a227] transition-all duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 text-[#c9a227] group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#1a1a2e]">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
