"use client";
import { useRouter } from "next/navigation";

async function onSigninSuccess() {
  // ... tu lógica de signin OK
  const router = useRouter();
  router.push("/panel");
}
