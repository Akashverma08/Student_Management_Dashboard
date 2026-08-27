import { Event } from "@/src/types/event";

const STORAGE_KEY = "events";

export function getEvents(): Event[] {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function createEvent(event: Event) {
  const events = getEvents();

  events.push(event);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(events)
  );
}

export function updateEvent(
  id: number,
  data: Event
) {
  const events = getEvents();

  const updatedEvents = events.map((event) =>
    event.id === id ? data : event
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedEvents)
  );
}

export function deleteEvent(id: number) {
  const events = getEvents();

  const updatedEvents = events.filter(
    (event) => event.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedEvents)
  );
}