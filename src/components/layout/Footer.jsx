import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../public/hdsjh.png';
import { FaFacebookF, FaTwitter, FaGithub , FaGoogle } from "react-icons/fa";
const AppleIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 00-7.85 16.32c.5.58 1.05.9 1.63 1.05A6.9 6.9 0 0012 22a6.9 6.9 0 004.22-1.63c.58-.15 1.13-.47 1.63-1.05A10 10 0 0012 2zm1-16a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 013.5-3.5 3.5 3.5 0 013.5 3.5z"/>
    </svg>
);

const PlayStoreIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 00-8.66 4.97l6.59 3.8L12 12l2.07-1.23 6.59-3.8A10 10 0 0012 2zm-6.66 14.03l6.66 3.82 6.66-3.82L12 21.8l-6.66-5.77z"/>
    </svg>
);

const appStoreLink = 'https://www.apple.com/app-store/'; 
const googlePlayLink = 'https://play.google.com/store'; 


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
       
        <footer className="bg-gray-800 text-white py-10 rounded-t-[17px]">
            <div className="max-w-7xl mx-auto px-5">
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-8">

                  
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-3'>
                            <img src={logoImage} alt="MyApp Logo" className='w-8 h-8 rounded-md' />
                            <h3 className="text-xl font-bold">sneat</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Building amazing products for amazing people.
                        </p>
                        <div className=""> 
                            <label className="text-gray-400 text-sm font-medium block mb-2">
                                Subscribe to our newsletter
                            </label>
                            <form className="flex">
                                {/* حقل الإدخال - Input Field */}
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="w-full p-2.5 text-sm rounded-l-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {/* زر الاشتراك - Subscribe Button */}
                                <button 
                                    type="submit" 
                                    className="bg-blue-600 text-white p-2.5 text-sm font-semibold rounded-r-md hover:bg-blue-700 transition duration-200 whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Product Links */}
                    <div>
                        <h4 className="text-base font-bold mb-4">Product</h4>
                        <div className="flex flex-col gap-3"> {/* تم توحيد الـ gap هنا */}
                            <Link to="/pricing" className="text-gray-400 no-underline hover:text-white transition text-sm">Pricing</Link>
                            <Link to="/help-center" className="text-gray-400 no-underline hover:text-white transition text-sm">Help Center</Link>
                            <div className='flex items-center gap-2' >
                                <Link to="/maintenance" className="text-gray-400 no-underline hover:text-white transition text-sm">Maintenance</Link>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                                    New
                                </span>
                            </div>
                            <Link to="/coming-soon" className="text-gray-400 no-underline hover:text-white transition text-sm">Coming Soon</Link>
                        </div>
                    </div>
                    
                    {/* Company Links */}
                    <div>
                        <h4 className="text-base font-bold mb-4">Company</h4>
                        <div className="flex flex-col gap-3"> {/* تم توحيد الـ gap هنا */}
                            <a href="#" className="text-gray-400 no-underline hover:text-white transition text-sm">Page Builder</a>
                            <a href="#" className="text-gray-400 no-underline hover:text-white transition text-sm">Admin Dashboards</a>
                            <a href="#" className="text-gray-400 no-underline hover:text-white transition text-sm">UI Kits</a>
                            <a href="#" className="text-gray-400 no-underline hover:text-white transition text-sm">Illustrations</a> 
                        </div>
                    </div>
        
                    <div>
                        <h4 className="text-base font-bold mb-5">Download our app</h4>
                        <div className="flex flex-col gap-3">
                            {/* رابط متجر Apple */}
                            <a 
                                href={appStoreLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="h-[50px] w-[153px] flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 transition duration-200 p-2 rounded-md"
                            >
                                <AppleIcon />
                                <span>Download on the App Store</span>
                            </a>
                            
                            {/* رابط متجر Google Play */}
                            <a 
                                href={googlePlayLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="h-[50px] w-[153px] flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 transition duration-200 p-2 rounded-md"
                            >
                                <PlayStoreIcon />
                                <span>Get it on Google Play</span>
                            </a>
                        </div>
                    </div>
                    {/* ******************************************************************** */}
                </div>


                <div className="border-t border-gray-700 pt-5 mt-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    {/* جزء حقوق النشر */}
                    <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; {currentYear} ThemeSelection. Made With <span className="text-red-500">❤️</span> for a better web.</p>

                    {/* جزء الروابط الاجتماعية */}
                    <div className='order-1 md:order-2 flex gap-4 text-lg mr-[10%]'>
                        <a href="#" className="hover:text-gray-500 transition"><FaGithub/></a> {/* Github/Fake Icon */}
                        <a href="#" className="hover:text-blue-500 transition"><FaFacebookF/></a> {/* Facebook/Fake Icon */}
                        <a href="#" className="hover:text-blue-400 transition"><FaTwitter/></a> {/* Twitter/Fake Icon */}
                        <a href="#" className="hover:text-pink-500 transition"><FaGoogle/></a> {/* Google */}
                    </div>
                </div>

            </div>
        </footer>

    );

};

export default Footer;