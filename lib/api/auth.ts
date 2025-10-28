export const AuthService = {
  signup: async (data: { email: string; password: string; phone: string }) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_SIGNUP_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al registrar usuario");
    return res.json();
  },

  signin: async (data: { email: string; password: string }) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_SIGNIN_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al iniciar sesión");
    return res.json();
  },

  confirmSignup: async (data: { email: string; code: string }) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_CONFIRM_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al confirmar código");
    return res.json();
  },
};