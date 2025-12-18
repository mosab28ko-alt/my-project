import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <Sidebar />
            </aside>

            {/* Main Content Area */}
            <div className="dashboard-main" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Topbar */}
                <header className="dashboard-topbar">
                    <Topbar />
                </header>

                {/* Page Content */}
                <main className="dashboard-content" style={{ flex: 1, padding: '20px' }}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
