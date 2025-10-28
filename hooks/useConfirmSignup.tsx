"use client";
import { useState } from "react";
import { AuthService } from "@/lib/api/auth";
import {useRouter} from "next/navigation"

export function useConfirmSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
 const router = useRouter()

  const handleConfirm = async (email: string, code: string) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const result = await AuthService.confirmSignup({ email, code });
      console.log("✅ Confirmación exitosa:", result);

      router.push(`/signin?email=${email}`)
      setSuccess(true);
      return result;
    } catch (err: any) {
      console.error("❌ Error al confirmar:", err);
      setError(err.message || "Error al confirmar el código");
    } finally {
      setLoading(false);
    }
  };

  return { handleConfirm, loading, error, success };
}
