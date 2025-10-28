"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useSignin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signin = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      // 🔐 Llama a tu endpoint de signin (cuando tengas el API Gateway, solo cambia la URL)
      // Ejemplo temporal:
      // const resp = await fetch("/api/signin", { method: "POST", body: JSON.stringify({ email, password }) });
      // if (!resp.ok) throw new Error("Credenciales inválidas");

      // ✅ Si todo ok:
      router.replace("/bienvenido"); // o router.push("/panel") si prefieres
    } catch (e: any) {
      setError(e.message ?? "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return { signin, loading, error };
}
