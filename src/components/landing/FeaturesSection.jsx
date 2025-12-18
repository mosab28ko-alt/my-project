import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = ({ title, description, features }) => {
    return (
        <section className="py-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        {description}
                    </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
