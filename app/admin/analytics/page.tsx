export default function AnalyticsPage() {
  const stats = [
    {
      title: "Visitas Web",
      value: "Analytics",
      icon: "🌐",
    },
    {
      title: "Clicks WhatsApp",
      value: "Eventos",
      icon: "💬",
    },
    {
      title: "Google Maps",
      value: "Eventos",
      icon: "📍",
    },
    {
      title: "Instagram",
      value: "Social",
      icon: "📸",
    },
    {
      title: "TikTok",
      value: "Social",
      icon: "🎶",
    },
    {
      title: "Facebook",
      value: "Social",
      icon: "👍",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">

          <h1 className="text-5xl font-black mb-4">
            Analytics
          </h1>

          <p className="text-zinc-400 text-xl">
            Métricas y eventos del sitio 🚀
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-red-500/10"
            >

              <div className="text-6xl mb-6">
                {stat.icon}
              </div>

              <h2 className="text-3xl font-bold mb-3">
                {stat.title}
              </h2>

              <p className="text-zinc-400 text-lg">
                {stat.value}
              </p>

            </div>
          ))}

        </div>

        {/* Botón Analytics */}
        <div className="mt-14">

          <a
            href="https://analytics.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-600/30"
          >
            Abrir Google Analytics
          </a>

        </div>

      </div>
    </main>
  );
}