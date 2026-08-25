"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";

import {
  getStudents,
} from "@/src/services/studentService";

import { Student } from "@/src/types/student";
import ConfirmDialog from "@/src/components/ConfirmDialog/ConfirmDialog";
import StudentFilters from "@/src/components/StudentFilter/StudentFilters";

export default function Studenttable() {
  const [students, setStudents] =
    useState<Student[]>([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] =
    useState("");

  const [course, setCourse] = useState("All");
  const [status, setStatus] = useState("All");
  const [score, setScore] = useState("All");

  // Applied filters
  const [appliedCourse, setAppliedCourse] =
    useState("All");

  const [appliedStatus, setAppliedStatus] =
    useState("All");

  const [appliedScore, setAppliedScore] =
    useState("All");

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const handleApply = () => {
    setAppliedCourse(course);
    setAppliedStatus(status);
    setAppliedScore(score);
  };

  const handleReset = () => {
    setSearch("");
    setDebouncedSearch("");

    setCourse("All");
    setStatus("All");
    setScore("All");

    setAppliedCourse("All");
    setAppliedStatus("All");
    setAppliedScore("All");
  };

  const handleDelete = () => {
    if (deleteId === null) return;

    const updatedStudents = students.filter(
      (student) => student.id !== deleteId
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    setStudents(updatedStudents);

    setDeleteId(null);
  };

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const name =
        `${student.firstName} ${student.lastName}`
          .toLowerCase();

      const searchMatch =
        name.includes(
          debouncedSearch.toLowerCase()
        ) ||
        student.email
          .toLowerCase()
          .includes(
            debouncedSearch.toLowerCase()
          );

      const courseMatch =
        appliedCourse === "All" ||
        student.course === appliedCourse;

      const statusMatch =
        appliedStatus === "All" ||
        student.status === appliedStatus;

      const scoreMatch =
        appliedScore === "All"
          ? true
          : appliedScore === "0-50"
            ? student.score <= 50
            : appliedScore === "51-75"
              ? student.score >= 51 &&
              student.score <= 75
              : student.score >= 76;

      return (
        searchMatch &&
        courseMatch &&
        statusMatch &&
        scoreMatch
      );
    });
  }, [
    students,
    debouncedSearch,
    appliedCourse,
    appliedStatus,
    appliedScore,
  ]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.3,
    },
    {
      field: "course",
      headerName: "Course",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "score",
      headerName: "Score",
      flex: 0.7,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      filterable: false,

      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          {/* View */}
          <IconButton
            color="primary"
            onClick={() =>
              router.push(
                `/students/${params.row.id}`
              )
            }
          >
            <VisibilityIcon />
          </IconButton>

          {/* Edit */}
          <IconButton
            color="primary"
            onClick={() =>
              router.push(
                `/students/${params.row.id}/edit`
              )
            }
          >
            <EditIcon />
          </IconButton>

          {/* Delete */}
          <IconButton
            color="error"
            onClick={() =>
              setDeleteId(params.row.id)
            }
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const rows = filteredStudents.map(
    (student) => ({
      id: student.id,
      name: `${student.firstName} ${student.lastName}`,
      email: student.email,
      course: student.course,
      status: student.status,
      score: student.score,
    })
  );

  return (
    <Box sx={{ width: "100%" }}>

      <StudentFilters
        search={search}
        course={course}
        status={status}
        score={score}
        setSearch={setSearch}
        setCourse={setCourse}
        setStatus={setStatus}
        setScore={setScore}
        onApply={handleApply}
        onReset={handleReset}
      />

      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              page: 0,
            },
          },
        }}
        disableRowSelectionOnClick
      />

      <ConfirmDialog
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
      />

    </Box>
  );
}