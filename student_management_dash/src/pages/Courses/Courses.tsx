"use client";

import { Box, Typography } from "@mui/material";

import CourseCards from "@/src/components/Courses/CourseCards";

export default function Courses() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 700 }}
            >
                Courses
            </Typography>

            <Typography
                color="text.secondary"
                sx={{ mb: 3 }}
            >
                Student enrollment and performance by course
            </Typography>

            <CourseCards />
        </Box>
    );
}