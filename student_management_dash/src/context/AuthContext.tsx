"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { User } from "@/src/types/auth";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  initialized: boolean;
}

const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUserState] =
    useState<User | null>(null);

  const [initialized, setInitialized] =
    useState(false);

  useEffect(() => {
    const storedUser =
      sessionStorage.getItem("user");

    if (storedUser) {
      setUserState(
        JSON.parse(storedUser)
      );
    }

    setInitialized(true);
  }, []);

  const setUser = (
    user: User | null
  ) => {
    setUserState(user);

    if (user) {
      sessionStorage.setItem(
        "user",
        JSON.stringify(user)
      );
    } else {
      sessionStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        initialized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}