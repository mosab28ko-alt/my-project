import { API_BASE_URL } from '../utils/constants';

// Checkout API functions

export const createOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/checkout/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            throw new Error('Failed to create order');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const processPayment = async (paymentData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/checkout/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        });

        if (!response.ok) {
            throw new Error('Payment processing failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};

export const validateCoupon = async (couponCode) => {
    try {
        const response = await fetch(`${API_BASE_URL}/checkout/coupon/${couponCode}`);

        if (!response.ok) {
            throw new Error('Invalid coupon code');
        }

        return await response.json();
    } catch (error) {
        console.error('Error validating coupon:', error);
        throw error;
    }
};
