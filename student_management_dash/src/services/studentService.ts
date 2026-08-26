import { Student } from "@/src/types/student";

const STORAGE_KEY = "students";

export function getStudents(): Student[] {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function createStudent(student: Student) {
  const students = getStudents();

  students.push(student);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(students)
  );
}

// Get student by ID
export function getStudentById(id: number): Student | undefined {
    const students = getStudents();

    return students.find(
        (student) => student.id === id
    );
}


// Update student
export function updateStudent(
  id: number,
  data: Student
) {
  const students = getStudents();

  const updatedStudents = students.map((student) =>
    student.id === id ? data : student
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedStudents)
  );
}


// Delete student
export function deleteStudent(id: number) {
  const students = getStudents();

  const updatedStudents = students.filter(
    (student) => student.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedStudents)
  );
}


export function getStudentStats(students: Student[]) {
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
}