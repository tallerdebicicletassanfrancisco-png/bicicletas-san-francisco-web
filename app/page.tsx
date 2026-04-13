import Image from "next/image";
export default function Home() {
  const whatsappLink =
    "https://wa.me/527227008264?text=Hola%20quiero%20agendar%20servicio%20para%20mi%20bicicleta";

  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
           alt="Bicicletas San Francisco"
           width={180}
           height={60}
           className="h-12 w-auto"
           priority/>
</div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-5 py-2 rounded-xl font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485965120184-e220f721d03e')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Taller y Venta de Bicicletas en Metepec
          </h1>

          <p className="text-2xl mb-8">
            Servicio profesional, rápido y garantizado.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Agendar Servicio
            </a>

            <a
              href="#servicios"
              className="border border-white px-8 py-4 rounded-xl text-lg"
            >
              Ver Servicios
            </a>
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
            <p className="mb-6">📞 WhatsApp: 722 294 1031</p>
            <p className="mb-6">📞 WhatsApp: 722 700 8264</p>

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