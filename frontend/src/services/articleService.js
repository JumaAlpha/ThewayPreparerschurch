// services/articleService.js
import api from "./api";  // Import your axios instance

export const fetchArticles = async () => {
    try {
        const response = await api.get("/articles"); // Use the axios instance to fetch articles
        return response.data;  // Return the response data
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;  // Propagate the error for further handling
    }
};
