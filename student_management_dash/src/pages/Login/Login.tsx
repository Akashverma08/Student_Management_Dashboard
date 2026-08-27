"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

import { useAuth } from "@/src/context/AuthContext";
import { getStudents } from "@/src/services/studentService";

type LoginType = "admin" | "student";

export default function Login() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [loginType, setLoginType] = useState<LoginType>("student");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // =========================
    // ADMIN LOGIN
    // =========================
    if (loginType === "admin") {
      if (
        username === "admin" &&
        password === "Akash@0401"
      ) {
        localStorage.setItem("isLoggedIn", "true");

        setUser({
          name: "Akash Verma",
          role: "Administrator",
        });

        router.push("/dashboard");
        return;
      }

      setError("Invalid admin username or password");
      return;
    }

    // =========================
    // STUDENT LOGIN
    // =========================
    try {
      const students = getStudents();

      const student = students.find((student) => {
        const [year, month, day] =
          student.dob.split("-");

        const formattedDob =
          `${day}${month}${year}`;

        return (
          student.email.toLowerCase() ===
            username.toLowerCase() &&
          formattedDob === password
        );
      });

      if (!student) {
        setError("Invalid student email or date of birth");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");

      setUser({
        name: `${student.firstName} ${student.lastName}`,
        role: "student",
        studentId: student.id,
        email: student.email,
      });

      router.push("/profile");
    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to login. Please try again."
      );
    }
  };

  const handleLoginTypeChange = (
    value: LoginType
  ) => {
    setLoginType(value);

    // Clear old credentials/errors
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 94px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fa",
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

        {/* LOGIN TYPE */}
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>
            Login As
          </FormLabel>

          <RadioGroup
            row
            value={loginType}
            onChange={(e) =>
              handleLoginTypeChange(
                e.target.value as LoginType
              )
            }
          >
            <FormControlLabel
              value="admin"
              control={<Radio />}
              label="Admin"
            />

            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
          </RadioGroup>
        </FormControl>

        <Box
          component="form"
          onSubmit={handleLogin}
        >
          {/* USERNAME / EMAIL */}
          <TextField
            fullWidth
            label={
              loginType === "admin"
                ? "Username"
                : "Email"
            }
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            margin="normal"
          />

          {/* PASSWORD / DOB */}
          <TextField
            fullWidth
            label={
              loginType === "admin"
                ? "Password"
                : "Date of Birth"
            }
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            margin="normal"
            placeholder={
              loginType === "student"
                ? "DDMMYYYY"
                : ""
            }
          />

          {/* ERROR */}
          {error && (
            <Typography
              color="error"
              sx={{ mt: 1 }}
            >
              {error}
            </Typography>
          )}

          {/* LOGIN BUTTON */}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              mt: 3,
              py: 1.2,
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}