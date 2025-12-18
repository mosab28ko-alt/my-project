import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';
import Overview from '../pages/dashboard/Overview';
import Settings from '../pages/dashboard/Settings';
import Billing from '../pages/dashboard/Billing';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/dashboard" element={<Overview />} />
                <Route path="/dashboard/overview" element={<Overview />} />
                <Route path="/dashboard/settings" element={<Settings />} />
                <Route path="/dashboard/billing" element={<Billing />} />
            </Route>
        </Routes>
    );
};

export default DashboardRoutes;
