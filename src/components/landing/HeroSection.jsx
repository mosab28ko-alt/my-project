import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, description, ctaText, ctaLink }) => {
    return (
        <section className="py-20 px-5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold mb-5">
                    {title}
                </h1>
                <p className="text-xl mb-10 opacity-90">
                    {description}
                </p>
                <div className="flex gap-5 justify-center">
                    <Link
                        to={ctaLink}
                        className="px-8 py-4 bg-white text-indigo-600 rounded-lg no-underline font-bold text-base hover:bg-gray-100 transition"
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
