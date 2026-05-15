import Link from "next/link";

export default function AdminDashboard() {
  const cards = [
    {
      title: "Homepage",
      description: "Editar textos principales",
      href: "/admin/homepage",
      icon: "🏠",
    },
    {
      title: "Galería",
      description: "Administrar imágenes",
      href: "/admin/galeria",
      icon: "🖼️",
    },
    {
      title: "Analytics",
      description: "Métricas y eventos",
      href: "/admin/analytics",
      icon: "📊",
    },
    {
      title: "POS",
      description: "Punto de venta",
      href: "/admin/pos",
      icon: "💳",
    },
    {
      title: "Inventario",
      description: "Control de productos",
      href: "/admin/inventario",
      icon: "📦",
    },
    {
      title: "Órdenes",
      description: "Servicios y clientes",
      href: "/admin/ordenes",
      icon: "🛠️",
    },
  ];

const stats = [
  {
    title: "Visitas Web",
    value: "1,284",
    icon: "🌐",
  },
  {
    title: "Clicks WhatsApp",
    value: "94",
    icon: "💬",
  },
  {
    title: "Órdenes Activas",
    value: "12",
    icon: "🛠️",
  },
  {
    title: "Productos",
    value: "38",
    icon: "📦",
  },
];

  return (
    
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <h1 className="text-5xl font-black mb-4">
            Dashboard Admin
          </h1>

          <p className="text-zinc-400 text-xl">
            Bicicletas San Francisco 🚲
          </p>
        </div>
        {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">

            {stats.map((stat) => (
         <div
            key={stat.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300"
          >
          <div className="text-4xl mb-4">
            {stat.icon}
          </div>

            <h2 className="text-zinc-400 text-lg mb-2">
              {stat.title}
            </h2>

            <p className="text-3xl font-black">
              {stat.value}
            </p>
        </div>
  ))}

</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="text-6xl mb-6">
                {card.icon}
              </div>

              <h2 className="text-3xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                {card.title}
              </h2>

              <p className="text-zinc-400 text-lg">
                {card.description}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </main>
    
  );
}