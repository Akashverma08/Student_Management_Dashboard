import * as Yup from "yup";

export const personalSchema = Yup.object({
    firstName: Yup.string()
        .required("First name is required"),

    lastName: Yup.string()
        .required("Last name is required"),

    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    phone: Yup.string()
        .required("Phone is required")
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

    dob: Yup.string()
        .required("Date of birth is required"),
});

export const courseSchema = Yup.object({
    course: Yup.string()
        .required("Course is required"),

    batch: Yup.string()
        .required("Batch is required"),

    startDate: Yup.string()
        .required("Start date is required"),

    trainer: Yup.string()
        .required("Trainer is required"),

    experience: Yup.string()
        .required("Experience is required"),
});