import React from 'react';
import { PRICING_PLANS } from '../../utils/constants';

const Pricing = () => {
    return (
        <div style={{ padding: '60px 20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px' }}>
                    Choose Your Plan
                </h1> */}

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {PRICING_PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            style={{
                                backgroundColor: 'white',
                                padding: '40px',
                                borderRadius: '12px',
                                boxShadow: plan.popular ? '0 10px 40px rgba(103, 126, 234, 0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                                border: plan.popular ? '2px solid #667eea' : '1px solid #E5E7EB',
                                position: 'relative'
                            }}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#667eea',
                                    color: 'white',
                                    padding: '5px 20px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>
                                    POPULAR
                                </div>
                            )}

                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                                {plan.name}
                            </h2>
                            <div style={{ marginBottom: '30px' }}>
                                <span style={{ fontSize: '36px', fontWeight: 'bold' }}>${plan.price}</span>
                                <span style={{ color: '#6B7280' }}>/month</span>
                            </div>

                            <ul style={{ marginBottom: '30px', listStyle: 'none', padding: 0 }}>
                                {plan.features.map((feature, index) => (
                                    <li key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#10B981', fontSize: '20px' }}>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: plan.popular ? '#667eea' : '#F3F4F6',
                                    color: plan.popular ? 'white' : '#374151',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '16px'
                                }}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
