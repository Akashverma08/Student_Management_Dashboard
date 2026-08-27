"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Student } from "@/src/types/student";

import {
  getStudents,
  updateStudent,
} from "@/src/services/studentService";

import { useAuth } from "@/src/context/AuthContext";

import StudentProfileEdit from "@/src/components/StudentProfileEdit/StudentProfileEdit";

export default function ProfileEdit() {
  const { user } = useAuth();
  const router = useRouter();

  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    if (!user || user.role !== "student") {
      return;
    }

    const students = getStudents();

    const studentData = students.find(
      (student) => student.id === user.studentId
    );

    if (studentData) {
      setStudent(studentData);
    }
  }, [user]);

  const handleSave = (data: Student) => {
    updateStudent(data.id, data);

    setStudent(data);

    router.push("/profile");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  if (user.role !== "student") {
    return <div>Access denied.</div>;
  }

  if (!student) {
    return <div>Loading student profile...</div>;
  }

  return (
    <StudentProfileEdit
      student={student}
      onSave={handleSave}
      onCancel={() => router.push("/profile")}
    />
  );
}