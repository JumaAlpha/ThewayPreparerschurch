import React, { useState } from "react";

const EventCard = ({ event }) => {
    const [showModal, setShowModal] = useState(false);
    const eventDate = event.event_date ? new Date(event.event_date) : null;

    const handleModalToggle = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <>
            {/* Event Card */}
            <div className="card h-100">
                <img
                    src={event.image_url}
                    className="card-img-top"
                    alt={event.title}
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="text-muted">
                        <small>
                            {eventDate && !isNaN(eventDate)
                                ? eventDate.toLocaleDateString()
                                : "Invalid Date"}
                        </small>
                    </p>
                    <button className="btn btn-primary" onClick={handleModalToggle}>
                        Learn More
                    </button>
                </div>
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <div
                    className="modal fade show"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    tabIndex="-1"
                    role="dialog"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{event.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleModalToggle}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>{event.description}</p>
                                <p>
                                    <strong>Date:</strong>{" "}
                                    {eventDate && !isNaN(eventDate)
                                        ? eventDate.toLocaleDateString()
                                        : "Invalid Date"}
                                </p>
                                <p>
                                    <strong>Location:</strong> {event.location}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleModalToggle}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EventCard;
