"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
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
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // All fields will be displayed
  const fields = [
    ["First Name", "firstName"],
    ["Last Name", "lastName"],
    ["Email", "email"],
    ["Phone", "phone"],
    ["Date of Birth", "dob"],
    ["Course", "course"],
    ["Batch", "batch"],
    ["Start Date", "startDate"],
    ["Trainer", "trainer"],
    ["Experience", "experience"],
    ["Status", "status"],
    ["Score", "score"],
    ["Pending Assignments", "pendingAssignments"],
  ] as const;

  // Only these fields are editable
  const editableFields = [
    "firstName",
    "lastName",
    "email",
    "dob",
    "pendingAssignments",
  ];

  const options: Record<string, string[]> = {
    course: [
      "React.js",
      "Next.js",
      "Node.js",
      "Python",
    ],
    batch: [
      "Batch 1",
      "Batch 2",
      "Batch 3",
    ],
    experience: [
      "Beginner",
      "Intermediate",
      "Experienced",
    ],
    status: [
      "Active",
      "Completed",
      "Inactive",
    ],
  };

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

            {fields.map(([label, field]) => {
              const isEditable =
                editableFields.includes(field);

              const isNumber =
                field === "score" ||
                field === "pendingAssignments";

              const isDate =
                field === "dob" ||
                field === "startDate";

              return (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={field}
                >
                  <TextField
                    fullWidth
                    label={label}
                    value={formData[field]}
                    type={
                      isDate
                        ? "date"
                        : isNumber
                        ? "number"
                        : "text"
                    }
                    select={
                      isEditable &&
                      !!options[field]
                    }
                    disabled={!isEditable}
                    onChange={(e) =>
                      handleChange(
                        field,
                        isNumber
                          ? Number(
                              e.target.value
                            )
                          : e.target.value
                      )
                    }
                    slotProps={{
                      inputLabel: {
                        shrink: true,
                      },
                    }}
                  >
                    {isEditable &&
                      options[field]?.map(
                        (option) => (
                          <MenuItem
                            key={option}
                            value={option}
                          >
                            {option}
                          </MenuItem>
                        )
                      )}
                  </TextField>
                </Grid>
              );
            })}

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