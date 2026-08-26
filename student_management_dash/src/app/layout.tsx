import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { AuthProvider } from "@/src/context/AuthContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Management Dashboard",
  description: "Student Management System",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <AppRouterCacheProvider>

          <AuthProvider>

            <Header />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

          </AuthProvider>

        </AppRouterCacheProvider>

      </body>
    </html>
  );
}