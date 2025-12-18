import { API_BASE_URL } from '../utils/constants';

// Pricing API functions

export const getPricingPlans = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/pricing/plans`);

        if (!response.ok) {
            throw new Error('Failed to fetch pricing plans');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching pricing plans:', error);
        throw error;
    }
};

export const subscribeToPlan = async (planId, userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/pricing/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ planId, userId }),
        });

        if (!response.ok) {
            throw new Error('Failed to subscribe to plan');
        }

        return await response.json();
    } catch (error) {
        console.error('Error subscribing to plan:', error);
        throw error;
    }
};

export const cancelSubscription = async (subscriptionId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/pricing/subscription/${subscriptionId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to cancel subscription');
        }

        return await response.json();
    } catch (error) {
        console.error('Error cancelling subscription:', error);
        throw error;
    }
};
