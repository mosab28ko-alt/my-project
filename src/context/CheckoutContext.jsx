import { createContext, useState } from 'react';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1); // 1: Cart, 2: Address, 3: Payment, 4: Confirmation
    const [shippingAddress, setShippingAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [orderSummary, setOrderSummary] = useState(null);

    const goToNextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 4));
    };

    const goToPreviousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const goToStep = (step) => {
        if (step >= 1 && step <= 4) {
            setCurrentStep(step);
        }
    };

    const saveShippingAddress = (address) => {
        setShippingAddress(address);
    };

    const savePaymentMethod = (method) => {
        setPaymentMethod(method);
    };

    const completeOrder = (summary) => {
        setOrderSummary(summary);
        setCurrentStep(4);
    };

    const resetCheckout = () => {
        setCurrentStep(1);
        setShippingAddress(null);
        setPaymentMethod(null);
        setOrderSummary(null);
    };

    const value = {
        currentStep,
        shippingAddress,
        paymentMethod,
        orderSummary,
        goToNextStep,
        goToPreviousStep,
        goToStep,
        saveShippingAddress,
        savePaymentMethod,
        completeOrder,
        resetCheckout,
    };

    return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};
