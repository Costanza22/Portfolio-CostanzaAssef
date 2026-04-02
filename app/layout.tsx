import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-sans-plex",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Costanza Pasquotto Assef — Desenvolvedora Full Stack",
  description:
    "Costanza Pasquotto Assef — dev com viés em front (React, Next), Node quando precisa, projetos como Joi Patrio e BHT Detector. SC, Brasil.",
  openGraph: {
    title: "Costanza Pasquotto Assef — Desenvolvedora Full Stack",
    description:
      "Site pessoal: trabalho, projetos de mapa e ML, contato. Santa Catarina.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${ibmPlex.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">
        <a
          href="#topo"
          className="fixed left-4 top-4 z-[100] -translate-y-[180%] rounded-lg bg-[var(--forest)] px-4 py-2 text-sm font-medium text-[var(--paper-elevated)] shadow-lg transition-transform focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
