import React from 'react';

const Settings = () => {
    return (
        <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Settings</h1>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Account Settings</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #D1D5DB',
                                borderRadius: '6px',
                                fontSize: '14px'
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #D1D5DB',
                                borderRadius: '6px',
                                fontSize: '14px'
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #D1D5DB',
                                borderRadius: '6px',
                                fontSize: '14px'
                            }}
                        />
                    </div>

                    <button
                        style={{
                            padding: '12px 24px',
                            backgroundColor: '#4F46E5',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            fontSize: '14px',
                            alignSelf: 'flex-start'
                        }}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
