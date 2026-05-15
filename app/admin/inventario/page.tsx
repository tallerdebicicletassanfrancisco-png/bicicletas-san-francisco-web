export default function InventarioPage() {
  const productos = [
    {
      nombre: "Cadena Shimano",
      stock: 12,
      precio: "$450",
    },
    {
      nombre: "Llantas MTB",
      stock: 8,
      precio: "$850",
    },
    {
      nombre: "Casco Profesional",
      stock: 5,
      precio: "$1,200",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex justify-between items-center">

          <div>
            <h1 className="text-5xl font-black mb-4">
              Inventario
            </h1>

            <p className="text-zinc-400 text-xl">
              Control de productos y stock 📦
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 px-6 py-3 rounded-2xl font-semibold">
            + Nuevo Producto
          </button>

        </div>

        {/* Tabla */}
        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-white/5 text-left">

              <tr>
                <th className="p-6 text-lg">Producto</th>
                <th className="p-6 text-lg">Stock</th>
                <th className="p-6 text-lg">Precio</th>
              </tr>

            </thead>

            <tbody>

              {productos.map((producto) => (
                <tr
                  key={producto.nombre}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-6 text-lg">
                    {producto.nombre}
                  </td>

                  <td className="p-6 text-lg">
                    {producto.stock}
                  </td>

                  <td className="p-6 text-lg">
                    {producto.precio}
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