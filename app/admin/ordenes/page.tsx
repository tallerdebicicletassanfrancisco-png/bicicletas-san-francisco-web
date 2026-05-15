export default function OrdenesPage() {
  const ordenes = [
    {
      cliente: "Juan Pérez",
      servicio: "Afinación Completa",
      estado: "En proceso",
    },
    {
      cliente: "Carlos Ramírez",
      servicio: "Lavado Premium",
      estado: "Finalizado",
    },
    {
      cliente: "Miguel Torres",
      servicio: "Cambio de Frenos",
      estado: "Pendiente",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex justify-between items-center">

          <div>
            <h1 className="text-5xl font-black mb-4">
              Órdenes
            </h1>

            <p className="text-zinc-400 text-xl">
              Servicios y clientes 🛠️
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 px-6 py-3 rounded-2xl font-semibold">
            + Nueva Orden
          </button>

        </div>

        {/* Tabla */}
        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-white/5 text-left">

              <tr>
                <th className="p-6 text-lg">
                  Cliente
                </th>

                <th className="p-6 text-lg">
                  Servicio
                </th>

                <th className="p-6 text-lg">
                  Estado
                </th>
              </tr>

            </thead>

            <tbody>

              {ordenes.map((orden) => (
                <tr
                  key={orden.cliente}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-6 text-lg">
                    {orden.cliente}
                  </td>

                  <td className="p-6 text-lg">
                    {orden.servicio}
                  </td>

                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        orden.estado === "Finalizado"
                          ? "bg-green-600/20 text-green-400"
                          : orden.estado === "En proceso"
                          ? "bg-yellow-600/20 text-yellow-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {orden.estado}
                    </span>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}