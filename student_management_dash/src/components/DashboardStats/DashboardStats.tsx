"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

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
    <Box>
      {/* Stats Cards */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 2,
        }}
      >
        <StatCard
          title="Total Students"
          value={total}
        />

        <StatCard
          title="Active Students"
          value={active}
        />

        <StatCard
          title="Completed Students"
          value={completed}
        />

        <StatCard
          title="Average Score"
          value={`${averageScore}%`}
        />

        <StatCard
          title="Pending Assignments"
          value={pendingAssignments}
        />
      </Box>
    </Box>
  );
}


/* ================= Stats Card ================= */

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <Card>
      <CardContent>

        <Typography color="text.secondary">
          {title}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 1,
          }}
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}