"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Logo from "@/hooks/ui/Logo";
import {Button} from "@/hooks/ui/Button"
import Image from "next/image";
import ConfirmSignupForm from "@/components/login/ConfirmSignupForm";

export default function ConfirmSignupPage() {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email") || "";
  const [email, setEmail] = useState(emailFromUrl);
  const [code, setCode] = useState("");

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    // Llamar a tu endpoint confirmSignup
  };

    return (
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Fondo */}
        <Image
          src="/bg-barberia.jpg"
          alt="Fondo barbería"
          fill
          className="object-cover brightness-50"
          priority
        />
  
        {/* Contenedor central */}
        <div className="relative z-10 flex flex-col items-center">
          <Logo />
          <ConfirmSignupForm />
        </div>
      </div>
    );
}
export const dynamic = "force-dynamic";