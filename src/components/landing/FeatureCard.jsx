import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="text-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-3xl">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2.5">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
