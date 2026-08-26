import {
    Box,
    Card,
    CardContent,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { Student } from "@/src/types/student";

interface Props {
    student: Student;
}

export default function ProgressCard({ student }: Props) {
    return (
        <Card sx={{ mt: 3 }}>
            <CardContent>

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        alignItems: "center",
                        mb: 2,
                    }}
                >
                    <TrendingUpIcon color="primary" />

                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Student Progress
                    </Typography>
                </Stack>

                {/* Score */}
                <Box sx={{ mb: 3 }}>

                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: "space-between",
                            mb: 1,
                        }}
                    >
                        <Typography sx={{ fontWeight: 500 }}>
                            Course Score
                        </Typography>

                        <Typography color="primary" sx={{ fontWeight: 700 }}>
                            {student.score}%
                        </Typography>
                    </Stack>

                    <LinearProgress
                        variant="determinate"
                        value={student.score}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                        }}
                    />

                </Box>

                {/* Assignments */}
                <Box>
                    <Typography color="text.secondary">
                        Pending Assignments
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {student.pendingAssignments}
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}