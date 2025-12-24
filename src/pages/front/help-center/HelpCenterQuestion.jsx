import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine, RiInformationLine } from 'react-icons/ri';

const HelpCenterQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // روابط القائمة الجانبية كما تظهر في التصميم
    const sideLinks = [
        "Template Kits",
        "How to add product in cart?",
        "How to use the template in WordPress?",
        "Where is My Purchase Code?",
        "How to contact an author",
        "Which license do I need?"
    ];

    return (
        <div className="min-h-screen bg-[#FFF] pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                
                {/* 1. Breadcrumbs - المسار العلوي */}
                <nav className="flex items-center gap-2 text-[0.9375rem] mb-6 text-[#697a8d]">
                    <span className="cursor-pointer hover:text-[#696cff]" onClick={() => navigate('/help-center')}>Help Center</span>
                    <RiArrowRightSLine className="text-gray-400" />
                    <span className="cursor-pointer hover:text-[#696cff]">Buying and Item Support</span>
                    <RiArrowRightSLine className="text-gray-400" />
                    <span className="text-[#566a7f] font-medium">Template Kits</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    


                    {/* 3. Main Content - المحتوى الرئيسي (Right Side) */}
                    <main className="lg:col-span-8">
                        <div className="bg-white rounded-xl p-6 md:p-8">
                            
                            {/* العنوان الفرعي والحالة */}
                            <div className="flex items-center gap-2 text-sm text-[#697a8d] mb-4">
                                <span className="p-1 bg-[#e7e7ff] text-[#696cff] rounded-md">
                                    <RiInformationLine size={20} />
                                </span>
                                <span>1 week ago • Updated</span>
                            </div>

                            {/* العنوان الرئيسي للمقال */}
                            <h1 className="text-[1.625rem] font-semibold text-[#566a7f] mb-6 leading-tight">
                                {id === 'contact' ? 'How to contact us?' : 'How to add product in cart?'}
                            </h1>

                            {/* محتوى المقال مع التنسيق الاحترافي */}
                            <div className="prose prose-slate max-w-none text-[#697a8d] leading-relaxed space-y-6">
                                <p className="text-[0.9375rem]">
                                    If you’re after only one item, simply choose the ‘Add to Cart’ option on the item page. This will take you directly to Checkout. 
                                </p>
                                
                                <p className="text-[0.9375rem]">
                                    If you want several items, use the ‘Add to Cart’ button and then choose ‘Keep Browsing’ to continue shopping or ‘Checkout’ to finalize your purchase.
                                </p>

                                {/* صورة المقال كما تظهر في Figma */}
                                <div className="rounded-lg overflow-hidden border border-[#dbdade] my-8 shadow-sm">
                                    <img 
                                        src="/foto.png" 
                                        alt="Help content"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <p className="text-[0.9375rem]">
                                    As soon as you add an item to your cart, you can view your cart at any time by clicking on the shopping cart icon at the top right side of the page.
                                </p>

                                {/* صورة ثانية توضيحية */}
                                <div className="rounded-lg overflow-hidden border border-[#dbdade] my-8 shadow-sm">
                                    <img 
                                        src="/uxll.png" 
                                        alt="Help content"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* 2. Sidebar - القائمة الجانبية (Left Side) */}
<aside className="lg:col-span-4">
    <div className="bg-white rounded-xl p-5 ">
        
        {/* إضافة صندوق البحث هنا */}
        <div className="relative mb-5">
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white border border-[#dbdade] rounded-md py-2 px-4 focus:outline-none focus:border-[#696cff] text-[0.9375rem]"
            />
        </div>

        <h4 className="text-[1.125rem] font-medium text-[#566a7f] mb-4">Articles in this section</h4>
        <ul className="space-y-1">
            {sideLinks.map((link, index) => (
                <li key={index} className={`group flex items-center justify-between p-2 rounded-md cursor-pointer transition-all ${index === 1 ? 'bg-[#f0efff] text-[#696cff]' : 'hover:bg-[#f5f5f9] text-[#697a8d]'}`}>
                    <span className="text-[0.9375rem] truncate">{link}</span>
                    <RiArrowRightSLine className={`text-lg transition-transform group-hover:translate-x-1 ${index === 1 ? 'text-[#696cff]' : 'text-[#dbdade]'}`} />
                </li>
            ))}
        </ul>
    </div>
</aside>

                </div>
            </div>
        </div>
    );
};

export default HelpCenterQuestion;