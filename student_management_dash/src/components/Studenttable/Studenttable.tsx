"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";

import {
  DataGrid,
  GridColDef,
} from "@mui/x-data-grid";

import { getStudents } from "@/src/services/studentService";
import { Student } from "@/src/types/student";

export default function Studenttable() {

  const [students, setStudents] = useState<Student[]>([]);

  const router = useRouter();

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleDelete = (id: number) => {

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    setStudents(updatedStudents);
  };

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
      flex: 1.5,

      sortable: false,
      filterable: false,

      renderCell: (params) => (

        <Box sx={{ display: "flex", gap: 1 }}>

          {/* View */}
          <IconButton
            onClick={() =>
              router.push(
                `/students/${params.row.id}`
              )
            }
          >
            <VisibilityIcon />
          </IconButton>

          {/* Edit */}
          {/* Edit */}
          <Button
            size="small"
            onClick={() =>
              router.push(`/students/${params.row.id}/edit`)
            }
          >
            Edit
          </Button>

          {/* Delete */}
          <Button
            size="small"
            color="error"
            onClick={() =>
              handleDelete(params.row.id)
            }
          >
            Delete
          </Button>

        </Box>
      ),
    },
  ];

  const rows = students.map((student) => ({

    id: student.id,

    name: `${student.firstName} ${student.lastName}`,

    email: student.email,

    course: student.course,

    status: student.status,

    score: student.score,

  }));

  return (

    <Box sx={{ width: "100%" }}>

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

    </Box>
  );
}