import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bicicletas San Francisco | Taller de bicicletas en Metepec",

  description:
    "Taller profesional de bicicletas en Metepec. Afinación, frenos, suspensión, pintura, mantenimiento y servicio especializado para bicicletas.",

  keywords: [
    "bicicletas Metepec",
    "taller de bicicletas",
    "reparación de bicicletas Metepec",
    "afinación bicicletas",
    "servicio bicicletas",
    "bicicletas San Francisco",
    "mantenimiento bicicletas",
  ],

  openGraph: {
    title: "Bicicletas San Francisco",
    description:
      "Servicio profesional de bicicletas en Metepec.",
    images: ["/images/logo2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
