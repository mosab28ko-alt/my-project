import React from 'react';

const Billing = () => {
    return (
        <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Billing</h1>

            <div style={{ display: 'grid', gap: '20px' }}>
                {/* Current Plan */}
                <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Current Plan</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#4F46E5' }}>Pro Plan</p>
                            <p style={{ color: '#6B7280', marginTop: '5px' }}>$19.99/month</p>
                        </div>
                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#EF4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '500'
                            }}
                        >
                            Cancel Subscription
                        </button>
                    </div>
                </div>

                {/* Payment Method */}
                <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Payment Method</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontWeight: '500' }}>•••• •••• •••• 4242</p>
                            <p style={{ color: '#6B7280', marginTop: '5px' }}>Expires 12/25</p>
                        </div>
                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4F46E5',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '500'
                            }}
                        >
                            Update
                        </button>
                    </div>
                </div>

                {/* Billing History */}
                <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Billing History</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            { date: '2025-01-01', amount: '$19.99', status: 'Paid' },
                            { date: '2024-12-01', amount: '$19.99', status: 'Paid' },
                            { date: '2024-11-01', amount: '$19.99', status: 'Paid' },
                        ].map((invoice, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '15px',
                                    backgroundColor: '#F9FAFB',
                                    borderRadius: '6px'
                                }}
                            >
                                <span>{invoice.date}</span>
                                <span style={{ fontWeight: '500' }}>{invoice.amount}</span>
                                <span style={{ color: '#10B981', fontWeight: '500' }}>{invoice.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
