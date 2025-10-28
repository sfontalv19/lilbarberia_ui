import Image from "next/image";
import SigninForm from "@/components/login/SigninForm";
import Logo from "@/hooks/ui/Logo";

export default function signinPage(){
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
        <SigninForm />
      </div>
    </div>
  );
}
