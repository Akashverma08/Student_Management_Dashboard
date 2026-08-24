import { Box, TextField } from "@mui/material";
import { Field } from "formik";

import DateField from "./DateField";

interface PersonalStepProps {
    values: any;
    errors: any;
    touched: any;
}

export default function PersonalStep({
    values,
    errors,
    touched,
}: PersonalStepProps) {
    return (
        <Box sx={{ display: "grid", gap: 2 }}>

            <Field
                as={TextField}
                label="First Name"
                name="firstName"
                error={Boolean(
                    touched.firstName &&
                    errors.firstName
                )}
                helperText={
                    touched.firstName &&
                    errors.firstName
                }
                fullWidth
            />

            <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                error={Boolean(
                    touched.lastName &&
                    errors.lastName
                )}
                helperText={
                    touched.lastName &&
                    errors.lastName
                }
                fullWidth
            />

            <Field
                as={TextField}
                label="Email"
                name="email"
                error={Boolean(
                    touched.email &&
                    errors.email
                )}
                helperText={
                    touched.email &&
                    errors.email
                }
                fullWidth
            />

            <Field
                as={TextField}
                label="Phone"
                name="phone"
                error={Boolean(
                    touched.phone &&
                    errors.phone
                )}
                helperText={
                    touched.phone &&
                    errors.phone
                }
                fullWidth
            />

            <DateField
                name="dob"
                label="Date of Birth"
            />

        </Box>
    );
}