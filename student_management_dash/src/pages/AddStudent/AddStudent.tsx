"use client";

import { Box, Typography } from "@mui/material";

import Sidebar from "@/src/components/Sidebar/Sidebar";
import StudentForm from "@/src/components/StudentForm/StudentForm";

export default function AddStudent() {
  return (
    <Box sx={{ display: "flex", minHeight: "calc(100vh - 70px)" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
          backgroundColor: "#f8fafc",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 3,
          }}
        >
          Add Student
        </Typography>

        <StudentForm />
      </Box>
    </Box>
  );
}