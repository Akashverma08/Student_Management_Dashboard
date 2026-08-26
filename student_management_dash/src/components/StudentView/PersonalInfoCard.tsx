import {
    Card,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

import { Student } from "@/src/types/student";

interface Props {
    student: Student;
}

export default function PersonalInfoCard({ student }: Props) {
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
                    <PersonIcon color="primary" />

                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Personal Information
                    </Typography>
                </Stack>

                <Info label="Full Name">
                    {student.firstName} {student.lastName}
                </Info>

                <Info label="Email">
                    {student.email}
                </Info>

                <Info label="Phone">
                    {student.phone}
                </Info>

                <Info label="Date of Birth">
                    {student.dob}
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