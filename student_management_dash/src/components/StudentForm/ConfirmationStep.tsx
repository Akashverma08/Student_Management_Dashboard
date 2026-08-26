import {
    Box,
    Card,
    CardContent,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BadgeIcon from "@mui/icons-material/Badge";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface ConfirmationStepProps {
    values: any;
}

export default function ConfirmationStep({
    values,
}: ConfirmationStepProps) {
    return (
        <Box>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 600,
                    mb: 1,
                }}
            >
                Confirm Student Details
            </Typography>

            <Typography
                color="text.secondary"
                sx={{ mb: 3 }}
            >
                Please review the information before submitting.
            </Typography>

            {/* Personal Information */}
            <Card
                variant="outlined"
                sx={{
                    mb: 3,
                    borderRadius: 2,
                }}
            >
                <CardContent>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            mb: 2,
                            alignItems: "center",
                        }}
                    >
                        <PersonIcon color="primary" />

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600 }}
                        >
                            Personal Information
                        </Typography>
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "1fr 1fr",
                            },
                            gap: 2,
                        }}
                    >
                        <Detail
                            icon={<PersonIcon />}
                            label="Full Name"
                            value={`${values.firstName} ${values.lastName}`}
                        />

                        <Detail
                            icon={<EmailIcon />}
                            label="Email"
                            value={values.email}
                        />

                        <Detail
                            icon={<PhoneIcon />}
                            label="Phone"
                            value={values.phone}
                        />

                        <Detail
                            icon={<CakeIcon />}
                            label="Date of Birth"
                            value={values.dob}
                        />
                    </Box>

                </CardContent>
            </Card>

            {/* Course Information */}
            <Card
                variant="outlined"
                sx={{
                    borderRadius: 2,
                }}
            >
                <CardContent>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            mb: 2,
                            alignItems: "center",
                        }}
                    >
                        <SchoolIcon color="primary" />

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600 }}
                        >
                            Course Information
                        </Typography>
                    </Stack>

                    <Divider sx={{ mb: 2 }} />

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "1fr 1fr",
                            },
                            gap: 2,
                        }}
                    >
                        <Detail
                            icon={<SchoolIcon />}
                            label="Course"
                            value={values.course}
                        />

                        <Detail
                            icon={<GroupsIcon />}
                            label="Batch"
                            value={values.batch}
                        />

                        <Detail
                            icon={<CalendarMonthIcon />}
                            label="Start Date"
                            value={values.startDate}
                        />

                        <Detail
                            icon={<BadgeIcon />}
                            label="Trainer"
                            value={values.trainer}
                        />

                        <Detail
                            icon={<TrendingUpIcon />}
                            label="Experience"
                            value={values.experience}
                        />
                    </Box>

                </CardContent>
            </Card>

        </Box>
    );
}


/* Reusable Detail Component */

function Detail({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "#f8fafc",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    color: "primary.main",
                }}
            >
                {icon}
            </Box>

            <Box>
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {label}
                </Typography>

                <Typography
                    sx={{ fontWeight: 500 }}
                >
                    {value || "-"}
                </Typography>
            </Box>
        </Box>
    );
}