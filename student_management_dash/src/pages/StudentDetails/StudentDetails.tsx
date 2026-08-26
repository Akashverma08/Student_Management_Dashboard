"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
    Box,
    Button,
    Chip,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";


import StudentProfileCard from "@/src/components/StudentView/StudentProfileCard";
import PersonalInfoCard from "@/src/components/StudentView/PersonalInfoCard";
import CourseInfoCard from "@/src/components/StudentView/CourseInfoCard";
import ProgressCard from "@/src/components/StudentView/ProgressCard";

import { getStudentById } from "@/src/services/studentService";
import { Student } from "@/src/types/student";

export default function StudentDetails() {
    const params = useParams<{ id: string }>();
    const id = params?.id;
    const router = useRouter();

    const [student, setStudent] = useState<Student>();

    useEffect(() => {
        setStudent(getStudentById(Number(id)));
    }, [id]);

    if (!student) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h6">
                    Student not found
                </Typography>

                <Button
                    sx={{ mt: 2 }}
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/students")}
                >
                    Back to Students
                </Button>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "calc(100vh - 70px)",
            }}
        >


            <Box
                component="main"
                sx={{
                    flex: 1,
                    p: { xs: 2, md: 4 },
                    backgroundColor: "#f5f7fa",
                }}
            >
                <Box sx={{ maxWidth: 1000, mx: "auto" }}>

                    {/* Header */}
                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 3,
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 700 }}
                            >
                                Student Profile
                            </Typography>

                            <Typography color="text.secondary">
                                View student information and progress
                            </Typography>
                        </Box>

                        <Chip
                            label={student.status}
                            sx={{
                                fontWeight: 600,
                                color: "white",
                                backgroundColor:
                                    student.status === "Active"
                                        ? "#2e7d32"       // Green
                                        : student.status === "Completed"
                                            ? "#edb100"    // Yellow
                                            : "#d32f2f",   // Red
                            }}
                        />
                    </Stack>

                    {/* Student Profile */}
                    <StudentProfileCard student={student} />
                    <Divider sx={{ my: 3 }} />


                    {/* Progress */}

                    <ProgressCard student={student} />

                    <Divider sx={{ my: 3 }} />

                    {/* Personal + Course */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "1fr 1fr",
                            },
                            gap: 3,
                        }}
                    >
                        <PersonalInfoCard student={student} />

                        <CourseInfoCard student={student} />
                    </Box>

                    
                    

                    <Divider sx={{ my: 3 }} />

                    {/* Actions */}
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => router.push("/students")}
                        >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={() =>
                                router.push(
                                    `/students/${student.id}/edit`
                                )
                            }
                        >
                            Edit Student
                        </Button>
                    </Stack>

                </Box>
            </Box>
        </Box>
    );
}