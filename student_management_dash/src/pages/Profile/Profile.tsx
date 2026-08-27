"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Student } from "@/src/types/student";
import { getStudents } from "@/src/services/studentService";
import { useAuth } from "@/src/context/AuthContext";

import StudentView from "@/src/components/StudentView/StudentView";

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    if (!user || user.role !== "student") return;

    const studentData = getStudents().find(
      (student) =>
        student.id === user.studentId ||
        student.email.toLowerCase() === user.email?.toLowerCase()
    );

    setStudent(studentData || null);
  }, [user]);

  if (!user) {
    return <div>Loading profile...</div>;
  }

  if (user.role !== "student") {
    router.replace("/dashboard");
    return null;
  }

  if (!student) {
    return <div>Student profile not found.</div>;
  }

  return (
    <StudentView
      student={student}
      onEdit={() => router.push("/profile/edit")}
    />
  );
}