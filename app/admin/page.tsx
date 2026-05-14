"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { auth } from "../firebase";
import { db } from "../firebase";

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (
        user &&
        user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
      ) {
        setAuthorized(true);

        const docRef = doc(db, "siteContent", "homepage");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setTitle(data.title || "");
          setSubtitle(data.subtitle || "");
          setWhatsapp(data.whatsapp || "");
        }
      } else {
        window.location.href = "/login";
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const saveChanges = async () => {
    try {
      const docRef = doc(db, "siteContent", "homepage");

      await updateDoc(docRef, {
        title,
        subtitle,
        whatsapp,
      });

      alert("Cambios guardados 🚲");
    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    }
  };

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
      <h1 className="text-5xl font-bold mb-10">
        Panel Admin 🚲
      </h1>

      <div className="max-w-2xl space-y-6">
        <div>
          <label className="block mb-2">Título</label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        <div>
          <label className="block mb-2">Subtítulo</label>

          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        <div>
          <label className="block mb-2">WhatsApp</label>

          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        <button
          onClick={saveChanges}
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold"
        >
          Guardar cambios
        </button>
      </div>
    </main>
  );
}