"use client";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";

import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

export default function Sidebar() {
  const router = useRouter();
  const { user } = useAuth();

  const isStudent = user?.role === "student";

  return (
    <Box
      sx={{
        width: 220,
        minHeight: "100%",
        borderRight: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          px: 2,
          py: 2,
          fontWeight: 600,
        }}
      >
        Menu
      </Typography>

      <List>

        {/* ================= STUDENT ================= */}

        {isStudent ? (
          <>
            {/* Profile */}
            <ListItemButton
              onClick={() => router.push("/profile")}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>

              <ListItemText primary="Profile" />
            </ListItemButton>

            {/* Events */}
            <ListItemButton
              onClick={() => router.push("/events")}
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>

              <ListItemText primary="Events" />
            </ListItemButton>
          </>
        ) : (

          /* ================= ADMIN ================= */

          <>
            {/* Dashboard */}
            <ListItemButton
              onClick={() => router.push("/dashboard")}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItemButton>

            {/* Students */}
            <ListItemButton
              onClick={() => router.push("/students")}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>

              <ListItemText primary="Students" />
            </ListItemButton>

            {/* Analytics */}
            <ListItemButton
              onClick={() => router.push("/analytics")}
            >
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>

              <ListItemText primary="Analytics" />
            </ListItemButton>

            {/* Courses */}
            <ListItemButton
              onClick={() => router.push("/courses")}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>

              <ListItemText primary="Courses" />
            </ListItemButton>


            {/* Events */}
            <ListItemButton onClick={() => router.push("/events")}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>

              <ListItemText primary="Events" />
            </ListItemButton>
          </>
        )}

      </List>
    </Box>
  );
}