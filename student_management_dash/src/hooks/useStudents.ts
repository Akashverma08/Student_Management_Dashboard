"use client";

import { useEffect, useState } from "react";

import {
  getStudents,
  createStudent,
  updateStudent as updateStudentService,
  deleteStudent as deleteStudentService,
} from "@/src/services/studentService";

import { Student } from "@/src/types/student";

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load students when component mounts
  useEffect(() => {
    try {
      setLoading(true);

      const data = getStudents();

      setStudents(data);
    } catch (error) {
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  }, []);

  // Add student
  const addStudent = (student: Student) => {
    try {
      createStudent(student);

      setStudents((prev) => [
        ...prev,
        student,
      ]);
    } catch (error) {
      setError("Failed to add student");
    }
  };

  // Update student
  const updateStudent = (
    id: number,
    data: Student
  ) => {
    try {
      updateStudentService(id, data);

      setStudents((prev) =>
        prev.map((student) =>
          student.id === id
            ? data
            : student
        )
      );
    } catch (error) {
      setError("Failed to update student");
    }
  };

  // Delete student
  const deleteStudent = (id: number) => {
    try {
      deleteStudentService(id);

      setStudents((prev) =>
        prev.filter(
          (student) => student.id !== id
        )
      );
    } catch (error) {
      setError("Failed to delete student");
    }
  };

  return {
    students,
    loading,
    error,
    addStudent,
    updateStudent,
    deleteStudent,
  };
}