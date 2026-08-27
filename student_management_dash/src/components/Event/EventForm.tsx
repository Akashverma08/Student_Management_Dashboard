"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
} from "@mui/material";

import { Event } from "@/src/types/event";

interface EventFormProps {
  onSave: (event: Event) => void;
  onCancel: () => void;
}

export default function EventForm({
  onSave,
  onCancel,
}: EventFormProps) {
  const [formData, setFormData] = useState<Event>({
    id: Date.now(),
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (
    field: keyof Event,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>

        <TextField
          label="Event Title"
          value={formData.title}
          onChange={(e) =>
            handleChange("title", e.target.value)
          }
          required
          fullWidth
        />

        <TextField
          label="Description"
          value={formData.description}
          onChange={(e) =>
            handleChange("description", e.target.value)
          }
          multiline
          rows={3}
          required
          fullWidth
        />

        <TextField
          label="Date"
          type="date"
          value={formData.date}
          onChange={(e) =>
            handleChange("date", e.target.value)
          }
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          required
          fullWidth
        />

        <TextField
          label="Time"
          type="time"
          value={formData.time}
          onChange={(e) =>
            handleChange("time", e.target.value)
          }
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          required
          fullWidth
        />

        <TextField
          label="Location"
          value={formData.location}
          onChange={(e) =>
            handleChange("location", e.target.value)
          }
          required
          fullWidth
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Button onClick={onCancel}>
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
          >
            Save Event
          </Button>
        </Box>

      </Stack>
    </Box>
  );
}