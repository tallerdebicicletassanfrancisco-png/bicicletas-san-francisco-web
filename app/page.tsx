"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
const [content, setContent] = useState({
  title: "",
  subtitle: "",
  whatsapp: "",
});

useEffect(() => {
  const fetchData = async () => {
    const docRef = doc(db, "siteContent", "homepage");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setContent(docSnap.data() as any);
    }
  };

  fetchData();
}, []);

  const whatsappLink =
    `https://wa.me/${content.whatsapp}?text=Hola%20quiero%20agendar%20servicio%20para%20mi%20bicicleta`;

  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      {/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-red-600/50 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
    
    {/* Logo + Marca */}
    <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <Image
        src="/images/logo2.png"
        alt="Bicicletas San Francisco"
        width={280}
        height={100}
        priority
        className="h-16 w-auto object-contain"
      />

      <div className="leading-tight">
        <p className="text-white text-xl font-bold tracking-wide">
          Bicicletas
        </p>
        <p className="text-red-500 text-lg font-semibold">
          San Francisco
        </p>
      </div>
    </div>

    {/* Menú */}
    <div className="hidden md:flex gap-8 text-white font-medium">
      <a href="#inicio" className="hover:text-red-500 transition">Inicio</a>
      <a href="#servicios" className="hover:text-red-500 transition">Servicios</a>
      <a href="#reseñas" className="hover:text-red-500 transition">Reseñas</a>
      <a href="#contacto" className="hover:text-red-500 transition">Contacto</a>
    </div>

    {/* Botón WhatsApp */}
    <a
      href={whatsappLink}
      target="_blank"
      className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
    >
      WhatsApp
    </a>
  </div>
</nav>

      {/* HERO */}
      {/* HERO PREMIUM */}
<section
  id="inicio"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  {/* Fondo */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=2070&auto=format&fit=crop')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Glow */}
  <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-3xl rounded-full top-[-200px] right-[-150px]" />

  {/* Contenido */}
  <div className="relative z-10 text-center px-6 max-w-5xl">
    <div className="inline-block mb-6 px-5 py-2 rounded-full border border-red-500/40 bg-white/5 backdrop-blur-md">
      <p className="text-sm tracking-[0.25em] text-red-400 uppercase">
        Taller Profesional 🚲
      </p>
    </div>

    <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
      {content.title}
    </h1>

    <p className="text-zinc-300 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
      {content.subtitle}
    </p>

    <div className="flex flex-wrap justify-center gap-5">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-600/30"
      >
        Agendar Servicio
      </a>

      <a
        href="#servicios"
        className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl text-lg"
      >
        Ver Servicios
      </a>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-3xl font-bold text-red-500">13+</h3>
        <p className="text-zinc-300 mt-2">Reseñas</p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-3xl font-bold text-red-500">4.1★</h3>
        <p className="text-zinc-300 mt-2">Google Maps</p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
        <h3 className="text-3xl font-bold text-red-500">100%</h3>
        <p className="text-zinc-300 mt-2">Pasión ciclista</p>
      </div>
    </div>
  </div>
</section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-6 border-t border-red-600">
        <h2 className="text-4xl font-bold text-center mb-14">
          Nuestros <span className="text-red-500">Servicios</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
          <div className="border border-zinc-800 p-6 rounded-2xl">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold">Afinación Completa</h3>
          </div>

          <div className="border border-zinc-800 p-6 rounded-2xl">
            <div className="text-5xl mb-4">🛞</div>
            <h3 className="text-xl font-semibold">Frenos y Suspensión</h3>
          </div>

          <div className="border border-zinc-800 p-6 rounded-2xl">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold">Transmisión y Cadena</h3>
          </div>

          <div className="border border-zinc-800 p-6 rounded-2xl">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-semibold">Lavado Premium</h3>
          </div>
        </div>

        <p className="text-center mt-10 text-xl">
          Y mucho más... ¡Contáctanos para cualquier necesidad de tu bicicleta!
        </p>
      </section>

      {/* RESEÑAS */}
      <section className="py-20 px-6 border-t border-red-600">
        <h2 className="text-4xl font-bold text-center mb-14">
          Lo que dicen nuestros <span className="text-red-500">clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Excelente servicio, mi bici quedó como nueva.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Muy profesionales, 100% recomendados.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Rápidos y eficientes, de lo mejor en la zona.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 px-6 border-t border-red-600">
        <h2 className="text-4xl font-bold text-center mb-14">
        Trabajos <span className="text-red-500">Recientes</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <img
      src="https://images.unsplash.com/photo-1511994298241-608e28f14fde"
      className="rounded-2xl h-72 w-full object-cover"
      alt="Trabajo 1"
      />
      <img
      src="https://images.unsplash.com/photo-1541625602330-2277a4c46182"
      className="rounded-2xl h-72 w-full object-cover"
      alt="Trabajo 2"
      />
      <img
      src="https://images.unsplash.com/photo-1485965120184-e220f721d03e"
      className="rounded-2xl h-72 w-full object-cover"
      alt="Trabajo 3"
      />
    </div>
</section>

      {/* CONTACTO */}
      <section className="py-20 px-6 border-t border-red-600 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>

            <p className="mb-4">
              📍 Cam. Viejo a San Mateo 494, Bella Vista, Metepec.
            </p>
            <p className="mb-4">🕒 Lunes a Viernes 10:00 AM - 6:00 PM</p>
            <p className="mb-4">🕒 Sábado 10:00 AM - 4:00 PM</p>
            <p className="mb-4">🕒 Domingo 11:00 AM - 2:00 PM</p>
            <p className="mb-6">📞 WhatsApp: {content.whatsapp}</p>

            <a
              href="https://maps.app.goo.gl/EAnNPgVaKDq9dNiF6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 px-6 py-3 rounded-xl inline-block"
            >
              Cómo llegar
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Camino%20Viejo%20a%20San%20Mateo%20495%20Metepec&output=embed"
            className="w-full h-[400px] rounded-2xl"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}