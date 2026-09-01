"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

import { useAuth } from "@/src/context/AuthContext";

import {
  login as loginService,
} from "@/src/services/authService";

import LoginTypeSelector, {
  LoginType,
} from "@/src/components/Login/LoginTypeSelector";

import LoginForm from "@/src/components/Login/LoginForm";

export default function Login() {
  const router = useRouter();

  const { setUser } = useAuth();

  const [loginType, setLoginType] =
    useState<LoginType>("student");

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError("");

    try {
      const user = loginService(
        loginType,
        username,
        password
      );

      if (!user) {
        if (loginType === "admin") {
          setError(
            "Invalid admin username or password"
          );
        } else {
          setError(
            "Invalid student email or date of birth"
          );
        }

        return;
      }

      setUser(user);

      sessionStorage.setItem(
        "isLoggedIn",
        "true"
      );

      if (user.role === "Administrator") {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }

    } catch (error) {
      console.error(
        "Login error:",
        error
      );

      setError(
        "Unable to login. Please try again."
      );
    }
  };

  const handleLoginTypeChange = (
    value: LoginType
  ) => {
    setLoginType(value);

    setUsername("");
    setPassword("");
    setError("");
  };

  const handleUsernameChange = (
    value: string
  ) => {
    setUsername(value);
    setError("");
  };

  const handlePasswordChange = (
    value: string
  ) => {
    setPassword(value);
    setError("");
  };

  return (
    <Box
      sx={{
        minHeight:
          "calc(100vh - 94px)",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        backgroundColor:
          "#f5f7fa",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Login
        </Typography>

        <LoginTypeSelector
          loginType={loginType}
          onChange={
            handleLoginTypeChange
          }
        />

        <LoginForm
          loginType={loginType}
          username={username}
          password={password}
          error={error}
          onUsernameChange={
            handleUsernameChange
          }
          onPasswordChange={
            handlePasswordChange
          }
          onSubmit={handleLogin}
        />
      </Paper>
    </Box>
  );
}