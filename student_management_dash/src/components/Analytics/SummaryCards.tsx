"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { useStudents } from "@/src/hooks/useStudents";

export default function SummaryCards() {
    const { students } = useStudents();

    const total = students.length;

    const active = students.filter(
        (student) => student.status === "Active"
    ).length;

    const completed = students.filter(
        (student) => student.status === "Completed"
    ).length;

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(3, 1fr)",
                },
                gap: 2,
            }}
        >
            <Card>
                <CardContent>
                    <Typography color="text.secondary">
                        Total Students
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {total}
                    </Typography>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Typography color="text.secondary">
                        Active Students
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {active}
                    </Typography>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Typography color="text.secondary">
                        Completed Students
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                        {completed}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}