import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api", // Replace with your backend's base URL
    timeout: 10000, // Set a timeout for requests
    headers: {
        "Content-Type": "application/json",
    },
});

// Add an interceptor for handling errors (optional)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API error:", error);
        return Promise.reject(error);
    }
);

export default api;
