import { Box, Typography } from "@mui/material";

import Sidebar from "@/src/components/Sidebar/Sidebar";
import DashboardStats from "@/src/components/DashboardStats/DashboardStats";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "70vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
          backgroundColor: "#f8fafc",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 3,
          }}
        >
          Dashboard
        </Typography>

        <DashboardStats/>
      </Box>

    </Box>
  );
}