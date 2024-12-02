import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light custom-navbar"
                style={{ fontSize: '24px', height: '80px', padding: '10px 20px' }}
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        WayPreparers Church
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/" 
                                    style={{borderRadius: '5px', padding: '8px 15px' }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/articles" 
                                    style={{borderRadius: '5px', padding: '8px 15px' }}
                                >
                                    Articles
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/events" 
                                    style={{borderRadius: '5px', padding: '8px 15px' }}
                                >
                                    Events
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/donations" 
                                    style={{borderRadius: '5px', padding: '8px 15px' }}
                                >
                                    Donations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link" 
                                    to="/contact" 
                                    style={{borderRadius: '5px', padding: '8px 15px' }}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
