"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Box, Typography } from "@mui/material";

import Sidebar from "@/src/components/Sidebar/Sidebar";
import StudentForm from "@/src/components/StudentForm/StudentForm";

import { getStudentById } from "@/src/services/studentService";
import { Student } from "@/src/types/student";

export default function EditStudent() {


    const [student, setStudent] = useState<Student | null>(null);

    const params = useParams<{ id: string }>();

    useEffect(() => {
        if (!params) return;

        const id = Number(params.id);

        const data = getStudentById(id);

        if (data) {
            setStudent(data);
        }
    }, [params?.id]);

    if (!student) {
        return <div>Student not found</div>;
    }

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "calc(100vh - 70px)",
            }}
        >
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
                    Edit Student
                </Typography>

                <StudentForm student={student} />
            </Box>
        </Box>
    );
}