import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar'; 
import Footer from '../components/layout/Footer';

// الأيقونات الدقيقة من تصميم Sneat (Material Design Outlined)
import { 
    MdOutlineShoppingCart,  
    MdOutlineCreditCard, 
    MdOutlineInsertChartOutlined,
    MdChevronRight 
} from 'react-icons/md';
import {
     PiProjectorScreenChartLight
    } from "react-icons/pi";

const CheckoutLayout = () => {
    const location = useLocation();

    // تحديد رقم الخطوة بناءً على المسار الحالي (URL) لضمان دقة التلوين
    const getStepNumber = () => {
        if (location.pathname.includes('address')) return 4;
        if (location.pathname.includes('confirmation')) return 3;
        if (location.pathname.includes('payment')) return 2;
        return 1; // الافتراضي هو Cart
    };

    const currentStep = getStepNumber();

    const steps = [
        { number: 1, label: 'Cart', Icon: MdOutlineShoppingCart },
        { number: 2, label: 'payment', Icon: PiProjectorScreenChartLight },
        { number: 3, label: 'Confirmation', Icon: MdOutlineCreditCard },
        { number: 4, label: 'Address', Icon: MdOutlineInsertChartOutlined },
    ];

    return (
        <div className="min-h-screen bg-[#f8f7fa]">
            <Navbar /> 
            
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                
                {/* الجزء المحوط بالأحمر: Stepper Navbar */}
                <aside className="bg-white border border-[#dbdade] rounded-t-[6px]"> 
                    <div className="px-8 py-5">      
                        <div className="flex justify-between items-center max-w-4xl mx-auto">
                            {steps.map((step, index) => {
                                const isCompleted = currentStep > step.number;
                                const isActive = currentStep === step.number;
                                const isPassed = currentStep >= step.number;

                                return (
<React.Fragment key={step.number}>
    {/* الخطوة */}
    <div className="flex flex-col items-center gap-1.5 min-w-[80px]">
        
        {/* حاوية الأيقونة: جعلناها خلفية بيضاء دائماً */}
        <div
            className={`w-12 h-12 rounded-[6px] flex items-center justify-center transition-all duration-300 bg-white border-0
                ${isPassed 
                    ? 'text-[#7367f0] border-[#7367f0] ' // إذا مررنا بالخطوة: أيقونة زرقاء وحدود زرقاء
                    : 'text-[#a1a0ac] border-[#dbdade]'           // إذا لم نصل: أيقونة رمادية وحدود رمادية
                }`}
        >
            {/* حجم الأيقونة يفضل أن يكون بين 24-28 ليناسب الحاوية (50 كبير جداً على 12w) */}
            <step.Icon size={55} />
        </div>
        
        {/* النص */}
        <span 
            className={`text-[13px] font-medium transition-colors duration-300 
                ${isPassed ? 'text-[#7367f0]' : 'text-[#a1a0ac]'}`}>
            {step.label}
        </span>
    </div>

    {/* السهم الفاصل */}
    {index !== steps.length - 1 && (
        <div className={`mb-6 transition-colors duration-300 
            ${isCompleted ? 'text-[#7367f0]' : 'text-[#dbdade]'}`}>
            <MdChevronRight size={22} />
        </div>
    )}
</React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* المحتوى الرئيسي للمرحلة */}
                <main>
                    <Outlet />
                </main>
            </div>
            
            <Footer />
        </div>
    );
};

export default CheckoutLayout;