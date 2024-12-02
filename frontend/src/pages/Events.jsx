import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS
import EventCard from "../components/EventCard"; // Import the EventCard component
import { fetchEvents } from "../services/eventService"; // API service to fetch events

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("upcoming"); // Default filter type is "upcoming"

    useEffect(() => {
        // Fetch events when the component loads
        const getEvents = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
                setFilteredEvents(filterEvents(data, "upcoming")); // Set initial filtered events
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        getEvents();
    }, []);

    useEffect(() => {
        // Update filtered events whenever the search term or filter type changes
        const results = filterEvents(events, filterType);
        setFilteredEvents(
            results.filter((event) =>
                event.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, filterType, events]);

    const filterEvents = (eventsList, type) => {
        const now = new Date();
        if (type === "upcoming") {
            return eventsList.filter((event) => new Date(event.event_date) > now);
        } else if (type === "past") {
            return eventsList.filter((event) => new Date(event.event_date) <= now);
        }
        return eventsList; // Default: return all events
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Events</h1>

            {/* Search and Filter Controls */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ maxWidth: "300px" }}
                />
                <div>
                    <button
                        className={`btn btn-outline-primary me-2 ${
                            filterType === "upcoming" ? "active" : ""
                        }`}
                        onClick={() => setFilterType("upcoming")}
                    >
                        Upcoming
                    </button>
                    <button
                        className={`btn btn-outline-secondary ${
                            filterType === "past" ? "active" : ""
                        }`}
                        onClick={() => setFilterType("past")}
                    >
                        Past
                    </button>
                </div>
            </div>

            {/* Event List */}
            {filteredEvents.length > 0 ? (
                <div className="row">
                    {filteredEvents.map((event) => (
                        <div key={event.id} className="col-md-4 mb-4">
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No events found. Try searching or changing filters!</p>
            )}
        </div>
    );
};

export default Events;
