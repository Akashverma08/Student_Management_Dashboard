"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { useStudents } from "@/src/hooks/useStudents";

export default function StudentStatusChart() {
    const { students } = useStudents();

    const active = students.filter(
        (student) => student.status === "Active"
    ).length;

    const inactive = students.filter(
        (student) => student.status === "Inactive"
    ).length;

    const completed = students.filter(
        (student) => student.status === "Completed"
    ).length;

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Student Status
                </Typography>

                <Typography color="text.secondary">
                    Distribution of students by status
                </Typography>

                <PieChart
                    series={[
                        {
                            data: [
                                {
                                    id: 0,
                                    value: active,
                                    label: "Active",
                                },
                                {
                                    id: 1,
                                    value: inactive,
                                    label: "Inactive",
                                },
                                {
                                    id: 2,
                                    value: completed,
                                    label: "Completed",
                                },
                            ],
                        },
                    ]}
                    width={400}
                    height={250}
                />
            </CardContent>
        </Card>
    );
}