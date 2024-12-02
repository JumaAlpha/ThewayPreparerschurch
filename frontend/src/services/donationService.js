// donationService.js 
import api from "./api";

export const fetchDonations = async () => {
    try {
        const response = await api.get("/donations");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch donations:", error);
        throw error;
    }
};

export const createDonation = async (donationData) => {
    try {
        const response = await api.post("/donations", donationData);
        return response.data;
    } catch (error) {
        console.error("Failed to create donation:", error);
        throw error;
    }
};

export const deleteDonation = async (donationId) => {
    try {
        await api.delete(`/donations/${donationId}`);
    } catch (error) {
        console.error(`Failed to delete donation with ID ${donationId}:`, error);
        throw error;
    }
};
