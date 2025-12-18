import React from 'react';
import { Outlet } from 'react-router-dom';
import { useCheckout } from '../hooks/useCheckout';
import Navbar from '../components/layout/Navbar'; 
import Footer from '../components/layout/Footer'
// 1. استيراد الأيقونات المطلوبة من React Icons
import { 
    AiOutlineShoppingCart, 
    AiOutlineHome, 
    AiOutlineCreditCard, 
    AiOutlineCheckCircle 
} from 'react-icons/ai'; 
import { BsCartCheck } from "react-icons/bs";
// يمكنك اختيار أي أيقونات أخرى تناسب التصميم، اخترت هذه كمثال

const CheckoutLayout = () => {
    const { currentStep } = useCheckout();

    // 2. تعديل مصفوفة steps لاستبدال 'number' بـ 'icon'
    const steps = [
        // ملاحظة: ما زلنا نستخدم 'number' للحالة المنطقية (currentStep) 
        // ولكن أضفنا خاصية 'IconComponent' لعرض الأيقونة
        { number: 1, label: 'Cart', IconComponent: BsCartCheck },
        { number: 2, label: 'Address', IconComponent: AiOutlineHome },
        { number: 3, label: 'Payment', IconComponent: AiOutlineCreditCard },
        { number: 4, label: 'Confirmation', IconComponent: AiOutlineCheckCircle },
    ];
    
    // لتبسيط التنسيقات وتطبيق Tailwind بشكل أفضل
    const isActive = (stepNumber) => currentStep >= stepNumber;
    const isCurrent = (stepNumber) => currentStep === stepNumber;

    return (
        <div className="checkout-layout min-h-screen bg-gray-50">
            
            <Navbar /> 
            
            {/* تم تبديل Inline styles هنا بتنسيقات Tailwind */}
            <div className="max-w-[1200px] mx-auto px-5 py-10 flex flex-col  ">
                <div className=''>
                {/* Steps Sidebar (تم تعديل التنسيقات لاستخدام Tailwind) */}
                <aside className="bg-white  rounded-[8px]"> 
                    <div className=" p-5 rounded-lg">      
                        {/* استخدام Flex لترتيب الخطوات أفقياً (للموبايل) وعمودياً (للسطح المكتب) */}
                        <div className="flex  justify-center gap-[14%]">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className={` items-center gap-2 transition-opacity duration-300
                                        ${isActive(step.number) ? 'opacity-100' : 'opacity-50'}`} 
                                >
                                    {/* 3. استبدال دائرة الرقم بالأيقونة */}
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300
                                            ${isActive(step.number) ? 'text-[rgb(112,115,255)]' : 'text-[rgb(112,115,255)]'}`}
                                    >
                                        <step.IconComponent size={1855} /> {/* <--- تم استخدام مكون الأيقونة هنا */}
                                    </div>
                                    
                                    <span 
                                        className={`hidden sm:block text-sm transition-all duration-300 
                                            ${isCurrent(step.number) ? 'font-bold text-indigo-700' : 'font-medium text-gray-600'}`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content (المحتوى الرئيسي) */}
                <main className="flex-1 border-t-2 border-gray-200">
                    <Outlet />
                </main>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default CheckoutLayout;