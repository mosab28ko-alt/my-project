import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import logoImage from '../../../public/hdsjh.png';
import { AiOutlineSun } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"; 

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

    const togglePagesDropdown = () => {
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
    };

    return (
        <nav className="bg-white shadow-md py-4 bg-blue-50">
            <div className="max-w-7xl mx-auto px-5 flex gap-[4%] items-center bg-[rgb(243,241,252)] rounded-[10px] border border-white relative h-[50px]">
                <div className='flex items-center gap-3'>
                    <img src={logoImage} alt="MyApp Logo" className='w-8 h-8 rounded-md' />
                    <h3 className="text-xl font-bold">sneat</h3>
                </div>

                {/* Navigation Links - تم تحديث الروابط هنا 👇 */}
                <div className="flex gap-8 items-center ">
                    <Link to="/" className="no-underline text-gray-700 font-medium hover:text-indigo-600 transition">
                        Home
                    </Link>
                    {/* هذه الروابط يفترض أن تقود إلى أقسام/صفحات معينة. 
                        سنفترض أنها تقود إلى أقسام داخل الصفحة الرئيسية (Landing) أو صفحات مخصصة. */}
                    <Link to="/features" className="no-underline text-gray-700 font-medium hover:text-indigo-600 transition">
                        Features
                    </Link>
                    <Link to="/team" className="no-underline text-gray-700 font-medium hover:text-indigo-600 transition">
                        Team
                    </Link>
                    <Link to="/faq" className="no-underline text-gray-700 font-medium hover:text-indigo-600 transition">
                        FAQ
                    </Link>
                    <Link to="/contact" className="no-underline text-gray-700 font-medium hover:text-indigo-600 transition">
                        Contact us
                    </Link>

                    {/* القائمة المنسدلة - Pages Dropdown */}
                    <div className="relative">
                        <div
                            onClick={togglePagesDropdown}
                            className="flex items-center cursor-pointer text-gray-700 font-medium hover:text-indigo-600 transition select-none"
                        >
                            pages
                            <RiArrowDropDownLine className={`text-2xl transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        
                        {/* محتوى القائمة المنسدلة - تم تحديث الروابط لتطابق FrontRoutes.jsx */}
                        {isPagesDropdownOpen && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 border border-gray-100">
                                {/* 1. Checkout: نشير إلى أول خطوة في عملية الدفع */}
                                <Link
                                    to="/cart" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                                    onClick={() => setIsPagesDropdownOpen(false)}
                                >
                                    Checkout (Cart)
                                </Link>
                                
                                {/* 2. Help Center: نشير إلى صفحة مركز المساعدة */}
                                <Link
                                    to="/help-center" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                                    onClick={() => setIsPagesDropdownOpen(false)}
                                >
                                    Help Center
                                </Link>
                                
                                {/* 3. Pricing: نشير إلى صفحة التسعير */}
                                <Link
                                    to="/pricing" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                                    onClick={() => setIsPagesDropdownOpen(false)}
                                >
                                    Pricing
                                </Link>
                                
                                {/* 4. Landing Page: نشير إلى الصفحة الرئيسية (Landing) */}
                                <Link
                                    to="/" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                                    onClick={() => setIsPagesDropdownOpen(false)}
                                >
                                    Landing Page
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex items-center absolute right-[2%] gap-[17px]'>
                    <AiOutlineSun />
                    {/* Auth Links */}
                    {isAuthenticated ? (
                        <>
                            {/* يمكن إضافة زر للـ Dashboard هنا */}
                            <Link 
                                to="/dashboard"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md no-underline font-medium hover:bg-indigo-700 transition"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer font-medium hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {/* زر Purchase Now يقود إلى صفحة التسجيل (Register) */}
                            <Link
                                to="/register" // <== تم تعديل المسار إلى /register
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md no-underline font-medium hover:bg-indigo-700 transition "
                            >
                                Purchase Now
                            </Link>
                            {/* يمكن إضافة زر Login هنا */}
                            <Link
                                to="/login"
                                className="px-4 py-2 text-indigo-600 rounded-md no-underline font-medium hover:text-indigo-800 transition "
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;