import React from 'react';

// Import all 7 professional sections
import HeroSection from '../../components/home/HeroSection';
import FeaturesSection from '../../components/home/FeaturesSection';
import CustomerReviews from '../../components/home/CustomerReviews';
import OurTeam from '../../components/home/OurTeam';
import PricingPlans from '../../components/home/PricingPlans';
import FAQ from '../../components/home/FAQ';
import ContactUs from '../../components/home/ContactUs';

// Import data
import {
    heroData,
    featuresData,
    reviewsData,
    teamData,
    pricingData,
    faqData,
    contactData
} from '../../data/homeData';

const Landing = () => {
    return (
        <div className="overflow-hidden">
            {/* 1. Hero Section - Full screen with gradient */}
            <HeroSection data={heroData} />

            {/* 2. Features Section - Showcase platform capabilities */}
            <FeaturesSection data={featuresData} />

            {/* 3. Customer Reviews - Social proof */}
            <CustomerReviews data={reviewsData} />

            {/* 4. Our Team - Meet the people */}
            <OurTeam data={teamData} />

            {/* 5. Pricing Plans - Clear pricing options */}
            <PricingPlans data={pricingData} />

            {/* 6. FAQ - Answer common questions */}
            <FAQ data={faqData} />

            {/* 7. Contact Us - Get in touch */}
            <ContactUs data={contactData} />
        </div>
    );
};

export default Landing;
