// Application constants

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const ROUTES = {
    HOME: '/',
    PRICING: '/pricing',
    HELP_CENTER: '/help-center',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    DASHBOARD: '/dashboard',
    DASHBOARD_OVERVIEW: '/dashboard/overview',
    DASHBOARD_SETTINGS: '/dashboard/settings',
    DASHBOARD_BILLING: '/dashboard/billing',
    CART: '/cart',
    CHECKOUT_ADDRESS: '/checkout/address',
    CHECKOUT_PAYMENT: '/checkout/payment',
    CHECKOUT_CONFIRMATION: '/checkout/confirmation',
};

export const CHECKOUT_STEPS = {
    CART: 1,
    ADDRESS: 2,
    PAYMENT: 3,
    CONFIRMATION: 4,
};

export const PAYMENT_METHODS = {
    CREDIT_CARD: 'credit_card',
    PAYPAL: 'paypal',
    BANK_TRANSFER: 'bank_transfer',
};

export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest',
};

export const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled',
};

export const PRICING_PLANS = [
    {
        id: 'pro',
        name: 'Pro',
        price: 19.99,
        features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
        popular: true,
    },
];
