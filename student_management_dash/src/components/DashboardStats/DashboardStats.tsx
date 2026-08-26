"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentIcon from "@mui/icons-material/Assignment";

import {
  getStudents,
  getStudentStats,
} from "@/src/services/studentService";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
    averageScore: 0,
    pendingAssignments: 0,
  });

  useEffect(() => {
    const students = getStudents();
    setStats(getStudentStats(students));
  }, []);

  const {
    total,
    active,
    completed,
    averageScore,
    pendingAssignments,
  } = stats;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        },
        gap: 2.5,
      }}
    >
      <StatCard
        title="Total Students"
        value={total}
        icon={<PeopleIcon />}
        iconColor="#1976d2"
        iconBg="#e3f2fd"
      />

      <StatCard
        title="Active Students"
        value={active}
        icon={<PersonIcon />}
        iconColor="#2e7d32"
        iconBg="#e8f5e9"
      />

      <StatCard
        title="Completed Students"
        value={completed}
        icon={<CheckCircleIcon />}
        iconColor="#ed6c02"
        iconBg="#fff3e0"
      />

      <StatCard
        title="Average Score"
        value={`${averageScore}%`}
        icon={<TrendingUpIcon />}
        iconColor="#7b1fa2"
        iconBg="#f3e5f5"
      />

      <StatCard
        title="Pending Assignments"
        value={pendingAssignments}
        icon={<AssignmentIcon />}
        iconColor="#d32f2f"
        iconBg="#ffebee"
      />
    </Box>
  );
}


/* ================= Stats Card ================= */

function StatCard({
  title,
  value,
  icon,
  iconColor,
  iconBg,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
}) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 2,
        minHeight: 140,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          boxSizing: "border-box",
          p: 2.5,
          "&:last-child": {
            pb: 2.5,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            gap: 2,
          }}
        >
          {/* Left side */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: 500,
                lineHeight: 1.4,
                whiteSpace: "normal",
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mt: 1,
                lineHeight: 1,
              }}
            >
              {value}
            </Typography>
          </Box>

          {/* Right side icon */}
          <Avatar
            sx={{
              width: 52,
              height: 52,
              backgroundColor: iconBg,
              color: iconColor,
              flexShrink: 0,
            }}
          >
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );
}