"use client";
import { useState } from "react";
import { Input } from "@/hooks/ui/Input";
import { Button } from "@/hooks/ui/Button";
import { useConfirmSignup } from "@/hooks/useConfirmSignup";

export default function ConfirmSignupForm() {
  const { handleConfirm, loading, error, success } = useConfirmSignup();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleConfirm(email, code);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center gap-3 shadow-lg w-[320px]"
    >
      <h2 className="text-lg font-semibold text-white mb-2">Confirmar Registro</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && (
        <p className="text-green-400 text-sm text-center">
          Cuenta confirmada! Ya puedes iniciar sesión.
        </p>
      )}

      <Input placeholder="Email" value={email} onChange={setEmail} type="email" />
      <Input placeholder="Código de verificación" value={code} onChange={setCode} />

      <Button label={loading ? "Verificando..." : "Confirmar"} type="submit" />
    </form>
  );
}
