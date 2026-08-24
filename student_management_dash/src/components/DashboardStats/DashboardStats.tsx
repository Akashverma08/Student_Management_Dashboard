"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
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
    other: 0,
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
    other,
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
        <StatCard title="Total Students" value={total} />

        <StatCard title="Active Students" value={active} />

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

      {/* Student Status */}
      <Card sx={{ mt: 3, p: 3 }}>
        <Typography
          variant="h6"
          sx={{ mb: 3, fontWeight: 600 }}
        >
          Student Status
        </Typography>

        <StatusBar
          label="Active Students"
          value={active}
          total={total}
        />

        <StatusBar
          label="Completed Students"
          value={completed}
          total={total}
        />

        <StatusBar
          label="Other Students"
          value={other}
          total={total}
        />
      </Card>
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
          sx={{ fontWeight: 700, mt: 1 }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}


/* ================= Status Bar ================= */

function StatusBar({
  label,
  value,
  total,
}: {
  label: string;
  value: number;
  total: number;
}) {
  const percentage =
    total > 0 ? (value / total) * 100 : 0;

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography>{label}</Typography>

        <Typography sx={{ fontWeight: 600 }}>
          {value} / {total}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 10,
          borderRadius: 5,
        }}
      />
    </Box>
  );
}