"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
    const [mobileMenu, setMobileMenu] = useState(false);
    const servicesRef = useRef(null);
const servicesInView = useInView(servicesRef, {
  once: true,
  margin: "-100px",
});

const galleryRef = useRef(null);
const galleryInView = useInView(galleryRef, {
  once: true,
  margin: "-100px",
});

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
        className="h-12 md:h-16 w-auto object-contain"
      />

      <div className="leading-tight">
        <p className="text-white text-lg md:text-xl font-bold tracking-wide">
          Bicicletas
        </p>

        <p className="text-red-500 text-base md:text-lg font-semibold">
          San Francisco
        </p>
      </div>
    </div>

    {/* Menú desktop */}
    <div className="hidden lg:flex gap-8 text-white font-medium">
      <a href="#inicio" className="hover:text-red-500 transition">
        Inicio
      </a>

      <a href="#servicios" className="hover:text-red-500 transition">
        Servicios
      </a>

      <a href="#reseñas" className="hover:text-red-500 transition">
        Reseñas
      </a>

      <a href="#contacto" className="hover:text-red-500 transition">
        Contacto
      </a>
    </div>

    {/* Desktop WhatsApp */}
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex bg-green-500 hover:bg-green-600 text-white px-4 md:px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
    >
      WhatsApp
    </a>

    {/* Botón móvil */}
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className="lg:hidden text-3xl text-white"
    >
      {mobileMenu ? "✕" : "☰"}
    </button>

  </div>

  {/* Menú móvil */}
  {mobileMenu && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-red-600/40"
    >
      <div className="flex flex-col gap-6 p-6 text-white text-xl font-medium">

        <a
          href="#inicio"
          onClick={() => setMobileMenu(false)}
          className="hover:text-red-500 transition"
        >
          Inicio
        </a>

        <a
          href="#servicios"
          onClick={() => setMobileMenu(false)}
          className="hover:text-red-500 transition"
        >
          Servicios
        </a>

        <a
          href="#reseñas"
          onClick={() => setMobileMenu(false)}
          className="hover:text-red-500 transition"
        >
          Reseñas
        </a>

        <a
          href="#contacto"
          onClick={() => setMobileMenu(false)}
          className="hover:text-red-500 transition"
        >
          Contacto
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-center py-4 rounded-2xl font-semibold"
        >
          WhatsApp
        </a>

      </div>
    </motion.div>
  )}
</nav>


      {/* HERO PREMIUM */}
{/* HERO PREMIUM */}
<section
  id="inicio"
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
>
  {/* Fondo Parallax */}
  <motion.div
    initial={{ scale: 1.15 }}
    animate={{ scale: 1.05 }}
    transition={{ duration: 6 }}
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=2070&auto=format&fit=crop')",
    }}
  />

  {/* Overlay dinámico */}
  <motion.div
    initial={{ opacity: 0.9 }}
    animate={{ opacity: 0.7 }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="absolute inset-0 bg-black"
  />

  {/* Glow */}
  <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-3xl rounded-full top-[-200px] right-[-150px]" />

  {/* Contenido */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center px-6 max-w-5xl"
  >
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
    >
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
    </motion.div>
  </motion.div>
</section>

      {/* SERVICIOS */}
      <motion.section
          id="servicios"
          ref={servicesRef}
          initial={{ opacity: 0, y: 80 }}
          animate={
          servicesInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 80 }
        }
        transition={{ duration: 1 }} 
        className="py-20 px-6 border-t border-red-600">
        <h2 className="text-4xl font-bold text-center mb-14">
          Nuestros <span className="text-red-500">Servicios</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto text-center">
          <div className="group border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">🔧</div>
            <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors duration-300">Afinación Completa</h3>
          </div>

          <div className="group border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">🛞</div>
            <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors duration-300">Frenos y Suspensión</h3>
          </div>

          <div className="group border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">⚙️</div>
            <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors duration-300">Transmisión y Cadena</h3>
          </div>

          <div className="group border border-white/10 bg-white/5 backdrop-blur-md p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">
           <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">🫧</div>
            <h3 className="text-xl font-semibold group-hover:text-red-400 transition-colors duration-300">Lavado Premium</h3>
          </div>
        </div>

        <p className="text-center mt-10 text-xl">
          Y mucho más... ¡Contáctanos para cualquier necesidad de tu bicicleta!
        </p>
      </motion.section>

      {/* RESEÑAS */}
      {/* RESEÑAS PREMIUM */}
<section
  id="reseñas"
  className="py-24 px-6 border-t border-red-600 bg-zinc-950"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-black mb-5">
        Lo que dicen nuestros{" "}
        <span className="text-red-500">clientes</span>
      </h2>

      <p className="text-zinc-400 text-xl">
        Opiniones reales de Google Maps 🚲
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Reseña 1 */}
      <div className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">

        <div className="flex gap-1 text-2xl mb-6">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          “Excelente servicio para tu bicicleta, te orientan sobre lo que le están haciendo a tu bici y dan buena atención.”
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
            T
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              trouchh
            </h3>

            <p className="text-zinc-500 text-sm">
              Google Maps • Local Guide
            </p>
          </div>
        </div>
      </div>

      {/* Reseña 2 */}
      <div className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">

        <div className="flex gap-1 text-2xl mb-6">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          “Excelente servicio y atención. Precios accesibles y compromiso con tiempos de entrega. Súper recomendable.”
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
            J
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Jonathan Alcocer Garcia
            </h3>

            <p className="text-zinc-500 text-sm">
              Google Maps • Local Guide
            </p>
          </div>
        </div>
      </div>

      {/* Reseña 3 */}
      <div className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10">

        <div className="flex gap-1 text-2xl mb-6">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          “Excelente servicio, la pintura hace que queden como nuevas. Lo recomiendo bastante 🤩”
        </p>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
            A
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Ana Martínez
            </h3>

            <p className="text-zinc-500 text-sm">
              Google Maps • Local Guide
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* GALERÍA */}
      {/* GALERÍA PREMIUM */}
<motion.section
  ref={galleryRef}
  initial={{ opacity: 0, y: 100 }}
  animate={
    galleryInView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 100 }
  }
  transition={{ duration: 1 }}
  className="py-24 px-6 border-t border-red-600 bg-black"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-black mb-5">
        Trabajos <span className="text-red-500">Recientes</span>
      </h2>

      <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
        Restauraciones, pintura personalizada, mantenimiento premium
        y bicicletas listas para rodar.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Imagen 1 */}
      <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-3">
        <img
          src="/images/trabajo1.jpg"
          className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Trabajo 1"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

        <div className="absolute bottom-0 p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-2">
            Restauración Premium
          </h3>

          <p className="text-zinc-300">
            Servicio completo y detallado.
          </p>
        </div>
      </div>

      {/* Imagen 2 */}
      <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-3">
        <img
          src="/images/trabajo2.jpg"
          className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Trabajo 2"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

        <div className="absolute bottom-0 p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-2">
            Soldadura Autógena
          </h3>

          <p className="text-zinc-300">
            Precisión y resistencia para tu cuadro.
          </p>
        </div>
      </div>

      {/* Imagen 3 */}
      <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-3">
        <img
          src="/images/trabajo3.jpg"
          className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Trabajo 3"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

        <div className="absolute bottom-0 p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-bold mb-2">
            Bicicletas Custom
          </h3>

          <p className="text-zinc-300">
            Diseños únicos y personalizados.
          </p>
        </div>
      </div>

    </div>
  </div>
</motion.section>

      {/* CONTACTO PREMIUM */}
<section
  id="contacto"
  className="py-24 px-6 border-t border-red-600 bg-black"
>
  <div className="max-w-7xl mx-auto">

    {/* Título */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-black mb-5">
        Contáctanos
      </h2>

      <p className="text-zinc-400 text-xl">
        Agenda tu servicio y dale nueva vida a tu bicicleta 🚲
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Información */}
      <div className="space-y-6">

        {/* Dirección */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 transition-all duration-500 hover:border-red-500/40 hover:bg-white/10">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl">
              📍
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Ubicación
              </h3>

              <p className="text-zinc-400">
                Metepec, Estado de México
              </p>
            </div>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Cam. Viejo a San Mateo 494, Bella Vista,
            Metepec, Estado de México.
          </p>
        </div>

        {/* Horarios */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 transition-all duration-500 hover:border-red-500/40 hover:bg-white/10">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl">
              🕒
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Horarios
              </h3>

              <p className="text-zinc-400">
                Atención semanal
              </p>
            </div>
          </div>

          <div className="space-y-2 text-zinc-300 text-lg">
            <p>Lunes a Viernes — 10:00 AM a 6:00 PM</p>
            <p>Sábado — 10:00 AM a 4:00 PM</p>
            <p>Domingo — 11:00 AM a 2:00 PM</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 transition-all duration-500 hover:border-green-500/40 hover:bg-white/10">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-2xl">
              💬
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                WhatsApp
              </h3>

              <p className="text-zinc-400">
                Atención rápida
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://wa.me/527222941031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 px-6 py-4 rounded-2xl font-semibold text-lg"
            >
              722 294 1031
            </a>

            <a
              href="https://wa.me/527227008264"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 px-6 py-4 rounded-2xl font-semibold text-lg"
            >
              722 700 8264
            </a>

          </div>
        </div>

      </div>

      {/* Mapa */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

        <iframe
          src="https://www.google.com/maps?q=Camino%20Viejo%20a%20San%20Mateo%20495%20Metepec&output=embed"
          className="w-full h-full min-h-[650px]"
          loading="lazy"
        />

        <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl pointer-events-none" />
      </div>

    </div>
  </div>
</section>

{/* FOOTER PREMIUM */}
<footer className="border-t border-red-600 bg-zinc-950 px-6 py-16">

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3 gap-12">

      {/* Marca */}
      <div>
        <div className="flex items-center gap-4 mb-6">

          <Image
            src="/images/logo2.png"
            alt="Bicicletas San Francisco"
            width={80}
            height={80}
            className="object-contain"
          />

          <div>
            <h3 className="text-2xl font-black">
              Bicicletas
            </h3>

            <p className="text-red-500 text-xl font-semibold">
              San Francisco
            </p>
          </div>
        </div>

        <p className="text-zinc-400 leading-relaxed text-lg">
          Taller profesional de bicicletas en Metepec.
          Restauración, mantenimiento, pintura y servicio premium 🚲
        </p>
      </div>

      {/* Navegación */}
      <div>
        <h3 className="text-2xl font-bold mb-6">
          Navegación
        </h3>

        <div className="flex flex-col gap-4 text-zinc-400 text-lg">

          <a
            href="#inicio"
            className="hover:text-red-500 transition"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="hover:text-red-500 transition"
          >
            Servicios
          </a>

          <a
            href="#reseñas"
            className="hover:text-red-500 transition"
          >
            Reseñas
          </a>

          <a
            href="#contacto"
            className="hover:text-red-500 transition"
          >
            Contacto
          </a>

        </div>
      </div>

      {/* Redes */}
      <div>
        <h3 className="text-2xl font-bold mb-6">
          Síguenos
        </h3>

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://www.instagram.com/tallerdebicicletassanfrancisco/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 rounded-2xl px-6 py-4"
          >
            📸 Instagram
          </a>

          <a
            href="https://www.facebook.com/BicicletasSanFrancisco"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 rounded-2xl px-6 py-4"
          >
            👍 Facebook
          </a>

          <a
            href="https://www.tiktok.com/@bicicletassanfrancisco"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 rounded-2xl px-6 py-4"
          >
            🎶 TikTok
          </a>

          <a
            href="https://wa.me/527227008264"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 rounded-2xl px-6 py-4"
          >
            💬 WhatsApp
          </a>

        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 mt-14 pt-8 text-center text-zinc-500">
      © 2026 Bicicletas San Francisco — Todos los derechos reservados.
    </div>

  </div>
</footer>
    </main>
  );
}