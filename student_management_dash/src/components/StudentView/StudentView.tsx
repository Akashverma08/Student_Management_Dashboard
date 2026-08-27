"use client";

import { Box, Button, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Student } from "@/src/types/student";

import StudentProfileCard from "./StudentProfileCard";
import ProgressCard from "./ProgressCard";
import PersonalInfoCard from "./PersonalInfoCard";
import CourseInfoCard from "./CourseInfoCard";

interface Props {
  student: Student;
  onEdit?: () => void;
}

export default function StudentView({ student, onEdit }: Props) {
  return (
    <Box sx={{ p: 3 }}>

      <StudentProfileCard student={student} />

      <ProgressCard student={student} />

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <PersonalInfoCard student={student} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CourseInfoCard student={student} />
        </Grid>
      </Grid>

      {onEdit && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={onEdit}
          >
            Edit Profile
          </Button>
        </Box>
      )}

    </Box>
  );
}