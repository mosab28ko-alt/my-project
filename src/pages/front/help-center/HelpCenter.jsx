import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
    const articles = [
        { id: 1, title: 'Getting Started', category: 'Basics' },
        { id: 2, title: 'Account Settings', category: 'Account' },
        { id: 3, title: 'Billing & Payments', category: 'Billing' },
        { id: 4, title: 'Troubleshooting', category: 'Support' },
    ];

    return (
        <div style={{ padding: '60px 20px', minHeight: '60vh' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
                    Help Center
                </h1>
                <p style={{ textAlign: 'center', color: '#6B7280', marginBottom: '40px' }}>
                    Find answers to your questions
                </p>

                {/* Search */}
                <div style={{ marginBottom: '40px' }}>
                    <input
                        type="text"
                        placeholder="Search for help..."
                        style={{
                            width: '100%',
                            padding: '15px',
                            border: '1px solid #D1D5DB',
                            borderRadius: '8px',
                            fontSize: '16px'
                        }}
                    />
                </div>

                {/* Articles */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: '20px'
                }}>
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/help-center/${article.id}`}
                            style={{
                                backgroundColor: 'white',
                                padding: '25px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'transform 0.2s'
                            }}
                        >
                            <div style={{
                                fontSize: '12px',
                                color: '#667eea',
                                fontWeight: '600',
                                marginBottom: '10px'
                            }}>
                                {article.category}
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                {article.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
