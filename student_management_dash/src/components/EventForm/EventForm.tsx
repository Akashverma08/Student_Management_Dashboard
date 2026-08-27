"use client";

import { useState } from "react";

import {
  Box,
  Button,
  Stack,
  TextField,
} from "@mui/material";

import { Event } from "@/src/types/event";

interface EventFormProps {
  event?: Event;
  onSave: (event: Event) => void;
  onCancel: () => void;
}

export default function EventForm({
  event,
  onSave,
  onCancel,
}: EventFormProps) {
  const [formData, setFormData] = useState<Event>(
    event ?? {
      id: Date.now(),
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
    }
  );

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
      <Stack spacing={2} sx={{ mt: 1 }}>

        <TextField
          fullWidth
          required
          label="Event Title"
          value={formData.title}
          onChange={(e) =>
            handleChange("title", e.target.value)
          }
        />

        <TextField
          fullWidth
          required
          multiline
          rows={3}
          label="Description"
          value={formData.description}
          onChange={(e) =>
            handleChange("description", e.target.value)
          }
        />

        <TextField
          fullWidth
          required
          type="date"
          label="Date"
          value={formData.date}
          onChange={(e) =>
            handleChange("date", e.target.value)
          }
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

        <TextField
          fullWidth
          required
          type="time"
          label="Time"
          value={formData.time}
          onChange={(e) =>
            handleChange("time", e.target.value)
          }
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

        <TextField
          fullWidth
          required
          label="Location"
          value={formData.location}
          onChange={(e) =>
            handleChange("location", e.target.value)
          }
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
            {event ? "Update Event" : "Save Event"}
          </Button>
        </Box>

      </Stack>
    </Box>
  );
}