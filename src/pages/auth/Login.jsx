import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login - replace with actual API call
        login({ email, name: 'User' });
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Login
                </h1>

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

                    <div>
                        <label className="block mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <Link to="/forgot-password" className="text-indigo-600 text-sm no-underline hover:text-indigo-700">
                        Forgot password?
                    </Link>

                    <button
                        type="submit"
                        className="w-full py-3.5 bg-indigo-600 text-white rounded-lg cursor-pointer font-bold text-base hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-5 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-indigo-600 no-underline font-medium hover:text-indigo-700">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
