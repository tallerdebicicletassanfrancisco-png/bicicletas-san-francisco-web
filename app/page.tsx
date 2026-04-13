export default function Home() {
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
            href="https://wa.me/527227008264"
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
            <h3 className="text-2xl font-semibold mb-3">Venta de bicicletas</h3>
            <p>Bicicletas usadas y accesorios listos para rodar.</p>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/52722TU_NUMERO"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl text-lg font-bold"
      >
        WhatsApp
      </a>
    </main>
  );
}