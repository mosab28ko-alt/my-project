import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HelpCenterQuestion = () => {
    const { id } = useParams();

    return (
        <div style={{ padding: '60px 20px', minHeight: '60vh' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/help-center" style={{ color: '#667eea', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
                    ← Back to Help Center
                </Link>

                <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
                        Help Article #{id}
                    </h1>

                    <div style={{ color: '#6B7280', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '15px' }}>
                            This is a placeholder for help article content. In a real application, this would be fetched from an API based on the article ID.
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            You can add detailed instructions, screenshots, videos, and other helpful content here to assist users with their questions.
                        </p>
                        <p>
                            If you need further assistance, please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenterQuestion;
