"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Chip,
    Divider,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

import { getStudentById } from "@/src/services/studentService";
import { Student } from "@/src/types/student";

export default function StudentDetailsPage() {
    const { id } = useParams();
    const router = useRouter();

    const [student, setStudent] = useState<Student | undefined>();

    useEffect(() => {
        const studentData = getStudentById(Number(id));

        setStudent(studentData);
    }, [id]);

    if (!student) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h6">
                    Student not found
                </Typography>

                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => router.push("/students")}
                    sx={{ mt: 2 }}
                >
                    Back to Students
                </Button>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                maxWidth: 1100,
                mx: "auto",
                px: 3,
                pb: 12,
            }}
        >

            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h4">
                    Student Details
                </Typography>

                <Chip
                    label={student.status}
                    color={
                        student.status === "Active"
                            ? "success"
                            : "default"
                    }
                />
            </Box>

            {/* Personal Information */}
            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Personal Information
                    </Typography>

                    <Typography>
                        <b>Name:</b>{" "}
                        {student.firstName} {student.lastName}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Email:</b> {student.email}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Phone:</b> {student.phone}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Date of Birth:</b> {student.dob}
                    </Typography>

                </CardContent>
            </Card>

            {/* Course Information */}
            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Course Information
                    </Typography>

                    <Typography>
                        <b>Course:</b> {student.course}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Batch:</b> {student.batch}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Start Date:</b> {student.startDate}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Trainer:</b> {student.trainer}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Experience:</b> {student.experience}
                    </Typography>

                </CardContent>
            </Card>

            {/* Progress */}
            <Card sx={{ mb: 3 }}>
                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Progress
                    </Typography>

                    <Typography>
                        <b>Score:</b> {student.score}%
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        <b>Pending Assignments:</b>{" "}
                        {student.pendingAssignments}
                    </Typography>

                </CardContent>
            </Card>

            <Divider sx={{ mb: 3 }} />

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>

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
                        router.push(`/students/${student.id}/edit`)
                    }
                >
                    Edit Student
                </Button>

            </Box>

        </Box>
    );
}