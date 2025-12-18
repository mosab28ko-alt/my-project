import React from 'react';

const OurTeam = ({ data }) => {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
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

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.members.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
                        >
                            {/* Avatar */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Social Links (Show on Hover) */}
                                {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <a
                                        href={member.social.linkedin}
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                                    >
                                        💼
                                    </a>
                                    <a
                                        href={member.social.twitter}
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                                    >
                                        🐦
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                                    >
                                        💻
                                    </a>
                                </div> */}
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                {/* <p className="text-indigo-600 font-semibold mb-3">
                                    {member.role}
                                </p> */}
                                <p className="text-gray-600 text-sm">
                                    {member.bio}
                                </p>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/30 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
