import React, { useState } from 'react';

import ContactImage from '../../../public/imagehdh.png';

const ContactUs = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {data.title}
                    </h2>
                    <p className="text-xl text-indigo-600 font-semibold mb-3">
                        {data.subtitle}
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information - هذا هو الجزء الذي تم تعديله */}
                    <div>
                        {/* تم استبدال h3 بصورة بناءً على طلبك */}
                        <img
                            src={ContactImage}
                            alt="Contact Information Illustration"
                            // تم تطبيق تنسيقات Tailwind CSS لجعل الصورة مناسبة وموجودة في المنتصف
                            className="w-full max-w-xs md:max-w-sm mx-auto mb-8 h-auto object-contain"
                        />

                        {/* Contact Methods */}
                        <div className="space-y-6 mb-10 flex">
                            {data.contactInfo.map((info) => (
                                <a
                                    key={info.id}
                                    href={info.link}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-indigo-50 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-[rgb(223,223,250)] from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 mb-1">
                                            {info.title}
                                        </div>
                                        <div className="text-gray-600">
                                            {info.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Send message
                        </h3>
                            <p className='text-[rgb(153,159,166)]'>If you Would like to discuss anything relacd to paymen to Payment acout tiensing partneship,or have prs-salsae quest tiensing partneship,or have prs-salsae quest</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex justify-between">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Email 
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            </div>
                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Message 
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                {submitted ? '✓ Message Sent!' : 'Send lnquiry'}
                            </button>

                            {/* Success Message */}
                            {submitted && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                    <span className="text-green-800 font-semibold">
                                        Thank you! We'll get back to you soon.
                                    </span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;