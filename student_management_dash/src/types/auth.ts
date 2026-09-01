export type UserRole = "Administrator" | "student";

export interface User {
  name: string;
  role: UserRole;
  studentId?: number;
  email?: string;
}