"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Student } from "@/src/types/student";

interface Props {
  student: Student;
  onSave: (student: Student) => void;
  onCancel: () => void;
}

export default function StudentProfileEdit({
  student,
  onSave,
  onCancel,
}: Props) {
  const [formData, setFormData] =
    useState<Student>(student);

  const handleChange = (
    field: keyof Student,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const editableFields = [
    ["First Name", "firstName"],
    ["Last Name", "lastName"],
    ["Phone", "phone"],
  ] as const;

  const readOnlyFields = [
    ["Email", student.email],
    ["Date of Birth", student.dob],
    ["Course", student.course],
    ["Batch", student.batch],
    ["Start Date", student.startDate],
    ["Trainer", student.trainer],
    ["Experience", student.experience],
    ["Status", student.status],
    ["Score", student.score],
    ["Pending Assignments", student.pendingAssignments],
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          mb: 3,
        }}
      >
        Edit Profile
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={3}>

            {editableFields.map(
              ([label, field]) => (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={field}
                >
                  <TextField
                    fullWidth
                    label={label}
                    value={formData[field]}
                    onChange={(e) =>
                      handleChange(
                        field,
                        e.target.value
                      )
                    }
                  />
                </Grid>
              )
            )}

            {readOnlyFields.map(
              ([label, value]) => (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={label}
                >
                  <TextField
                    fullWidth
                    label={label}
                    value={value}
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                  />
                </Grid>
              )
            )}

            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                <Button onClick={onCancel}>
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  onClick={() =>
                    onSave(formData)
                  }
                >
                  Save Changes
                </Button>
              </Box>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}