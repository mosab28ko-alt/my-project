import { API_BASE_URL } from '../utils/constants';

// User API functions

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Registration failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const getUserProfile = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const updateUserProfile = async (userId, userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to update user profile');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};
