"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { Student } from "@/src/types/student";
import { useStudents } from "@/src/hooks/useStudents";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
} from "@mui/material";


import PersonalStep from "./PersonalStep";
import CourseStep from "./CourseStep";
import ConfirmationStep from "./ConfirmationStep";
import FormButtons from "./FormButtons";

import {
    personalSchema,
    courseSchema,
} from "@/src/validations/studentValidation";

const steps = [
    "Personal Information",
    "Course Information",
    "Confirmation",
];




interface StudentFormProps {
    student?: Student;
}

export default function StudentForm({
    student,
}: StudentFormProps) {
    const {
        addStudent,
        updateStudent,
    } = useStudents();


    const [activeStep, setActiveStep] = useState(0);

    const router = useRouter();

    const initialValues = {
        firstName: student?.firstName || "",
        lastName: student?.lastName || "",
        email: student?.email || "",
        phone: student?.phone || "",
        dob: student?.dob || "",

        course: student?.course || "",
        batch: student?.batch || "",
        startDate: student?.startDate || "",
        trainer: student?.trainer || "",
        experience: student?.experience || "",

        status: student?.status || "Active",
        score: student?.score ?? 0,

        pendingAssignments: student?.pendingAssignments ?? 0,
    };

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize

            validationSchema={
                activeStep === 0
                    ? personalSchema
                    : activeStep === 1
                        ? courseSchema
                        : undefined
            }

            onSubmit={(values) => {
                if (student) {
                    updateStudent(student.id, {
                        ...student,

                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phone: values.phone,
                        dob: values.dob,

                        course: values.course,
                        batch: values.batch,
                        startDate: values.startDate,
                        trainer: values.trainer,
                        experience: values.experience,

                        status: values.status,
                        score: Number(values.score),
                        pendingAssignments: Number(
                            values.pendingAssignments
                        ),
                    });
                } else {
                    addStudent({
                        id: Date.now(),

                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phone: values.phone,
                        dob: values.dob,

                        course: values.course,
                        batch: values.batch,
                        startDate: values.startDate,
                        trainer: values.trainer,
                        experience: values.experience,

                        status: "Active",
                        score: 0,
                        pendingAssignments: 0,
                    });
                }

                router.push("/students");
            }}
        >
            {({
                values,
                errors,
                touched,
                validateForm,
                setTouched,
                submitForm,
            }) => {

                const handleNext = async () => {

                    const stepErrors =
                        await validateForm();

                    if (
                        Object.keys(stepErrors).length > 0
                    ) {
                        setTouched(
                            Object.keys(
                                stepErrors
                            ).reduce(
                                (acc, key) => ({
                                    ...acc,
                                    [key]: true,
                                }),
                                {}
                            )
                        );

                        return;
                    }

                    setActiveStep(
                        (step) => step + 1
                    );
                };

                return (
                    <Form>

                        <Box
                            sx={{
                                maxWidth: 800,
                                mx: "auto",
                            }}
                        >

                            <Stepper
                                activeStep={activeStep}
                                sx={{ mb: 4 }}
                            >
                                {steps.map(
                                    (step) => (
                                        <Step
                                            key={step}
                                        >
                                            <StepLabel>
                                                {step}
                                            </StepLabel>
                                        </Step>
                                    )
                                )}
                            </Stepper>

                            {activeStep === 0 && (
                                <PersonalStep
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                />
                            )}

                            {activeStep === 1 && (
                                <CourseStep
                                    errors={errors}
                                    touched={touched}
                                    isEdit={!!student}
                                />
                            )}

                            {activeStep === 2 && (
                                <ConfirmationStep
                                    values={values}
                                />
                            )}

                            <FormButtons
                                activeStep={activeStep}
                                onBack={() =>
                                    setActiveStep((step) => step - 1)
                                }
                                onNext={handleNext}
                                onSubmit={submitForm}
                            />

                        </Box>  

                    </Form>
                );
            }}
        </Formik>
    );
}