"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  variant?: "default" | "compact";
  subject?: string;
}

export function ContactForm({ variant = "default", subject }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-2">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="text-muted-foreground">
          Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={variant === "compact" ? "grid md:grid-cols-2 gap-4" : "space-y-6"}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1a1a2e] mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
            placeholder="Ihr Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a2e] mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
          placeholder="Ihre Telefonnummer"
        />
      </div>

      {subject && <input type="hidden" name="subject" value={subject} />}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a1a2e] mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={variant === "compact" ? 3 : 5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all resize-none"
          placeholder="Ihre Nachricht an uns..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 w-4 h-4 text-[#c9a227] border-border rounded focus:ring-[#c9a227]"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          Ich habe die{" "}
          <a href="/datenschutz" className="text-[#c9a227] hover:underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu. *
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full md:w-auto px-8 py-4 bg-[#c9a227] text-white rounded-lg font-semibold hover:bg-[#c9a227]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isLoading ? (
          "Wird gesendet..."
        ) : (
          <>
            Anfrage senden
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
