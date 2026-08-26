"use client";

import {
    Box,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

import { useStudents } from "@/src/hooks/useStudents";

export default function CourseCards() {
    const { students } = useStudents();

    const courses = ["React", "Next.js", "Node.js"];

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                },
                gap: 3,
            }}
        >
            {courses.map((course) => {
                const courseStudents = students.filter(
                    (student) => student.course === course
                );

                const total = courseStudents.length;

                const averageScore = total
                    ? Math.round(
                          courseStudents.reduce(
                              (sum, student) =>
                                  sum + student.score,
                              0
                          ) / total
                      )
                    : 0;

                return (
                    <Card key={course}>
                        <CardContent>
                            <SchoolIcon
                                color="primary"
                                sx={{
                                    fontSize: 35,
                                    mb: 1,
                                }}
                            />

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600 }}
                            >
                                {course}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: 2,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {total}
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        variant="body2"
                                    >
                                        Students
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography
                                        variant="h4"
                                        color="primary"
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {averageScore}%
                                    </Typography>

                                    <Typography
                                        color="text.secondary"
                                        variant="body2"
                                    >
                                        Avg. Score
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                );
            })}
        </Box>
    );
}