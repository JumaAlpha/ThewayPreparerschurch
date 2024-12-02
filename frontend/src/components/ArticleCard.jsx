import React, { useState } from "react";
import "./ArticleCard.css"; // Import the CSS file

const ArticleCard = ({ article }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("overlay")) {
            toggleModal();
        }
    };

    return (
        <div className="card h-100">
            <img
                src={article.image_url || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={article.title}
                style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title card-title-custom">{article.title}</h5>
                <p className="card-text card-text-custom">{article.content.substring(0, 150)}...</p>
                <p className="text-muted">
                    <small>{new Date(article.published_date).toLocaleDateString()}</small>
                </p>
                <button className="btn btn-primary" onClick={toggleModal}>
                    Read More
                </button>
            </div>

            {showModal && (
                <div
                    className="overlay"
                    onClick={handleOverlayClick}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        zIndex: 1050,
                    }}
                >
                    <div
                        className="modal-dialog"
                        style={{
                            position: "relative",
                            maxWidth: "800px",
                            margin: "5% auto",
                        }}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modal-title-custom">{article.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={toggleModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body modal-body-custom">
                                <p>{article.content}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleCard;
