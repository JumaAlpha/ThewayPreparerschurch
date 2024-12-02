// Footer.jsx 
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-center py-4 mt-auto">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} WayPreparers Church. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
