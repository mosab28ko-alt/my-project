import React from 'react';

const FeaturesSection = ({ data }) => {
    return (
        <section className="py-20 px-6 bg-gray-50">
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

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Icon with Gradient Background */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect Border */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
