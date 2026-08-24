import { TextField } from "@mui/material";
import { useField } from "formik";

interface DateFieldProps {
    name: string;
    label: string;
}

export default function DateField({
    name,
    label,
}: DateFieldProps) {
    const [field, meta] = useField(name);

    return (
        <TextField
            {...field}
            type="date"
            label={label}
            slotProps={{
                inputLabel: {
                    shrink: true,
                },
            }}
            error={Boolean(meta.touched && meta.error)}
            helperText={
                meta.touched && meta.error
                    ? meta.error
                    : ""
            }
            fullWidth
        />
    );
}