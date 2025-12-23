import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';

// الأيقونات
import { MdLocalOffer, MdClose } from 'react-icons/md';

const Confirmation = () => {
    const { cartTotal } = useCart();
    const navigate = useNavigate();
    
    // الحالات (States) لتشغيل الأزرار
    const [activeTab, setActiveTab] = useState('card');
    const [showOffer, setShowOffer] = useState(true); // لإغلاق العرض
    const [saveCard, setSaveCard] = useState(false); // لمفتاح التبديل

    return (
        <div className="bg-[#fff] min-h-screen font-sans p-4 text-[#5d596c] ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* الجزء الأيسر: طرق الدفع */}
                <div className="lg:col-span-2">
                    {/* عرض العروض المتاحة - زر الإغلاق يعمل هنا */}
                    {showOffer && (
                        <div className="bg-[#e8fadf] border-0 rounded-lg p-4  relative flex items-start gap-3">
                            <MdLocalOffer className="text-[#71dd37] mt-1 text-xl" />
                            <div>
                                <h4 className="text-[#71dd37] font-bold text-sm mb-1">Available Offer</h4>
                                <ul className="text-[13px] text-[#71dd37]  space-y-1">
                                    <li>- 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards</li>
                                    <li>- 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA</li>
                                </ul>
                            </div>
                            <button 
                                onClick={() => setShowOffer(false)} 
                                className="absolute top-3 right-3 text-[#71dd37] opacity-50 hover:opacity-100 cursor-pointer"
                            >
                                <MdClose size={18} />
                            </button>
                        </div>
                    )}

                    {/* تبويبات طرق الدفع */}
                    <div className="bg-white rounded-lg  p-6 border-0">
                        <div className="flex flex-wrap gap-2 mb-8 border-0 pb-4 ">
                            {[
                                { id: 'card', label: 'Card' },
                                { id: 'cod', label: 'Cash On Delivery' },
                                { id: 'gift', label: 'Gift Card'}
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-[14px] font-medium transition-all cursor-pointer ${
                                        activeTab === tab.id 
                                        ? 'bg-[#7367f0] text-white shadow-md' 
                                        : 'bg-transparent text-[#6f6b7d] hover:bg-[#f1f0f2]'
                                    }`}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* نموذج البطاقة */}
                        {activeTab === 'card' && (
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 gap-4">
                                    <label className="block">
                                        <span className="text-[13px] font-medium text-[#5d596c]">Card Number</span>
                                        <input type="text" placeholder="1356 3215 6548 7898" className="mt-1 block w-4/5 border-[#dbdade] border rounded-md px-3 py-2 text-sm focus:border-[#7367f0] outline-none" />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="md:col-span-1">
                                        <span className="text-[13px] font-medium text-[#5d596c]">Name</span>
                                        <input type="text" placeholder="John Doe" className="mt-1  w-4/5 border-[#dbdade] border rounded-md px-3 py-2 text-sm outline-none" />
                                    </label>
                                    <label>
                                        <span className="text-[13px] font-medium text-[#5d596c]">Exp. Date</span>
                                        <input type="text" placeholder="MM/YY" className="mt-1  w-4/5  border-[#dbdade] border rounded-md px-3 py-2 text-sm outline-none" />
                                    </label>
                                    <label>
                                        <span className="text-[13px] font-medium text-[#5d596c]">CVV Code</span>
                                        <input type="password" placeholder="654" className="mt-1  w-4/5  border-[#dbdade] border rounded-md px-3 py-2 text-sm outline-none" />
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label htmlFor="save" className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            id="save" 
                                            className="sr-only peer" 
                                            checked={saveCard}
                                            onChange={() => setSaveCard(!saveCard)}
                                        />
                                        <div className="w-10 h-5 bg-[#dbdade] peer-focus:outline-none rounded-full peer 
                                            peer-checked:after:translate-x-full peer-checked:after:border-white 
                                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                            after:bg-white after:border-gray-300 after:border after:rounded-full 
                                            after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7367f0]">
                                        </div>
                                        <span className="ms-3 text-[13px] text-[#6f6b7d]">Save card for future billing?</span>
                                    </label>
                                </div>
                                <div className="flex gap-3 pt-4">
                                    <button type="submit" className="bg-[#7367f0] text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#675dd8] cursor-pointer">Save Changes</button>
                                    <button type="reset" onClick={() => setSaveCard(false)} className="bg-[#f1f0f2] text-[#8e8a94] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#e8e7ea] cursor-pointer">Reset</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* الجزء الأيمن: ملخص السعر */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-[#dbdade] overflow-hidden">
                        <div className="p-5 border-b border-[#f0eff1]">
                            <h4 className="text-[15px] font-semibold text-[#5d596c]">Price Details</h4>
                        </div>
                        <div className="p-5 space-y-3">
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6f6b7d]">Order Total</span>
                                <span className="font-medium">$1198.00</span>
                            </div>
                            <div className='flex justify-between text-[14px]'>
                                <span className="text-[#6f6b7d]">Delivery Charges</span>
                                <span className="font-medium">$5.00 </span>
                                <p className='p-[5px] bg-[rgb(232,250,223)] rounded-[5px] cursor-pointer text-[rgb(113,221,55)]'>FREE</p>
                            </div>
                        </div>

                        <div className="p-5 border-t border-[#f0eff1]">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[15px] font-bold">Total</span>
                                <span className="text-[18px] font-bold text-[#5d596c]">$1198.00</span>
                            </div>
                            
                            <div className="mb-6">
                                <p className="font-bold text-[#5d596c] text-[13px]">John Doe (Default)</p>
                                <p className="text-[13px] w-[48%]">4135 Parkway Street, Los Angeles, CA, 90017 Mobile: +1906568 2332.</p>
                            </div>

                            {/* الزر المطلوب توجيهه لآخر صفحة (Success) */}
                            <button 
                                onClick={() => navigate('/checkout/Address')}
                                className="w-full bg-[#7367f0] text-white py-2.5 rounded-md font-bold text-[15px] shadow-[0_2px_4px_rgba(115,103,240,0.4)] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#675dd8]"
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;