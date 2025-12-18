import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({ title, description, ctaText, ctaLink }) => {
    return (
        <section className="py-20 px-5 bg-gray-100 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-5">
                    {title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    {description}
                </p>
                <Link
                    to={ctaLink}
                    className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-lg no-underline font-bold text-base hover:bg-indigo-700 transition"
                >
                    {ctaText}
                </Link>
            </div>
        </section>
    );
};

export default CTASection;
