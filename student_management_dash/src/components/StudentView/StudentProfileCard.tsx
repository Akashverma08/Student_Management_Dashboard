import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Student } from "@/src/types/student";

interface Props {
    student: Student;
}

export default function StudentProfileCard({ student }: Props) {
    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>

                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            backgroundColor: "primary.main",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <PersonIcon fontSize="large" />
                    </Box>

                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {student.firstName} {student.lastName}
                        </Typography>

                        <Typography color="text.secondary">
                            {student.email}
                        </Typography>
                    </Box>

                </Stack>
            </CardContent>
        </Card>
    );
}