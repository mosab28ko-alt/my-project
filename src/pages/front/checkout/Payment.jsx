import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../../hooks/useCheckout';
import { useCart } from '../../../hooks/useCart';

const Payment = () => {
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });
    const { savePaymentMethod, completeOrder } = useCheckout();
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        savePaymentMethod(paymentInfo);
        completeOrder({ total: cartTotal, date: new Date().toISOString() });
        clearCart();
        navigate('/checkout/confirmation');
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
                Payment Information
            </h1>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Cardholder Name</label>
                    <input
                        type="text"
                        name="cardName"
                        value={paymentInfo.cardName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Expiry Date</label>
                        <input
                            type="text"
                            name="expiryDate"
                            value={paymentInfo.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                            style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            required
                            style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                        />
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#F3F4F6',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Subtotal:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Shipping:</span>
                        <span>$0.00</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '10px',
                        borderTop: '2px solid #D1D5DB',
                        fontWeight: 'bold',
                        fontSize: '18px'
                    }}>
                        <span>Total:</span>
                        <span style={{ color: '#667eea' }}>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '14px',
                        backgroundColor: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                >
                    Complete Order
                </button>
            </form>
        </div>
    );
};

export default Payment;
