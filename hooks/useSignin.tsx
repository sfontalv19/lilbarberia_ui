import { useState } from "react";
import { AuthService } from "@/lib/api/auth";

export function useSignin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignin = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const result = await AuthService.signin({ email, password });
      console.log("Inicio de sesión exitoso:", result);
      setSuccess(true);

      // Guarda token o sesión local si tu Lambda lo devuelve
      if (result.token) {
        localStorage.setItem("token", result.token);
      }

      return result;
    } catch (err: any) {
      console.error("Error al iniciar sesión:", err);
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return { handleSignin, loading, error, success };
}
