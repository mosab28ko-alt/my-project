import React from 'react';
import { Link } from 'react-router-dom';
import { useCheckout } from '../../../hooks/useCheckout';

const Confirmation = () => {
    const { orderSummary, resetCheckout } = useCheckout();

    return (
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#10B981',
                borderRadius: '50%',
                margin: '0 auto 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '40px'
            }}>
                ✓
            </div>

            <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px' }}>
                Order Confirmed!
            </h1>

            <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '30px' }}>
                Thank you for your purchase. Your order has been successfully placed.
            </p>

            {orderSummary && (
                <div style={{
                    backgroundColor: '#F3F4F6',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '30px',
                    textAlign: 'left'
                }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
                        Order Summary
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Order Total:</span>
                        <span style={{ fontWeight: 'bold' }}>${orderSummary.total?.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Order Date:</span>
                        <span>{new Date(orderSummary.date).toLocaleDateString()}</span>
                    </div>
                </div>
            )}

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <Link
                    to="/"
                    onClick={resetCheckout}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#667eea',
                        color: 'white',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    Continue Shopping
                </Link>
                <Link
                    to="/dashboard"
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#F3F4F6',
                        color: '#374151',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '500'
                    }}
                >
                    View Orders
                </Link>
            </div>
        </div>
    );
};

export default Confirmation;
