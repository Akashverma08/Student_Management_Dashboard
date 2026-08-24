import { Box, MenuItem, TextField } from "@mui/material";
import { Field } from "formik";
import DateField from "./DateField";

interface CourseStepProps {
    errors: any;
    touched: any;
    isEdit?: boolean;
}

export default function CourseStep({
    errors,
    touched,
    isEdit = false,
}: CourseStepProps) {
    return (
        <Box sx={{ display: "grid", gap: 2 }}>

            <Field
                as={TextField}
                select
                label="Course"
                name="course"
                error={Boolean(touched.course && errors.course)}
                helperText={touched.course && errors.course}
                fullWidth
            >
                <MenuItem value="React">
                    React
                </MenuItem>

                <MenuItem value="Next.js">
                    Next.js
                </MenuItem>

                <MenuItem value="Node.js">
                    Node.js
                </MenuItem>
            </Field>

            <Field
                as={TextField}
                select
                label="Batch"
                name="batch"
                error={Boolean(touched.batch && errors.batch)}
                helperText={touched.batch && errors.batch}
                fullWidth
            >
                <MenuItem value="Batch 1">
                    Batch 1
                </MenuItem>

                <MenuItem value="Batch 2">
                    Batch 2
                </MenuItem>

                <MenuItem value="Batch 3">
                    Batch 3
                </MenuItem>
            </Field>

            <DateField
                name="startDate"
                label="Start Date"
            />

            <Field
                as={TextField}
                label="Trainer"
                name="trainer"
                error={Boolean(touched.trainer && errors.trainer)}
                helperText={touched.trainer && errors.trainer}
                fullWidth
            />

            <Field
                as={TextField}
                select
                label="Experience"
                name="experience"
                error={Boolean(touched.experience && errors.experience)}
                helperText={touched.experience && errors.experience}
                fullWidth
            >
                <MenuItem value="Beginner">
                    Beginner
                </MenuItem>

                <MenuItem value="Intermediate">
                    Intermediate
                </MenuItem>

                <MenuItem value="Experienced">
                    Experienced
                </MenuItem>
            </Field>

            {/* Only show in Edit mode */}
            {isEdit && (
                <>
                    <Field
                        as={TextField}
                        select
                        label="Status"
                        name="status"
                        fullWidth
                    >
                        <MenuItem value="Active">
                            Active
                        </MenuItem>

                        <MenuItem value="Inactive">
                            Inactive
                        </MenuItem>

                        <MenuItem value="Completed">
                            Completed
                        </MenuItem>
                    </Field>

                    <Field
                        as={TextField}
                        type="number"
                        label="Score"
                        name="score"
                        fullWidth
                    />
                </>
            )}

        </Box>
    );
}