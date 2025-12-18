import React from 'react';

const Spinner = ({ size = 'md', color = 'indigo' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4'
    };

    const colorClasses = {
        indigo: 'border-indigo-600 border-t-transparent',
        white: 'border-white border-t-transparent',
        gray: 'border-gray-600 border-t-transparent'
    };

    return (
        <div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin`}
            role="status"
            aria-label="Loading"
        />
    );
};

export default Spinner;
