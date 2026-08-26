"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import Sidebar from "@/src/components/Sidebar/Sidebar";

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

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "calc(100vh - 70px)",
            }}
        >
            <Sidebar />

            <Box
                component="main"
                sx={{
                    flex: 1,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}