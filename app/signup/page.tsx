import Image from "next/image";
import SignupForm from "@/components/login/SignupForm";
import Logo from "@/hooks/ui/Logo";

export default function SignupPage() {
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
        <SignupForm />
      </div>
    </div>
  );
}
