"use client";
import { useState } from "react";
import { Input } from "@/hooks/ui/Input";
import { Button } from "@/hooks/ui/Button";
import { useSignin } from "@/hooks/useSignin";

export default function SigninForm() {
  const { handleSignin, loading, error, success } = useSignin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignin(email, password);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center gap-3 shadow-lg w-[320px]"
    >
      <h2 className="text-lg font-semibold text-white mb-2">Iniciar sesión</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && (
        <p className="text-green-400 text-sm text-center">
          ✅ Sesión iniciada correctamente
        </p>
      )}

      <Input placeholder="Email" value={email} onChange={setEmail} type="email" />
      <Input
        placeholder="Contraseña"
        value={password}
        onChange={setPassword}
        type="password"
      />

      <Button label={loading ? "Ingresando..." : "Entrar"} type="submit" />

      <p className="text-gray-300 text-sm mt-2">
        ¿No tienes cuenta?{" "}
        <a href="/signup" className="text-[#e7b672] hover:underline">
          Crear cuenta
        </a>
      </p>
    </form>
  );
}
