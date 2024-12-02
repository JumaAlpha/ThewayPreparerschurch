// userService.js 
import api from "./api";

export const fetchUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
};

export const fetchUserById = async (userId) => {
    try {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch user with ID ${userId}:`, error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await api.post("/users", userData);
        return response.data;
    } catch (error) {
        console.error("Failed to create user:", error);
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await api.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Failed to update user with ID ${userId}:`, error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        await api.delete(`/users/${userId}`);
    } catch (error) {
        console.error(`Failed to delete user with ID ${userId}:`, error);
        throw error;
    }
};
