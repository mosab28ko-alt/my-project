// Home Page Data - All sections data in one place

// 1. Hero Section
export const heroData = {
    title: "One deshboard to manage all your businesses",
    subtitle: "Production-ready & easy to ues Admin Tempiate for Reliability and Customizability.",
    primaryCTA: {
        text: "Get Early Access",
        link: "/register"
    },
};

// 2. Features Section
export const featuresData = {
    title: "Useful Featlres",
    subtitle: "Everything you need to Start your next ",
    description: "Project Not just a set of tocts the Package includes ready-to-deploy coneptual appliction.",
    features: [
        {
            id: 1,
            icon: "⚡",
            title: "Lightning Fast",
            description: "Optimized performance for the best user experience. Load times under 1 second.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            icon: "🔒",
            title: "Secure & Safe",
            description: "Enterprise-grade security with end-to-end encryption and regular audits.",
            color: "from-blue-400 to-indigo-500"
        },
        {
            id: 3,
            icon: "📊",
            title: "Advanced Analytics",
            description: "Real-time insights and detailed reports to make data-driven decisions.",
            color: "from-green-400 to-teal-500"
        },
        {
            id: 4,
            icon: "🎨",
            title: "Customizable",
            description: "Fully customizable interface to match your brand and workflow.",
            color: "from-purple-400 to-pink-500"
        },
        {
            id: 5,
            icon: "🔄",
            title: "Auto Sync",
            description: "Automatic synchronization across all your devices in real-time.",
            color: "from-cyan-400 to-blue-500"
        },
        {
            id: 6,
            icon: "🌍",
            title: "Global CDN",
            description: "Fast content delivery worldwide with our global CDN network.",
            color: "from-indigo-400 to-purple-500"
        }
    ]
};

// 3. Customer Reviews
export const reviewsData = {
    title: "Real Customers Reviews",
    subtitle: "What What People say",
    description: "See What our Customers hsve to say about their expeienee",

    reviews: [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO at TechCorp",
            avatar: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            text: "This platform has completely transformed how we manage our business. The analytics features are outstanding!",
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager",
            avatar: "https://i.pravatar.cc/150?img=2",
            rating: 5,
            text: "Best investment we've made this year. The customer support is incredibly responsive and helpful.",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Marketing Director",
            avatar: "https://i.pravatar.cc/150?img=3",
            rating: 5,
            text: "The ease of use and powerful features make this a must-have tool for any growing business.",
        },
    ],
};



// 4. Our Team
export const teamData = {
    title: "Our Greet Teem",
    subtitle: "Supported by Real People",
    description: "Who is behind thesg great_locking inter faces?",
    members: [
        {
            id: 1,
            name: "Sophie Gilbert",
            avatar: "https://i.pravatar.cc/200?img=11",
            bio: "Project bfgnaert",
        },
        {
            id: 2,
            name: "Samantha Lee",
            avatar: "https://i.pravatar.cc/200?img=12",
            bio: "Tech expert passionate about innovation",
        },
        {
            id: 3,
            name: "Marcus Brown",
            avatar: "https://i.pravatar.cc/200?img=13",
            bio: "Award-winning designer with an eye for detail",
        },
        {
            id: 4,
            name: "Rachel Green",
            avatar: "https://i.pravatar.cc/200?img=14",
            bio: "Growth hacker with proven track record",
        }
    ]
};

// 5. Pricing Plans
export const pricingData = {
    title: "Pricing Plans",
    subtitle: "Tailored pricing plans designed for you",
    description: "All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.",
    pricingToggle: {
        monthly: "Pay Monthly",
        annual: "Pay Annual",
        saveBadge: "Save 25%",
    },
    plans: [
        {
            id: 1,
            name: "Basic",
            price: 19,
            annualPrice: 171, // (19 * 12) * 0.75
            period: "month",
            features: [
                "Timeline",
                "Basic Search",
                "Live chat Widget",
                "Email marketing",
                "Custom Forms",
                "Traffic analytics",
                "Basic Support"
            ],
            highlighted: false,
            cta: "Get Started",
            popular: false
        },
        {
            id: 2,
            name: "Team",
            price: 29,
            annualPrice: 261, // (29 * 12) * 0.75
            period: "month",
            features: [
                "Everything in basic",
                "Timeline With database",
                "Advanced search",
                "Marketing automation",
                "Advanced chatbot",
                "Campaign management",
                "Collaboration tools"
            ],
            highlighted: true,
            cta: "Get Started",
            popular: true
        },
        {
            id: 3,
            name: "Enterprise",
            price: 49,
            annualPrice: 441, // (49 * 12) * 0.75
            period: "month",
            features: [
                "Everything in Premium",
                "Timeline With database",
                "Fuzzy search",
                "A/B testing sandbox",
                "Custom permissions",
                "Social media automation",
                "White-label option",
            ],
            highlighted: false,
            cta: "Get Started",
            popular: false
        }
    ]
};

export const statsData = [
    {
        id: 1,
        value: '7.5k+',
        label: 'مستخدم سعيد',
        iconClass: 'fas fa-users',
    },
    {
        id: 2,
        value: '58k+',
        label: 'مشروع مكتمل',
        iconClass: 'fas fa-rocket',
    },
    {
        id: 3,
        value: '4.8/5',
        label: 'تقييم العملاء',
        iconClass: 'fas fa-star',
    },
    {
        id: 4,
        value: '100%',
        label: 'ضمان التشغيل',
        iconClass: 'fas fa-check-circle',
    },
];


// 6. FAQ
export const faqData = {
    title: "Frequently asked questions",
    description: "Broweso through these FAQs to find answers to commonty asked questions.",
    faqs: [
        {
            id: 1,
            question: "Do you charge for each upgrade?",
            answer: "Getting started is easy! Simply sign up for a free account, and you'll have access to our platform immediately. Our onboarding guide will walk you through the setup process step by step."
        },
        {
            id: 2,
            question: "Do I need to Purchase a License for eac Website?",
            answer: "A Regular License grants the buyer the right to use the purchased digital item (such as a WordPress theme, HTML template, or code snippet) to create one single End Product for themselves or for one clientWe accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers."
        },
        {
            id: 3,
            question: "What is exicnded license?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers."
        },
        {
            id: 4,
            question: "Whish license is applicble for SASS applicaion?",
            answer: "Yes! We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and ISO 27001 standards. Your data is stored in secure, redundant data centers."
        }
    ]
};

// 7. Contact Us
export const contactData = {
    title: "lets Work together",
    description: "Any question or remerk? Wnite us s message",
    contactInfo: [
        {
            id: 1,
            icon: "📧",
            title: "Email",
            value: "example@gmail.com",
            link: "mailto:hello@company.com"
        },
        {
            id: 2,
            icon: "📞",
            title: "Phone",
            value: "+1234568963",
            link: "tel:+15551234567"
        },
    ],
};
