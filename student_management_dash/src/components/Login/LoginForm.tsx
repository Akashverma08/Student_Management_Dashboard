"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import { LoginType } from "./LoginTypeSelector";

interface LoginFormProps {
  loginType: LoginType;

  username: string;
  password: string;

  error: string;

  onUsernameChange: (
    value: string
  ) => void;

  onPasswordChange: (
    value: string
  ) => void;

  onSubmit: (
    e: React.FormEvent
  ) => void;
}

export default function LoginForm({
  loginType,
  username,
  password,
  error,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
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
          onUsernameChange(
            e.target.value
          );
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
          onPasswordChange(
            e.target.value
          );
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
  );
}