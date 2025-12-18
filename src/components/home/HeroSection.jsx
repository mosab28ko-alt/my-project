import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ data }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className=" font-bold text-white mb-6 leading-tight w-[62%] ml-[13%] text-[50px]">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
            {data.subtitle}
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {data.primaryCTA && (
              <Link
                to={data.primaryCTA.link}
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                {data.primaryCTA.text} →
              </Link>
            )}

            {data.secondaryCTA && (
              <a
                href={data.secondaryCTA.link}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                {data.secondaryCTA.text} ▶
              </a>
            )}
          </div>

          {/* Stats */}
          {data.stats?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
