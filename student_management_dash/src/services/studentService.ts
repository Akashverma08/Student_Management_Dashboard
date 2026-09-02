import { Student } from "@/src/types/student";

const STORAGE_KEY = "students";

// Get all students
export function getStudents(): Student[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error getting students:", error);
    return [];
  }
}

// Create student
export function createStudent(student: Student) {
  try {
    const students = getStudents();

    students.push(student);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(students)
    );
  } catch (error) {
    console.error("Error creating student:", error);
  }
}

// Get student by ID
export function getStudentById(
  id: number
): Student | undefined {
  try {
    const students = getStudents();

    return students.find(
      (student) => student.id === id
    );
  } catch (error) {
    console.error("Error getting student by ID:", error);
    return undefined;
  }
}

// Update student
export function updateStudent(
  id: number,
  data: Student
) {
  try {
    const students = getStudents();

    const updatedStudents = students.map((student) =>
      student.id === id ? data : student
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedStudents)
    );
  } catch (error) {
    console.error("Error updating student:", error);
  }
}

// Delete student
export function deleteStudent(id: number) {
  try {
    const students = getStudents();

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedStudents)
    );
  } catch (error) {
    console.error("Error deleting student:", error);
  }
}

// Get student statistics
export function getStudentStats(students: Student[]) {
  try {
    const total = students.length;

    const active = students.filter(
      (student) => student.status === "Active"
    ).length;

    const completed = students.filter(
      (student) => student.status === "Completed"
    ).length;

    const averageScore = total
      ? Math.round(
          students.reduce(
            (sum, student) => sum + student.score,
            0
          ) / total
        )
      : 0;

    const pendingAssignments = students.reduce(
      (sum, student) => sum + student.pendingAssignments,
      0
    );

    const other = total - active - completed;

    return {
      total,
      active,
      completed,
      averageScore,
      pendingAssignments,
      other,
    };
  } catch (error) {
    console.error("Error calculating student stats:", error);

    return {
      total: 0,
      active: 0,
      completed: 0,
      averageScore: 0,
      pendingAssignments: 0,
      other: 0,
    };
  }
}