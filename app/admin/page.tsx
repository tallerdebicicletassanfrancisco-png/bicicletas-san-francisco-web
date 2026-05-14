"use client";

import {
  LayoutDashboard,
  Images,
  Wrench,
  Boxes,
  ShoppingCart,
  Settings,
} from "lucide-react";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-zinc-950 border-r border-red-600/30 p-6 hidden md:flex flex-col">

        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-3xl font-black">
            Bicicletas
          </h1>

          <p className="text-red-500 text-xl font-semibold">
            San Francisco
          </p>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col gap-3">

          <button className="flex items-center gap-4 bg-red-600/20 border border-red-600/30 px-5 py-4 rounded-2xl text-left hover:bg-red-600/30 transition">
            <LayoutDashboard size={22} />
            Dashboard
          </button>

          <button className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/5 transition">
            <Images size={22} />
            Galería
          </button>

          <button className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/5 transition">
            <Wrench size={22} />
            Servicios
          </button>

          <button className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/5 transition">
            <Boxes size={22} />
            Inventario
          </button>

          <button className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/5 transition">
            <ShoppingCart size={22} />
            Ventas
          </button>

          <button className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/5 transition">
            <Settings size={22} />
            Configuración
          </button>

        </nav>

      </aside>

      {/* CONTENIDO */}
      <section className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-black">
              Dashboard 🚲
            </h2>

            <p className="text-zinc-400 mt-2">
              Bienvenido al panel administrativo.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
            Admin
          </div>

        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-zinc-400 text-lg mb-2">
              Trabajos publicados
            </h3>

            <p className="text-5xl font-black text-red-500">
              0
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-zinc-400 text-lg mb-2">
              Servicios activos
            </h3>

            <p className="text-5xl font-black text-red-500">
              4
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h3 className="text-zinc-400 text-lg mb-2">
              Estado del sistema
            </h3>

            <p className="text-3xl font-black text-green-500">
              Online
            </p>
          </div>

        </div>

        {/* Próximamente */}
        <div className="mt-10 bg-gradient-to-r from-red-600/20 to-black border border-red-600/20 rounded-3xl p-8">

          <h3 className="text-3xl font-black mb-4">
            Próximamente 🔥
          </h3>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Inventario, ventas, punto de venta, tickets,
            clientes y estadísticas avanzadas.
          </p>

        </div>

      </section>
    </main>
  );
}