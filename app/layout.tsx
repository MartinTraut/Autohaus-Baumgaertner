import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baumgärtner - Kessler Automobile GmbH | Premium Gebrauchtwagen Heilbronn",
  description: "Ihr Autohaus in Heilbronn für hochwertige Gebrauchtwagen und Jahreswagen. Persönliche Beratung, Finanzierung ohne Anzahlung, Garantie auf alle Fahrzeuge. Fachwerkstatt im Haus.",
  keywords: "Autohaus Heilbronn, Gebrauchtwagen Heilbronn, Jahreswagen, KFZ Ankauf, Auto verkaufen Heilbronn, Baumgärtner Kessler",
  openGraph: {
    title: "Baumgärtner - Kessler Automobile GmbH",
    description: "Premium Gebrauchtwagen in Heilbronn. Persönliche Beratung, Top-Finanzierung, Garantie inklusive.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
