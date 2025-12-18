import React from 'react';

const GeneralPayment = () => {
    return (
        <div style={{ padding: '60px 20px', minHeight: '60vh' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
                    Payment
                </h1>

                <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
                        Payment Information
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Card Number</label>
                            <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #D1D5DB',
                                    borderRadius: '6px',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Expiry Date</label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #D1D5DB',
                                        borderRadius: '6px',
                                        fontSize: '14px'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>CVV</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: '1px solid #D1D5DB',
                                        borderRadius: '6px',
                                        fontSize: '14px'
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Cardholder Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #D1D5DB',
                                    borderRadius: '6px',
                                    fontSize: '14px'
                                }}
                            />
                        </div>

                        <button
                            style={{
                                width: '100%',
                                padding: '14px',
                                backgroundColor: '#667eea',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                marginTop: '10px'
                            }}
                        >
                            Complete Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralPayment;
