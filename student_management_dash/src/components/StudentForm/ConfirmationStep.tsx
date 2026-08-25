import { Box, Typography } from "@mui/material";

interface ConfirmationStepProps {
    values: any;
}

export default function ConfirmationStep({
    values,
}: ConfirmationStepProps) {
    return (
        <Box sx={{ display: "grid", gap: 2 }}>

            <Typography variant="h6">
                Confirm Student Details
            </Typography>

            <Typography>
                <b>Name:</b>{" "}
                {values.firstName} {values.lastName}
            </Typography>

            <Typography>
                <b>Email:</b> {values.email}
            </Typography>

            <Typography>
                <b>Phone:</b> {values.phone}
            </Typography>

            <Typography>
                <b>Date of Birth:</b> {values.dob}
            </Typography>

            <Typography>
                <b>Course:</b> {values.course}
            </Typography>

            <Typography>
                <b>Batch:</b> {values.batch}
            </Typography>

            <Typography>
                <b>Start Date:</b> {values.startDate}
            </Typography>

            <Typography>
                <b>Trainer:</b> {values.trainer}
            </Typography>

            <Typography>
                <b>Experience:</b> {values.experience}
            </Typography>

        </Box>
    );
}
 