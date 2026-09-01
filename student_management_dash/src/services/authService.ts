import { getStudents } from "@/src/services/studentService";
import { User } from "@/src/types/auth";

type LoginType = "admin" | "student";

export function login(
  loginType: LoginType,
  username: string,
  password: string
): User | null {

  // ADMIN LOGIN
  if (loginType === "admin") {
    if (
      username === "admin" &&
      password === "Akash@0401"
    ) {
      return {
        name: "Akash Verma",
        role: "Administrator",
      };
    }

    return null;
  }

  // STUDENT LOGIN
  const students = getStudents();

  const student = students.find((student) => {
    const [year, month, day] =
      student.dob.split("-");

    const formattedDob =
      `${day}${month}${year}`;

    return (
      student.email.toLowerCase() ===
        username.toLowerCase() &&
      formattedDob === password
    );
  });

  if (!student) {
    return null;
  }

  return {
    name: `${student.firstName} ${student.lastName}`,
    role: "student",
    studentId: student.id,
    email: student.email,
  };
}