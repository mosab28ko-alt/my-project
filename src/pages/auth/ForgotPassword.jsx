import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock password reset - replace with actual API call
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Forgot Password
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Enter your email to receive a password reset link
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-indigo-600 text-white rounded-lg cursor-pointer font-bold text-base hover:bg-indigo-700 transition"
                        >
                            Send Reset Link
                        </button>
                    </form>
                ) : (
                    <div className="p-5 bg-green-100 rounded-lg text-center text-green-800">
                        <p className="font-medium">
                            Password reset link sent! Check your email.
                        </p>
                    </div>
                )}

                <p className="mt-5 text-center text-gray-600">
                    Remember your password?{' '}
                    <Link to="/login" className="text-indigo-600 no-underline font-medium hover:text-indigo-700">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
