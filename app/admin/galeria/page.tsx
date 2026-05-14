"use client";

import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function GaleriaAdmin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "trabajos"), {
        title,
        description,
        image,
        createdAt: new Date(),
      });

      alert("Trabajo agregado 🔥");

      setTitle("");
      setDescription("");
      setImage("");

    } catch (error) {
      console.error(error);
      alert("Error al guardar");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black mb-4">
          Nueva publicación 🚲
        </h1>

        <p className="text-zinc-400 mb-10 text-lg">
          Agrega trabajos para mostrarlos en la página principal.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4"
            required
          />

          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 min-h-[140px]"
            required
          />

          <input
            type="text"
            placeholder="URL de imagen"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4"
            required
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-semibold text-lg"
          >
            Publicar trabajo
          </button>

        </form>

      </div>

    </main>
  );
}