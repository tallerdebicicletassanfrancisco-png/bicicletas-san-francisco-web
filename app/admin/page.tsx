"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (
        user &&
        user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
      ) {
        setAuthorized(true);
      } else {
        window.location.href = "/login";
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Verificando acceso...
      </main>
    );
  }

  if (!authorized) return null;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        Panel Privado 🚲
      </h1>

      <p className="text-xl">
        Bienvenido al administrador de Bicicletas San Francisco.
      </p>
    </main>
  );
}