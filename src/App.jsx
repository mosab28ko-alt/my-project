// src/App.jsx - (الكود النظيف والمُنظم)
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/ui/LoadingScreen";
import ProtectedRoute from "./routes/ProtectedRoute";

// استيراد ملفات التوجيه والـ Layouts والمكونات المطلوبة فقط في هذا الملف
import FrontRoutes from "./routes/FrontRoutes"; // <== يجب استخدامه الآن!
import DashboardLayout from "./layouts/DashboardLayout"; 
const Overview = React.lazy(() => import("./pages/dashboard/Overview"));
const Settings = React.lazy(() => import("./pages/dashboard/Settings"));
const Billing = React.lazy(() => import("./pages/dashboard/Billing"));

import "./App.css";

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AuthProvider>
                    <CartProvider>
                        <CheckoutProvider>
                            <Suspense fallback={<LoadingScreen />}>
                                <Routes>
                                    {/* 1. جميع مسارات الواجهة الأمامية (Front, Auth, Checkout) */}
                                    {/* نضع مسارات FrontRoutes في مسار Route واحد بدون path 
                                       إذا كنا نريد أن تكون مساراتها (/, /pricing, /login) مباشرة. */}
                                    <Route path="/*" element={<FrontRoutes />} /> 
                                    
                                    {/* 2. Dashboard Pages (المحمية) */}
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
                            </Suspense>
                        </CheckoutProvider>
                    </CartProvider>
                </AuthProvider>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;