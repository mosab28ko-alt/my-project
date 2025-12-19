import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../../hooks/useCheckout';
import { useCart } from '../../../hooks/useCart';

// الأيقونات المطلوبة
import { FaCreditCard, FaMoneyBillWave, FaGift, FaCheckCircle } from 'react-icons/fa';
import { MdLocalOffer, MdClose } from 'react-icons/md';

const Confirmation = () => {
    const { cartTotal } = useCart();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('card');

    return (
        <div className="bg-[#f8f7fa] min-h-screen p-4 md:p-8 font-sans text-[#5d596c]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* الجزء الأيسر: طرق الدفع */}
                <div className="lg:col-span-2">
                    {/* عرض العروض المتاحة - Available Offer */}
                    <div className="bg-[#e8fadf] border border-[#71dd37] rounded-lg p-4 mb-6 relative flex items-start gap-3">
                        <MdLocalOffer className="text-[#71dd37] mt-1 text-xl" />
                        <div>
                            <h4 className="text-[#71dd37] font-bold text-sm mb-1">Available Offer</h4>
                            <ul className="text-[13px] text-[#5d596c] list-disc ml-4 space-y-1">
                                <li>- 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards</li>
                                <li>- 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA</li>
                            </ul>
                        </div>
                        <button className="absolute top-3 right-3 text-[#5d596c] opacity-50 hover:opacity-100">
                            <MdClose size={18} />
                        </button>
                    </div>

                    {/* تبويبات طرق الدفع */}
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#dbdade]">
                        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#dbdade] pb-4">
                            {[
                                { id: 'card', label: 'Card', icon: <FaCreditCard /> },
                                { id: 'cod', label: 'Cash On Delivery', icon: <FaMoneyBillWave /> },
                                { id: 'gift', label: 'Gift Card', icon: <FaGift /> }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-[14px] font-medium transition-all ${
                                        activeTab === tab.id 
                                        ? 'bg-[#7367f0] text-white shadow-md' 
                                        : 'bg-transparent text-[#6f6b7d] hover:bg-[#f1f0f2]'
                                    }`}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* نموذج البطاقة الائتمانية */}
                        {activeTab === 'card' && (
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 gap-4">
                                    <label className="block">
                                        <span className="text-[13px] font-medium text-[#5d596c]">Card Number</span>
                                        <input type="text" placeholder="1356 3215 6548 7898" className="mt-1 block w-full border-[#dbdade] border rounded-md px-3 py-2 text-sm focus:border-[#7367f0] focus:ring-1 focus:ring-[#7367f0] outline-none" />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <label className="md:col-span-1">
                                        <span className="text-[13px] font-medium text-[#5d596c]">Name</span>
                                        <input type="text" placeholder="John Doe" className="mt-1 block w-full border-[#dbdade] border rounded-md px-3 py-2 text-sm outline-none" />
                                    </label>
                                    <label>
                                        <span className="text-[13px] font-medium text-[#5d596c]">Exp. Date</span>
                                        <input type="text" placeholder="MM/YY" className="mt-1 block w-full border-[#dbdade] border rounded-md px-3 py-2 text-sm outline-none" />
                                    </label>
                                    <label>
                                        <span className="text-[13px] font-medium text-[#5d596c]">CVV Code</span>
                                        <input type="password" placeholder="654" className="mt-1 block w-full border-[#dbdade] border rounded-md px-3 py-2 text-sm outline-none" />
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="save" className="w-4 h-4 accent-[#7367f0]" />
                                    <label htmlFor="save" className="text-[13px] text-[#6f6b7d]">Save card for future billing?</label>
                                </div>
                                <div className="flex gap-3 pt-4">
                                    <button type="button" className="bg-[#7367f0] text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#675dd8]">Save Changes</button>
                                    <button type="reset" className="bg-[#f1f0f2] text-[#8e8a94] px-5 py-2 rounded-md text-sm font-medium hover:bg-[#e8e7ea]">Reset</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* الجزء الأيمن: ملخص السعر والعنوان المختار */}
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
                            <div className="flex justify-between text-[14px]">
                                <span className="text-[#6f6b7d]">Delivery Charges</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 line-through">$5.00</span>
                                    <span className="text-[#28c76f] bg-[#e2f6ed] px-2 py-0.5 rounded text-[12px] font-bold">FREE</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 border-t border-[#f0eff1] bg-[#fcfcfd]">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[15px] font-bold">Total</span>
                                <span className="text-[18px] font-bold text-[#5d596c]">$1198.00</span>
                            </div>
                            
                            {/* تفاصيل التوصيل المختارة */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[13px] font-bold text-[#5d596c]">Deliver to:</span>
                                    <span className="bg-[#ebe9fe] text-[#7367f0] text-[10px] px-2 py-0.5 rounded font-bold uppercase">Home</span>
                                </div>
                                <div className="text-[13px] text-[#6f6b7d] leading-relaxed">
                                    <p className="font-bold text-[#5d596c]">John Doe (Default)</p>
                                    <p>4135 Parkway Street, Los Angeles, CA, 90017.</p>
                                    <p>Mobile: +1 906 568 2332</p>
                                </div>
                                <button className="text-[#7367f0] text-[13px] font-bold mt-2 hover:underline">Change address</button>
                            </div>

                            <button 
                                onClick={() => navigate('/checkout/confirmation')}
                                className="w-full bg-[#7367f0] text-white py-2.5 rounded-md font-bold text-[15px] shadow-[0_2px_4px_rgba(115,103,240,0.4)] flex items-center justify-center gap-2"
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
