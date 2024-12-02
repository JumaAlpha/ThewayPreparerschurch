// Dashboard.jsx 
import React from "react";

const Dashboard = () => {
    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin. Manage the church’s resources and activities.</p>
            <ul>
                <li><a href="/admin/manage-users">Manage Users</a></li>
                <li><a href="/admin/manage-events">Manage Events</a></li>
                <li><a href="/admin/manage-articles">Manage Articles</a></li>
                <li><a href="/admin/manage-donations">Manage Donations</a></li>
            </ul>
        </div>
    );
};

export default Dashboard;
