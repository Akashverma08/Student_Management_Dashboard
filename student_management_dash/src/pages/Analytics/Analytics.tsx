"use client";

import { Box, Typography } from "@mui/material";

import SummaryCards from "@/src/components/Analytics/SummaryCards";
import StudentStatusChart from "@/src/components/Analytics/StudentStatusChart";
import ScoreChart from "@/src/components/Analytics/ScoreChart";


export default function Analytics() {
    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "calc(100vh - 70px)",
            }}
        >


            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flex: 1,
                    p: 3,
                    backgroundColor: "#f5f7fa",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 700 }}
                >
                    Analytics
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{ mb: 3 }}
                >
                    Student performance and status overview
                </Typography>

                {/* Summary Cards */}
                <SummaryCards />

                {/* Charts */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        gap: 3,
                        mt: 3,
                    }}
                >
                    <StudentStatusChart />
                    <ScoreChart />
                </Box>
            </Box>
        </Box>
    );
}