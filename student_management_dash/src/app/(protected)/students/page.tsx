import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

import Sidebar from "@/src/components/Sidebar/Sidebar";
import Studenttable from "@/src/components/Studenttable/Studenttable";

export default function Student() {
  return (
    <Box sx={{ display: "flex", minHeight: "70vh" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
          backgroundColor: "#f8fafc",
        }}
      >
        {/* Heading + Add Student */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600 }}
          >
            Students
          </Typography>

          <Link href="/students/add">
            <Button variant="contained">
              Add Student
            </Button>
          </Link>
        </Box>

        <Studenttable />
      </Box>
    </Box>
  );
}