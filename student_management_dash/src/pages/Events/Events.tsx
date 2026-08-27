"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import EventForm from "@/src/components/EventForm/EventForm";

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "@/src/services/eventService";

import { Event } from "@/src/types/event";
import { useAuth } from "@/src/context/AuthContext";

export default function Events() {
  const { user } = useAuth();

  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);

  // Currently editing event
  const [selectedEvent, setSelectedEvent] =
    useState<Event | null>(null);

  const isAdmin = user?.role === "Administrator";

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  // Create / Update
  const handleSaveEvent = (event: Event) => {
    const existingEvent = events.some(
      (item) => item.id === event.id
    );

    if (existingEvent) {
      // UPDATE
      updateEvent(event.id, event);

      setEvents((prev) =>
        prev.map((item) =>
          item.id === event.id
            ? event
            : item
        )
      );
    } else {
      // CREATE
      createEvent(event);

      setEvents((prev) => [
        ...prev,
        event,
      ]);
    }

    setOpen(false);
    setSelectedEvent(null);
  };

  // Edit
  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  // Delete
  const handleDelete = (id: number) => {
    deleteEvent(id);

    setEvents((prev) =>
      prev.filter(
        (event) => event.id !== id
      )
    );
  };

  // Add
  const handleAdd = () => {
    setSelectedEvent(null);
    setOpen(true);
  };

  return (
    <Box sx={{ p: 3 }}>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 600 }}
        >
          Upcoming Events
        </Typography>

        {isAdmin && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAdd}
          >
            Add Event
          </Button>
        )}
      </Box>

      {/* Events */}
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
            key={event.id}
          >
            <Card>
              <CardContent>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {event.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {event.description}
                </Typography>

                <Typography>
                  📅 {event.date}
                </Typography>

                <Typography>
                  🕐 {event.time}
                </Typography>

                <Typography>
                  📍 {event.location}
                </Typography>

                {/* Admin Actions */}
                {isAdmin && (
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() =>
                        handleEdit(event)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      size="small"
                      color="error"
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() =>
                        handleDelete(event.id)
                      }
                    >
                      Delete
                    </Button>
                  </Box>
                )}

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {events.length === 0 && (
        <Typography color="text.secondary">
          No upcoming events.
        </Typography>
      )}

      {/* Create / Edit Dialog */}
      {isAdmin && (
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
            setSelectedEvent(null);
          }}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            {selectedEvent
              ? "Edit Event"
              : "Add New Event"}
          </DialogTitle>

          <DialogContent>
            <EventForm
              event={selectedEvent ?? undefined}
              onSave={handleSaveEvent}
              onCancel={() => {
                setOpen(false);
                setSelectedEvent(null);
              }}
            />
          </DialogContent>
        </Dialog>
      )}

    </Box>
  );
}