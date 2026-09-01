"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Box } from "@mui/material";
import Sidebar from "@/src/components/Sidebar/Sidebar";

import { useAuth } from "@/src/context/AuthContext";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "";

  const { user, initialized } = useAuth();

  useEffect(() => {
    if (!initialized) return;

    // Not logged in
    if (!user) {
      router.replace("/login");
      return;
    }

    // ---------------- STUDENT ROUTES ----------------
    if (user.role === "student") {
      const studentAllowedRoutes = [
        "/profile",
        "/profile/edit",
        "/events",
      ];

      const isAllowed = studentAllowedRoutes.some(
        (route) =>
          pathname === route ||
          pathname.startsWith(`${route}/`)
      );

      if (!isAllowed) {
        router.replace("/profile");
      }

      return;
    }

    // ---------------- ADMIN ROUTES ----------------
    if (user.role === "Administrator") {
      const adminAllowedRoutes = [
        "/dashboard",
        "/students",
        "/analytics",
        "/courses",
        "/events",
      ];

      const isAllowed = adminAllowedRoutes.some(
        (route) =>
          pathname === route ||
          pathname.startsWith(`${route}/`)
      );

      if (!isAllowed) {
        router.replace("/dashboard");
      }
    }
  }, [user, initialized, pathname, router]);

  if (!initialized) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "calc(100vh - 70px)",
        backgroundColor: "#f5f7fa",
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          backgroundColor: "#f5f7fa",
          p: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}