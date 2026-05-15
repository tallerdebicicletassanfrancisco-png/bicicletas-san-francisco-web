"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LoginPage() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(
  auth,
  googleProvider
);

const email = result.user.email;

if (
  email !== "tallerdebicicletassanfrancisco@gmail.com"
) {
  await auth.signOut();

  alert(
    "No tienes permisos para acceder."
  );

  return;
}

window.location.href = "/admin";
    } 
    catch (error: any) {
  console.error(error);
  alert(error.message);
}
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="bg-zinc-900 p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-red-600">
        
        <h1 className="text-4xl font-bold mb-4">
          Panel Admin 🚲
        </h1>

        <p className="text-zinc-400 mb-8">
          Acceso privado para Bicicletas San Francisco
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition-transform"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </main>
  );
}