export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Bicicletas San Francisco 🚲
        </h1>

        <p className="text-xl max-w-2xl mx-auto mb-8">
          Taller profesional especializado, venta de bicicletas, accesorios y servicio profesional en Metepec.
        </p>

        <a
          href="https://wa.me/52722TU_NUMERO"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl text-lg"
        >
          Agenda tu servicio por WhatsApp
        </a>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Afinación</h3>
            <p>Deja tu bici lista para rodar como nueva.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Frenos y cambios</h3>
            <p>Ajuste profesional y cambio de piezas.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Venta de bicis</h3>
            <p>Bicicletas usadas y accesorios seleccionados.</p>
          </div>
        </div>
      </section>
    </main>
  );
}