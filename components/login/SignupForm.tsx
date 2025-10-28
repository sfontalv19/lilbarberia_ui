"use client";
import { useState } from "react";
import { Input } from "@/hooks/ui/Input";
import { Button } from "@/hooks/ui/Button";
import { useSignup } from "@/hooks/useSignup";

export default function SignupForm() {
  const { handleSignup, loading, error } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSignup(email, password, phone);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center gap-3 shadow-lg w-[320px]"
    >
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <Input placeholder="Email" value={email} onChange={setEmail} type="email" />
      <div className="flex gap-2 w-full">
        <Input placeholder="Contraseña" value={password} onChange={setPassword} type="password" />
        <Input placeholder="Teléfono" value={phone} onChange={setPhone} type="tel" />
      </div>
      <Button label={loading ? "Creando..." : "Crear cuenta"} type="submit" />
    </form>
  );
}
