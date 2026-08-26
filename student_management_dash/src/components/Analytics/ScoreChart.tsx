"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useStudents } from "@/src/hooks/useStudents";

export default function ScoreChart() {
    const { students } = useStudents();

    const getAverage = (status: string) => {
        const filtered = students.filter(
            (student) => student.status === status
        );

        if (filtered.length === 0) return 0;

        return Math.round(
            filtered.reduce(
                (sum, student) => sum + student.score,
                0
            ) / filtered.length
        );
    };

    const activeScore = getAverage("Active");
    const inactiveScore = getAverage("Inactive");
    const completedScore = getAverage("Completed");

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Average Score
                </Typography>

                <Typography color="text.secondary">
                    Average score by student status
                </Typography>

                <BarChart
                    xAxis={[
                        {
                            scaleType: "band",
                            data: [
                                "Active",
                                "Inactive",
                                "Completed",
                            ],
                        },
                    ]}
                    series={[
                        {
                            data: [
                                activeScore,
                                inactiveScore,
                                completedScore,
                            ],
                            label: "Average Score",
                        },
                    ]}
                    yAxis={[
                        {
                            min: 0,
                            max: 100,
                        },
                    ]}
                    height={250}
                />
            </CardContent>
        </Card>
    );
}