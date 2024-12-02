import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Events from "./pages/Events";
import Donations from "./pages/Donations";
import Contact from "./pages/Contact";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageEvents from "./pages/Admin/ManageEvents";
import ManageArticles from "./pages/Admin/ManageArticles";
import ManageDonations from "./pages/Admin/ManageDonations";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/global.css"; // Global custom styling (if any)

function App() {
    return (
        <Router>
            <div className="container-fluid">
                {/* Header */}
                <Header />
                
                {/* Main Content */}
                <main className="py-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/donations" element={<Donations />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* Admin Routes */}
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/manage-users" element={<ManageUsers />} />
                        <Route path="/admin/manage-events" element={<ManageEvents />} />
                        <Route path="/admin/manage-articles" element={<ManageArticles />} />
                        <Route path="/admin/manage-donations" element={<ManageDonations />} />
                    </Routes>
                </main>
                
                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
