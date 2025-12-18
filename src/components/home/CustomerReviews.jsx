import React, { useState } from 'react';

const CustomerReviews = ({ data }) => {
    const [activeReview, setActiveReview] = useState(0);

    const StarRating = ({ rating }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <span
                    key={i}
                    className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                    ★
                </span>
            ))}
        </div>
    );

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* GRID */}
                <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* ======================= */}
                    {/*     FIRST CARD          */}
                    {/* ======================= */}
                    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-10 shadow-2xl flex flex-col justify-between border border-white/10">

                        <div>
                            <h2 className="text-3xl font-extrabold mb-4">
                                {data.title}
                            </h2>

                            <h3 className="text-xl font-semibold opacity-90 mb-3">
                                {data.subtitle}
                            </h3>

                            <p className="text-white/80 leading-relaxed mb-6">
                                {data.description}
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-4 mt-6">
                            <button
                                onClick={() =>
                                    setActiveReview((prev) =>
                                        prev === 0 ? data.reviews.length - 1 : prev - 1
                                    )
                                }
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur-xl border border-white/30 text-white text-2xl"
                            >
                                ←
                            </button>

                            <button
                                onClick={() =>
                                    setActiveReview((prev) =>
                                        prev === data.reviews.length - 1 ? 0 : prev + 1
                                    )
                                }
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur-xl border border-white/30 text-white text-2xl"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    {/* ======================= */}
                    {/*   OTHER REVIEW CARDS    */}
                    {/* ======================= */}

                    {data.reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Name */}
                            <div className="font-bold text-gray-900 text-lg mb-3">
                                {review.name}
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                "{review.text}"
                            </p>

                            {/* Rating */}
                            <div className="mb-4">
                                <StarRating rating={review.rating} />
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 ">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-100"
                                />

                                <div>
                                    <div className="font-bold text-gray-900">{review.name}</div>
                                    <div className="text-sm text-gray-600">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* TRUST BADGES */}
                <div className="mt-16 text-center border-t-2 border-gray-200 pt-6">
                    <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
                        <div className="text-2xl font-bold text-gray-400">Airbnb</div>
                        <div className="text-2xl font-bold text-gray-400">Netflix</div>
                        <div className="text-2xl font-bold text-gray-400">Corp</div>
                        <div className="text-2xl font-bold text-gray-400">Coinbase</div>
                        <div className="text-2xl font-bold text-gray-400">Pinterest</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CustomerReviews;
