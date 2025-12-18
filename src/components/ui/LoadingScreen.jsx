import React from 'react';
import Spinner from './Spinner';

const LoadingScreen = ({ message = 'Loading...' }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Spinner size="lg" />
            <p className="mt-4 text-gray-600 text-lg">{message}</p>
        </div>
    );
};

export default LoadingScreen;
