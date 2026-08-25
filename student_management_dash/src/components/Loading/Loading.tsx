"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingProps {
  message?: string;
}

export default function Loading({
  message = "Loading...",
}: LoadingProps) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CircularProgress
        size={50}
        thickness={4}
      />

      <Typography
        sx={{
          mt: 2,
          fontWeight: 500,
          color: "text.secondary",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}