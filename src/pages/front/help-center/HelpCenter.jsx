import React, { useState } from 'react';
// استيراد الأيقونات من react-icons
import {  RiSearchLine, RiRocketLine,  RiShoppingCartLine,  RiCustomerService2Line, RiArrowRightSLine, RiChat3Line, RiExternalLinkLine, RiGiftLine, RiFilePaper2Line } from 'react-icons/ri';
import { LiaPagerSolid } from "react-icons/lia";
import { BiBrush } from "react-icons/bi";
import { CiUnlock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer, HiOutlineLightBulb, HiOutlineUserGroup } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';


const HelpCenter = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

const categories = [
    { 
        title: 'Buying', 
        icon: <RiShoppingCartLine />, 
        links: ['What are Favourites?', 'How do I purchase an item?', 'How do I add or change my details?', 'How do refunds work?', 'Can I Get A Refund?', 'I\'m trying to find a specific item'],
        count: 10
    },
    { 
        title: 'Item Support', 
        icon: <RiCustomerService2Line />, 
        links: ['What is Item Support?', 'How to contact an author', 'Where is My Purchase Code?', 'Extend or renew Item Support', 'Item Support FAQ', 'Why has my item been removed?'],
        count: 14
    },
    { 
        title: 'Licenses', 
        icon: <RiFilePaper2Line />, 
        links: ['Can I use the same license for the...', 'How do licenses work for any plug-in...', 'I\'m making a test site - it\'s not for...', 'Which license do I need?', 'I want to make multiple end prod...', 'For logo what license do I need?'],
        count: 8
    },
    { 
        title: 'Template Kits', 
        icon: <BiBrush />, 
        links: ['Can I use the same license for the...', 'How do licenses work for any plug-in...', 'I\'m making a test site - it\'s not for...', 'Which license do I need?', 'I want to make multiple end prod...', 'For logo what license do I need?'],
        count: 5
    },
    { 
        title: 'Account & Password', 
        icon: < CiUnlock  />, 
        links: ['Can I use the same license for the...', 'How do licenses work for any plug-in...', 'I\'m making a test site - it\'s not for...', 'Which license do I need?', 'I want to make multiple end prod...', 'For logo what license do I need?'],
        count: 16
    },
    { 
    title: 'Account Settings', 
    icon: < IoPersonOutline  />, 
    links: ['Can I use the same license for the...', 'How do licenses work for any plug-in...', 'I\'m making a test site - it\'s not for...', 'Which license do I need?', 'I want to make multiple end prod...', 'For logo what license do I need?'],
    count: 12
    },
];

const popularArticles = [
    { 
        id: 1, 
        icon: <RiRocketLine />, 
        title: 'Getting Started', 
        desc: "Whether you're new or you're a power user, this article will...",
        url: "/articles/getting-started"
    },
    { 
        id: 2, 
        icon: <RiGiftLine />, 
        title: 'First Steps', 
        desc: "Are you a new customer wondering how to get started?",
        url: "/articles/getting-started"
    },
    { 
        id: 3, 
        icon: <LiaPagerSolid />, 
        title: 'Add External Content', 
        desc: "This article will show you how to expand the functionality of the App.",
        url: "/articles/getting-started"
    },
];
const keepLearning = [
        { 
        id: 1,
         title: "Blogging", 
         icon: <HiOutlineDesktopComputer />,
         desc: "Expert tips & tools to improve your website or online store using blog.",
        url:"/articles/getting-started"
        },
        { 
        id: 2,
         title: "Inspiration Center",
        icon: <HiOutlineLightBulb />, 
        desc: "Inspiration from experts to help you start and grow your big ideas.", 
        url: "/articles/getting-started"
            },
        { 
        id: 3, 
        title: "Community", 
        icon: <HiOutlineUserGroup />,
         desc: "A group of people living in the same place or having a particular interest.",
          url: "/articles/getting-started"
         }
    ];

    return (
        <div className="min-h-screen bg-[#FFF]">
            {/* Header Section - Hero */}

            <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-r from-[#e8eaf6] via-[#f3f4ff] to-[#fce4ec]">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <svg className="absolute left-0 bottom-0 w-64 h-64 text-indigo-200" viewBox="0 0 200 200" fill="currentColor">
                        <path d="M40,100 Q60,40 120,60 T180,140 Q120,180 60,160 T40,100" opacity="0.5"/>
                    </svg>
                    <svg className="absolute right-0 top-0 w-80 h-80 text-purple-100" viewBox="0 0 200 200" fill="currentColor">
                        <path d="M160,100 Q140,160 80,140 T20,60 Q80,20 140,40 T160,100" opacity="0.4"/>
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* النص العلوي باللون الأزرق الفاتح كما في الصورة */}
                    <h2 className="text-indigo-500 font-semibold mb-3">Hello, how can we help?</h2>
                    
                    {/* شريط البحث المطور */}
                    <div className="relative max-w-xl mx-auto shadow-sm">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <RiSearchLine className="text-gray-400 text-lg" />
                        </div>
                        <input 
                            type="text"
                            placeholder="Search"
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-sm transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* الكلمات الدلالية الشائعة أسفل البحث */}
                    <p className="text-gray-400 text-xs mt-4">
                        Common troubleshooting topics: <span className="text-gray-600 cursor-pointer hover:text-indigo-600">eCommerce</span>, <span className="text-gray-600 cursor-pointer hover:text-indigo-600">Blogging to payment</span>
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <main className="max-w-7xl mx-auto px-4 py-16">
                
               
                {/* Popular Articles Section */}
                <div className="mb-20">
                    {/* العنوان الرئيسي موسط وبدون أيقونة جانبية حسب الصورة */}
                    <h2 className="text-[1.625rem] font-medium text-gray-700 mb-10 text-center">
                        Popular Articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {popularArticles.map(article => (
                            <div key={article.id} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
                                
                                {/* حاوية الأيقونة - رمادي فاتح جداً ومربعة بزوايا بسيطة */}
                                <div className="w-16 h-16 bg-[#F5F5F9] text-gray-600 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-4xl leading-none">
                                        {article.icon}
                                    </span>
                                </div>

                                {/* نص العنوان */}
                                <h3 className="text-xl font-medium text-gray-800 mb-3">
                                    {article.title}
                                </h3>

                                {/* نص الوصف - لون رمادي باهت وحجم صغير */}
                                <p className="text-[#697a8d] text-sm leading-relaxed mb-6 max-w-[250px]">
                                    {article.desc}
                                </p>

                                {/* الزر - خلفية زرقاء شفافة خفيفة ونص أزرق */}
                                <button
                                onClick={() => window.location.href = article.url}
                                 className="px-5 py-1.5 bg-[#e7e7ff] text-[#696cff] text-xs font-medium rounded-md hover:bg-[#696cff] hover:text-white transition-colors duration-200 cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Knowledge Base Categories */}
            
                <div className="mb-20">
                    {/* العنوان الرئيسي للقسم */}
                    <h2 className="text-[1.625rem] font-medium text-[#566a7f] mb-10 text-center">
                        Knowledge Base
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-200">
                                
                                {/* الجزء العلوي: الأيقونة + العنوان بجانب بعضهما */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-[#f0efff] text-[#696cff] rounded-lg flex items-center justify-center text-xl">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-[1.125rem] font-medium text-[#566a7f]">{cat.title}</h3>
                                </div>

                                {/* قائمة الروابط مع الأسهم الرمادية الصغيرة */}
                                <ul className="space-y-3.5 mb-6">
                                    {cat.links.map((link, lIdx) => (
                                        <li key={lIdx} 
                                            className="flex items-center justify-between text-[#697a8d] hover:text-[#696cff] cursor-pointer group transition-colors"
                                        >
                                            <span className="text-[0.9375rem] truncate pr-4">
                                                {link}
                                            </span>
                                            {/* السهم الرمادي الذي يظهر في التصميم الأصلي */}
                                            <RiArrowRightSLine className="text-[#dbdade] group-hover:text-[#696cff] transition-all text-lg" />
                                        </li>
                                    ))}
                                </ul>

                                {/* الرابط السفلي "عرض الكل" */}
                                <button className="text-[#696cff] text-[0.875rem] font-medium flex items-center gap-1 hover:underline group">
                                    See all {cat.count} articles 
                                    <RiArrowRightSLine className="mt-0.5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Keep Learning Section  */}
                <div className="mb-24">
                    <h2 className="text-[1.625rem] font-medium text-[#566a7f] mb-10 text-center">Keep Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {keepLearning.map((item) => (
                            <div key={item.id} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="w-16 h-16 bg-[#F5F5F9] text-[#566a7f] rounded-lg flex items-center justify-center mb-6 text-3xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-[1.25rem] font-medium text-[#566a7f] mb-3">{item.title}</h3>
                                <p className="text-[#697a8d] text-[0.9375rem] leading-relaxed mb-6 max-w-[260px]">{item.desc}</p>
                                <button
                                onClick={() => window.location.href = article.url}
                                 className="px-5 py-1.5 bg-[#e7e7ff] text-[#696cff] text-xs font-medium rounded-md hover:bg-[#696cff] hover:text-white transition-colors duration-200 cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            


                {/* Still Need Help Section */}

                    <section className="py-20 px-4 bg-white text-center border-t border-gray-100">
                        <div className="max-w-2xl mx-auto">
                    
                            <h2 className="text-[1.625rem] font-medium text-[#566a7f] mb-3">
                                Still need help?
                            </h2>
                            
                        
                            <p className="text-[#697a8d] text-[0.9375rem] leading-relaxed mb-8">
                                Our specialists are always happy to help. <br className="hidden md:block" />
                                Contact us during standard business hours or email us 24/7, and we'll get back to you.
                            </p>

                    
                            <div className="flex flex-wrap justify-center gap-3">
                                <button className="bg-[#696cff] text-white px-5 py-2 rounded-md text-[0.9375rem] font-medium shadow-sm hover:bg-[#5f61e6] transition-all cursor-pointer">
                                    Visit Our Community
                                </button>
                                <button onClick={() => navigate('/help-center/contact')}
                                className="bg-[#696cff] text-white px-5 py-2 rounded-md text-[0.9375rem] font-medium shadow-sm hover:bg-[#5f61e6] transition-all cursor-pointer">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </section>
            </main>
        </div>
    );
};

export default HelpCenter;
