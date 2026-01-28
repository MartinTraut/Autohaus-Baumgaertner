"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Upload, CheckCircle, Car, Calendar, AlertTriangle, Image, User, Mail, Phone } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface FormData {
  fahrzeug: string;
  baujahr: string;
  unfall: "ja" | "nein" | "";
  bilder: File[];
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
}

export function AnkaufForm() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fahrzeug: "",
    baujahr: "",
    unfall: "",
    bilder: [],
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });

  const totalSteps = 6;

  const updateField = (field: keyof FormData, value: string | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep((s) => (s + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    updateField("bilder", files);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
          Anfrage erfolgreich gesendet!
        </h3>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Vielen Dank für Ihre Ankaufanfrage. Wir prüfen Ihre Angaben und melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </motion.div>
    );
  }

  const stepConfig = [
    { icon: Car, label: "Fahrzeug" },
    { icon: Calendar, label: "Baujahr" },
    { icon: AlertTriangle, label: "Unfallstatus" },
    { icon: Image, label: "Bilder" },
    { icon: User, label: "Kontakt" },
    { icon: Mail, label: "Absenden" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-between mb-12">
        {stepConfig.map((s, i) => {
          const Icon = s.icon;
          const stepNum = (i + 1) as Step;
          const isActive = step === stepNum;
          const isCompleted = step > stepNum;

          return (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-[#c9a227] text-white"
                    : isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-[#f5f5f7] text-muted-foreground"
                }`}
              >
                {isCompleted ? <CheckCircle size={24} /> : <Icon size={24} />}
              </div>
              <span className="text-xs mt-2 text-muted-foreground hidden md:block">
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-border"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Welches Fahrzeug möchten Sie verkaufen?</h3>
              <p className="text-muted-foreground">Bitte geben Sie Marke, Modell und wichtige Details an.</p>
              <textarea
                value={formData.fahrzeug}
                onChange={(e) => updateField("fahrzeug", e.target.value)}
                placeholder="z.B. BMW 320d, Baujahr 2019, 80.000 km, Automatik, Diesel"
                className="w-full px-4 py-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all resize-none h-32"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Wann wurde das Fahrzeug zugelassen?</h3>
              <p className="text-muted-foreground">Das Baujahr / Erstzulassung Ihres Fahrzeugs.</p>
              <input
                type="text"
                value={formData.baujahr}
                onChange={(e) => updateField("baujahr", e.target.value)}
                placeholder="z.B. 2019 oder 03/2019"
                className="w-full px-4 py-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all text-lg"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Hatte das Fahrzeug einen Unfall?</h3>
              <p className="text-muted-foreground">Bitte geben Sie ehrlich an, ob Unfallschäden vorliegen.</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => updateField("unfall", "nein")}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.unfall === "nein"
                      ? "border-green-500 bg-green-50"
                      : "border-border hover:border-[#c9a227]"
                  }`}
                >
                  <CheckCircle className={`w-8 h-8 mx-auto mb-2 ${formData.unfall === "nein" ? "text-green-500" : "text-muted-foreground"}`} />
                  <span className="font-semibold">Nein, unfallfrei</span>
                </button>
                <button
                  type="button"
                  onClick={() => updateField("unfall", "ja")}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    formData.unfall === "ja"
                      ? "border-orange-500 bg-orange-50"
                      : "border-border hover:border-[#c9a227]"
                  }`}
                >
                  <AlertTriangle className={`w-8 h-8 mx-auto mb-2 ${formData.unfall === "ja" ? "text-orange-500" : "text-muted-foreground"}`} />
                  <span className="font-semibold">Ja, Unfallwagen</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Haben Sie Bilder vom Fahrzeug?</h3>
              <p className="text-muted-foreground">Bilder helfen uns, Ihnen ein besseres Angebot zu machen. (optional)</p>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-[#c9a227] transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-medium text-[#1a1a2e]">Klicken Sie hier oder ziehen Sie Bilder hierher</p>
                  <p className="text-sm text-muted-foreground mt-2">JPG, PNG bis zu 10 MB pro Datei</p>
                </label>
              </div>
              {formData.bilder.length > 0 && (
                <p className="text-green-600 font-medium">
                  {formData.bilder.length} Datei(en) ausgewählt
                </p>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Wie können wir Sie erreichen?</h3>
              <p className="text-muted-foreground">Ihre Kontaktdaten für unser Ankaufangebot.</p>
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Ihr Name"
                  className="w-full px-4 py-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) => updateField("telefon", e.target.value)}
                  placeholder="Ihre Telefonnummer"
                  className="w-full px-4 py-4 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Zusammenfassung Ihrer Anfrage</h3>
              <div className="bg-[#f5f5f7] rounded-xl p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fahrzeug:</span>
                  <span className="font-medium text-right max-w-[60%]">{formData.fahrzeug || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Baujahr:</span>
                  <span className="font-medium">{formData.baujahr || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unfallwagen:</span>
                  <span className="font-medium">{formData.unfall === "ja" ? "Ja" : formData.unfall === "nein" ? "Nein" : "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bilder:</span>
                  <span className="font-medium">{formData.bilder.length} Datei(en)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{formData.name || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">E-Mail:</span>
                  <span className="font-medium">{formData.email || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Telefon:</span>
                  <span className="font-medium">{formData.telefon || "-"}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy-ankauf"
                  required
                  className="mt-1 w-4 h-4 text-[#c9a227] border-border rounded focus:ring-[#c9a227]"
                />
                <label htmlFor="privacy-ankauf" className="text-sm text-muted-foreground">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-[#c9a227] hover:underline">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zu.
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg border border-border text-[#1a1a2e] font-medium hover:bg-[#f5f5f7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Zurück
            </button>

            {step < 6 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 rounded-lg bg-[#c9a227] text-white font-medium hover:bg-[#c9a227]/90 transition-colors flex items-center gap-2"
              >
                Weiter
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 rounded-lg bg-[#c9a227] text-white font-semibold hover:bg-[#c9a227]/90 transition-colors"
              >
                Kostenlos anfragen
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Unverbindlich und kostenlos – Sie erhalten innerhalb von 24 Stunden ein Angebot.
      </p>
    </div>
  );
}
