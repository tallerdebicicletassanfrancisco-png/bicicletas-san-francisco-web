"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "@/app/firebase";

import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  const links = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: "🏠",
    },
    {
      name: "Homepage",
      href: "/admin/homepage",
      icon: "✏️",
    },
    {
      name: "Galería",
      href: "/admin/galeria",
      icon: "🖼️",
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: "📊",
    },
    {
      name: "POS",
      href: "/admin/pos",
      icon: "💳",
    },
    {
      name: "Inventario",
      href: "/admin/inventario",
      icon: "📦",
    },
    {
      name: "Órdenes",
      href: "/admin/ordenes",
      icon: "🛠️",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">
        Cargando...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-zinc-950 p-6 hidden md:flex flex-col">

        <div className="mb-12">

          <h1 className="text-3xl font-black">
            Admin
          </h1>

          <p className="text-zinc-500 mt-2">
            Bicicletas San Francisco 🚲
          </p>

          <button
            onClick={() => signOut(auth)}
            className="mt-6 bg-red-600 hover:bg-red-700 transition-all duration-300 px-5 py-3 rounded-2xl font-semibold"
          >
            Cerrar sesión
          </button>

        </div>

        <nav className="flex flex-col gap-3">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/40 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-2xl">
                {link.icon}
              </span>

              <span className="text-lg font-medium">
                {link.name}
              </span>
            </Link>
          ))}

        </nav>

      </aside>

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}