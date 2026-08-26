import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                backgroundColor: "#ffffff",
                borderTop: "1px solid #e5e7eb",
                py: 2,
                px: 3,
                textAlign: "center",
                mt: "auto",
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: "text.secondary",
                }}
            >
                © 2026 Student Management System
            </Typography>
        </Box>
    );
}