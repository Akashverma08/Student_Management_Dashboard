"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import StudentForm from "@/src/components/StudentForm/StudentForm";
import { getStudentById } from "@/src/services/studentService";
import { Student } from "@/src/types/student";

export default function EditStudentPage() {
    const params = useParams();

    const [student, setStudent] = useState<Student | null>(null);

    useEffect(() => {
        const id = Number(params.id);

        const data = getStudentById(id);

        if (data) {
            setStudent(data);
        }
    }, [params.id]);

    if (!student) {
        return <div>Student not found</div>;
    }

    return <StudentForm student={student} />;
}