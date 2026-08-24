import { Box, Button } from "@mui/material";

interface FormButtonsProps {
    activeStep: number;
    onBack: () => void;
    onNext: () => void;
    onSubmit: () => void;
}

export default function FormButtons({
    activeStep,
    onBack,
    onNext,
    onSubmit,
}: FormButtonsProps) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                mb: 4,
            }}
        >
            {/* BACK */}
            <Button
                type="button"
                disabled={activeStep === 0}
                onClick={onBack}
            >
                Back
            </Button>

            {/* NEXT / SUBMIT */}
            {activeStep < 2 ? (
                <Button
                    type="button"
                    variant="contained"
                    onClick={onNext}
                >
                    Next
                </Button>
            ) : (
                <Button
                    type="button"
                    variant="contained"
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            )}
        </Box>
    );
}