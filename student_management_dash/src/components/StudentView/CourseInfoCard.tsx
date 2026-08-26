import {
    Card,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

import { Student } from "@/src/types/student";

interface Props {
    student: Student;
}

export default function CourseInfoCard({ student }: Props) {
    return (
        <Card>
            <CardContent>

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        alignItems: "center",
                        mb: 2,
                    }}
                >
                    <SchoolIcon color="primary" />

                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Course Information
                    </Typography>
                </Stack>

                <Info label="Course">
                    {student.course}
                </Info>

                <Info label="Batch">
                    {student.batch}
                </Info>

                <Info label="Start Date">
                    {student.startDate}
                </Info>

                <Info label="Trainer">
                    {student.trainer}
                </Info>

                <Info label="Experience">
                    {student.experience}
                </Info>

            </CardContent>
        </Card>
    );
}

function Info({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Stack spacing={0.2} sx={{ mb: 1.5 }}>
            <Typography variant="caption" color="text.secondary">
                {label}
            </Typography>

            <Typography sx={{ fontWeight: 500 }}>
                {children}
            </Typography>
        </Stack>
    );
}