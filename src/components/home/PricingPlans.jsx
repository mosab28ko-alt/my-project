import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingPlans = ({ data }) => {
    // حالة للتحكم في فترة الدفع (صحيح = شهري، خطأ = سنوي)
    const [isMonthly, setIsMonthly] = useState(true);

    // دالة للتعامل مع تغيير حالة مفتاح التبديل
    const handleToggle = () => {
        setIsMonthly(prev => !prev);
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
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

                    {/* ======================================================= */}
                    {/* 🌟 مفتاح التبديل (Toggle Switch) والأسعار */}
                    {/* ======================================================= */}
                    <div className="flex justify-center items-center my-10 space-x-4">
                        
                        {/* 1. نص 'Pay Monthly' */}
                        <span className={`text-base font-semibold transition-colors duration-300 ${isMonthly ? 'text-gray-900' : 'text-gray-500'}`}>
                            Pay Monthly
                        </span>

                        {/* 2. مفتاح التبديل الفعلي (Toggle Switch) */}
                        <label htmlFor="pricing-toggle" className="flex items-center cursor-pointer">
                            <div className="relative">
                                {/* Input Checkbox المخفي للتحكم في الحالة */}
                                <input
                                    type="checkbox"
                                    id="pricing-toggle"
                                    className="sr-only" 
                                    checked={!isMonthly} // checked = Pay Annual
                                    onChange={handleToggle}
                                />
                                {/* المسار الخلفي (Track) */}
                                <div className="block bg-gray-300 w-14 h-8 rounded-full transition duration-300"></div>
                                {/* الدائرة المتحركة (Dot) */}
                                <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition transform duration-300 ${!isMonthly ? 'translate-x-6 bg-indigo-600' : 'bg-white shadow'}`}></div>
                            </div>
                        </label>

                        {/* 3. نص 'Pay Annual' مع شارة التوفير (Save 25%) */}
                        <div className="flex items-center space-x-2">
                             <span className={`text-base font-semibold transition-colors duration-300 ${!isMonthly ? 'text-gray-900' : 'text-gray-500'}`}>
                                Pay Annual
                            </span>
                            
                            {/* شارة التوفير "Save 25%" */}
                            <div className="text-sm font-bold text-green-600 bg-green-100 py-1 px-3 rounded-full">
                                Save 25%
                            </div>
                        </div>
                    </div>
                    {/* ======================================================= */}
                </div>
                
                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {data.plans.map((plan) => (
                    <div
                        key={plan.id}
                        // تصميم البطاقة الثابت: نستخدم الأنماط الخاصة بالحالة غير المميزة (Basic)
                        className={`relative rounded-2xl p-8 transition-all duration-300 
                            bg-white text-gray-900 shadow-lg hover:shadow-2xl border border-gray-200
                        `}
                    >
                        
                        {/* Popular Badge... (يفترض أنه داخل خطة معينة، نتركه كما هو إن وجد) */}
                        
                        {/* العنوان: نثبت لون النص على اللون الأسود/الرمادي الداكن */}
                        <h3 className={`text-2xl font-bold mb-2 text-gray-900`}>
                            {plan.name}
                        </h3>
                        
                        {/* الوصف: نثبت لون النص على الرمادي المتوسط */}
                        <p className={`mb-6 text-gray-600`}>
                            {plan.description}
                        </p>

                        {/* Price - استخدام حالة isMonthly لتغيير السعر والفترة */}
                        <div className="mb-8">
                            <div className="flex items-baseline gap-2">
                                {/* السعر: نثبت لون النص على اللون الأسود/الرمادي الداكن */}
                                <span className={`text-5xl font-bold text-gray-900`}>
                                    {/* منطق عرض السعر: إذا كان شهرياً نستخدم price، وإذا كان سنوياً نستخدم annualPrice (أو نحسبه بخصم 25%) */}
                                    ${isMonthly ? plan.price : (plan.annualPrice || Math.round(plan.price * 12 * 0.75))} 
                                </span>
                                {/* الفترة: نثبت لون النص على الرمادي المتوسط */}
                                <span className={`text-gray-500`}>
                                    /{isMonthly ? 'month' : 'year'} 
                                </span>
                            </div>
                        </div>

                        {/* Features (قائمة الميزات) */}
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    {/* علامة (✓): نثبت لون علامة الصح على الأخضر العادي */}
                                    <span className={`text-xl text-green-500`}>
                                        ✓
                                    </span>
                                    {/* نص الميزة: نثبت لون النص على الرمادي الداكن */}
                                    <span className={`text-gray-700`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button (الزر) */}
                        <Link
                            to="/register"
                            // نستخدم الأنماط الخاصة بالزر غير المميز (Basic)
                            className={`block w-full py-4 rounded-lg font-bold text-center transition-all duration-300 transform hover:scale-105 
                                bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700
                            `}
                        >
                            {plan.cta}
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;