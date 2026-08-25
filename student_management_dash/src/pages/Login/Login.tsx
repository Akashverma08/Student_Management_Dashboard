"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "Akash@0401") {
      localStorage.setItem("isLoggedIn", "true");

      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 400,
          padding: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Login
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            margin="normal"
          />

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}