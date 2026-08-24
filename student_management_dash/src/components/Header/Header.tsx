"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");

    router.push("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: "#ffffff",
        color: "#1f2937",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 3,
        }}
      >
        {/* Logo + Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#1976d2",
              width: 40,
              height: 40,
            }}
          >
            <SchoolIcon />
          </Avatar>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Student Management System
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
              }}
            >
              Manage students efficiently
            </Typography>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              color: "text.secondary",
            }}
          >
            Admin Panel
          </Typography>

          <Button
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}