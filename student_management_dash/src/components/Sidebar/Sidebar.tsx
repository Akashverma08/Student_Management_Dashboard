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

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

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

        {/* Dashboard */}
        <ListItemButton onClick={() => router.push("/dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>


        {/* Students */}
        <ListItemButton onClick={() => router.push("/students")}>
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
        <ListItemButton onClick={() => router.push("/courses")}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>

          <ListItemText primary="Courses" />
        </ListItemButton>

      </List>
    </Box>
  );
}