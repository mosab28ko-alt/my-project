import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../../hooks/useCheckout';

const Address = () => {
    const [address, setAddress] = useState({
        fullName: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });
    const { saveShippingAddress, goToNextStep } = useCheckout();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveShippingAddress(address);
        goToNextStep();
        navigate('/checkout/payment');
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px' }}>
            {/* <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
                Shipping Address
            </h1> */}

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={address.fullName}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Street Address</label>
                    <input
                        type="text"
                        name="street"
                        value={address.street}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>City</label>
                        <input
                            type="text"
                            name="city"
                            value={address.city}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>State</label>
                        <input
                            type="text"
                            name="state"
                            value={address.state}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>ZIP Code</label>
                        <input
                            type="text"
                            name="zipCode"
                            value={address.zipCode}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Country</label>
                        <input
                            type="text"
                            name="country"
                            value={address.country}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '12px', border: '1px solid #D1D5DB', borderRadius: '6px' }}
                        />
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
                    Continue to Payment
                </button>
            </form>
        </div>
    );
};

export default Address;
