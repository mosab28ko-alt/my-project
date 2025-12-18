import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingLayout from '../layouts/LandingLayout';
import CheckoutLayout from '../layouts/CheckoutLayout';
import Landing from '../pages/front/Landing';
import Pricing from '../pages/front/Pricing';
import GeneralPayment from '../pages/front/GeneralPayment';
import HelpCenter from '../pages/front/help-center/HelpCenter';
import HelpCenterQuestion from '../pages/front/help-center/HelpCenterQuestion';
import Cart from '../pages/front/checkout/Cart';
import Address from '../pages/front/checkout/Address';
import Payment from '../pages/front/checkout/Payment';
import Confirmation from '../pages/front/checkout/Confirmation';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

const FrontRoutes = () => {
    return (
        <Routes>
            {/* Public Pages with Landing Layout */}
            <Route element={<LandingLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/payment" element={<GeneralPayment />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/help-center/:id" element={<HelpCenterQuestion />} />
            </Route>

            {/* Auth Pages (no layout) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Checkout Pages with Checkout Layout */}
            <Route element={<CheckoutLayout />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout/address" element={<Address />} />
                <Route path="/checkout/payment" element={<Payment />} />
                <Route path="/checkout/confirmation" element={<Confirmation />} />
            </Route>
        </Routes>
    );
};

export default FrontRoutes;
