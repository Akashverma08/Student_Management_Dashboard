"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {
      router.replace("/login");
    }
  }, [router]);

  return <>{children}</>;
}