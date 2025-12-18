import React, { useState } from 'react';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs'; 
// 1. استيراد الصور المحلية
import heroImage from '../../../public/faq-hero-image.png'; // تأكد من المسار
import dashboardPreview from '../../../public/faq-dashboard-preview.png'; // تأكد من المسار


const FAQ = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
            <div className="max-w-6xl mx-auto"> {/* تم زيادة max-w ليتسع المحتوى الجانبي */}
                
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
                
                {/* 🌟 الحاوية الرئيسية للتصميم الجانبي (Hero & FAQ Items) 🌟 */}
                <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">
                    
                    {/* 1. ديف الصورة (Hero Image) - تم ترك مكانه فارغًا مؤقتًا في هذا التعديل للتركيز على الجزء السفلي */}
                    <div className="lg:w-5/12 flex-shrink-0 w-full mb-8 lg:mb-0 flex justify-center items-center">
                        {/* يمكنك إضافة بعض النصوص أو حزم الصورة هنا كما في التصميم الأصلي */}
                        <img 
                            src={heroImage} 
                            alt="FAQs Hero Image - Person working on a laptop" 
                            className="w-full max-w-sm h-auto rounded-xl  object-cover" 
                        />
                    </div>
                    
                    {/* 2. ديف الأسئلة الشائعة (FAQ Items) */}
                    <div className="lg:w-7/12 w-full space-y-4">
                        {data.faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-gray-900 text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    
                                    {/* Icon */}
                                    <span
                                        className={`text-2xl text-indigo-600 flex-shrink-0 transition-colors duration-300`}
                                    >
                                        {openIndex === index ? (
                                            <BsChevronCompactUp/>
                                        ) : (
                                            <BsChevronCompactDown />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 pt-2">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* 🚀 الحاوية الجديدة للتصميم الجانبي السفلي (Ready to Start & Contact) 🚀 */}
                {/* تم استخدام نفس مبدأ Flexbox لترتيب البطاقات جنبًا إلى جنب */}
                <div className="flex flex-col md:flex-row gap-8 mt-16 justify-between">

               
                    <div className="md:w-1/2 text-center">
                        <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Ready to Get Started?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Start yor project with a 14-day free trial
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                            >
                               Get Started
                            </a>
                        </div>
                    </div>

                    <div>
                                <img 
                                    src={dashboardPreview} 
                                    alt="Dashboard Preview" 
                                    className="w-full h-auto rounded-xl shadow-inner mb-6 border border-gray-100" 
                                />
                            </div>

                </div>
                {/* نهاية الحاوية الجديدة */}
            </div>
        </section>
    );
};

export default FAQ;