import api from "./api";

export const fetchEvents = async () => {
    try {
        const response = await api.get("/events");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch events:", error);
        throw error;
    }
};

export const fetchEventById = async (eventId) => {
    try {
        const response = await api.get(`/events/${eventId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch event with ID ${eventId}:`, error);
        throw error;
    }
};

export const createEvent = async (eventData) => {
    try {
        const response = await api.post("/events", eventData);
        return response.data;
    } catch (error) {
        console.error("Failed to create event:", error);
        throw error;
    }
};

export const updateEvent = async (eventId, eventData) => {
    try {
        const response = await api.put(`/events/${eventId}`, eventData);
        return response.data;
    } catch (error) {
        console.error(`Failed to update event with ID ${eventId}:`, error);
        throw error;
    }
};

export const deleteEvent = async (eventId) => {
    try {
        await api.delete(`/events/${eventId}`);
    } catch (error) {
        console.error(`Failed to delete event with ID ${eventId}:`, error);
        throw error;
    }
};
