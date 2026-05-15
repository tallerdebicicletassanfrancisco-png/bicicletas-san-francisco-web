import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
     <body className="min-h-full flex flex-col">

  <Script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SportsStore",

        name: "Bicicletas San Francisco",

        image:
          "https://www.bicicletassanfrancisco.com/images/logo2.png",

        url: "https://www.bicicletassanfrancisco.com",

        telephone: [
          "+52 722 294 1031",
          "+52 722 700 8264",
        ],

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Cam. Viejo a San Mateo 494",
          addressLocality: "Metepec",
          addressRegion: "Estado de México",
          postalCode: "52172",
          addressCountry: "MX",
        },

geo: {
  "@type": "GeoCoordinates",
  latitude: 19.2644969,
  longitude: -99.5699618,
},
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "10:00",
            closes: "18:00",
          },

          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },

          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "11:00",
            closes: "14:00",
          },
        ],

        sameAs: [
          "https://www.facebook.com/bicicletassanfrancisco",
          "https://www.instagram.com/tallerdebicicletassanfrancisco",
          "https://www.tiktok.com/@bicicletassanfrancisco",
        ],
      }),
    }}
  />
<body className="min-h-full flex flex-col">

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-SHY8FHP9RT"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-SHY8FHP9RT');
    `}
  </Script>

  {children}
</body>

</body>
    </html>
  );
}
