export interface Student {
  id: number;

 
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;

  // Course
  course: string;
  batch: string;
  startDate: string;
  trainer: string;
  experience: string;

  // Dashboard
  status: "Active" | "Completed" | "Inactive";
  score: number;
  pendingAssignments: number;
}