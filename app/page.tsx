export default function Home() {
  const whatsappLink =
    "https://wa.me/527227008264?text=Hola%20quiero%20cotizar%20una%20bicicleta";

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517649763962-0c623066013b')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bicicletas San Francisco 🚲
          </h1>

          <p className="text-xl md:text-2xl mb-8">
            Taller profesional, accesorios y servicio experto en Metepec.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Agenda tu servicio
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-3">Afinación</h3>
            <p>Servicio completo para dejar tu bici como nueva.</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-3">Frenos y cambios</h3>
            <p>Ajuste profesional y cambio de componentes.</p>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold mb-3">
              Venta de bicicletas
            </h3>
            <p>Bicicletas usadas y accesorios listos para rodar.</p>
          </div>
        </div>
      </section>
                  {/* UBICACIÓN */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Visítanos en Metepec 📍
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Taller de Bicicletas San Francisco 🚲
            </h3>

            <p className="mb-3">
              📍 Cam. Viejo a San Mateo 495, Bella Vista, 52172 San Salvador
              Tizatlalli, Méx.
            </p>

            <p className="mb-3">
              🕒 Abierto · Cierra a las 6:00 p.m.
            </p>

            <p className="mb-3">
              ⭐ 4.1 estrellas (13 opiniones)
            </p>

            <p className="mb-6">
              📞 722 700 8264
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://maps.app.goo.gl/EAnNPgVaKDq9dNiF6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-xl"
              >
                Ver ubicación
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Facebook
              </a>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Camino%20Viejo%20a%20San%20Mateo%20495%20Metepec&output=embed"
            className="w-full h-[400px] rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* BOTÓN WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold"
      >
        💬 WhatsApp
      </a>
    </main>
  );
}