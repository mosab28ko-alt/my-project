import React, { memo, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import { PiTagThin } from "react-icons/pi";
import { AiOutlineClose, AiFillStar, AiOutlineStar, AiOutlineArrowRight } from "react-icons/ai";
import Footer from '../../../components/layout/Footer'

/** * 1. مكونات مساعدة
 */
const SummarySection = memo(({ title, children, className = "", style = {} }) => (
    <div className={`bg-white rounded-xl p-5 ${className}`} style={style}>
        {title && <h2 className="text-gray-400 text-[11px] font-black uppercase tracking-widest mb-4">{title}</h2>}
        {children}
    </div>
));

const PriceRow = memo(({ label, value, isGreen = false, isBold = false }) => (
    <div className={`flex justify-between text-sm ${isBold ? 'text-gray-800 font-black text-base mt-2 pt-4 border-t border-gray-50' : 'text-gray-500'}`}>
        <span>{label}</span>
        <span className={isGreen ? 'text-green-500 font-bold' : ''}>{value}</span>
    </div>
));


const CartItem = memo(({ item, onRemove, onUpdateQuantity }) => {
    const handleQtyChange = (e) => {
        const val = parseInt(e.target.value, 10);
        onUpdateQuantity(item.id, isNaN(val) || val < 1 ? 1 : val);
    };

    return (
        <div className="flex gap-4 p-5 relative group items-start border-b border-gray-100 last:border-0">
            <button 
                onClick={() => onRemove(item.id)}
                className="absolute top-5 right-5 text-gray-300 hover:text-red-500 transition-colors z-10 p-1"
                title="Remove Item"
            >
                <AiOutlineClose size={18} />
            </button>

            <div className="w-24 h-24 flex-shrink-0 bg-[#F9F9F9] rounded-lg overflow-hidden flex items-center justify-center p-2">
                <img 
                    src={item.image || "https://i.imgur.com/8pSUpY8.png"} 
                    alt={item.name} 
                    className="w-full h-full object-contain" 
                    loading="lazy"
                />
            </div>

            <div className="flex flex-col flex-grow">
                <h3 className="text-[15px] font-bold text-gray-700 leading-tight mb-1">{item.name}</h3>
                
                <div className="flex items-center gap-2 mb-2 text-[12px]">
                    <span className="text-gray-400">Sold by: <span className="text-indigo-500">{item.seller || 'Google'}</span></span>
                    <span className="bg-[#E8F9DF] text-[#71DD37] px-2 py-0.5 rounded text-[10px] font-bold">IN STOCK</span>
                </div>

                <div className="flex text-orange-400 gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                        i < (item.rating || 4) ? <AiFillStar key={i} size={14} /> : <AiOutlineStar key={i} size={14} className="text-gray-200"/>
                    ))}
                </div>

                <input 
                    type="number" 
                    value={item.quantity} 
                    min="1"
                    onChange={handleQtyChange}
                    className="w-16 h-8 border border-gray-200 rounded px-2 text-sm outline-none focus:border-indigo-500" 
                />
            </div>

            <div className="flex flex-col items-end justify-between self-stretch py-1 min-w-[100px]">
                <div className="flex items-center gap-1 mt-[15px]">
                    <span className="text-indigo-600 font-bold text-lg">${item.price}</span>
                    <span className="text-gray-300 text-sm">/</span>
                    <span className="text-gray-300 line-through text-sm">${item.oldPrice || (item.price + 50)}</span>
                </div>
                <button className="text-indigo-500 text-[11px] font-bold uppercase bg-[rgb(231,231,255)] h-[24px] w-[135px] rounded-[5px] hover:bg-indigo-100 transition-colors">
                    Move To Wishlist
                </button>
            </div>
        </div>
    );
});

/** * 3. الصفحة الرئيسية (Cart)
 */
const Cart = () => {
    const { cartItems: originalItems, cartTotal, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();
    
    // حالة للتحكم في ظهور قسم العروض (Available Offer)
    const [showOffer, setShowOffer] = useState(true);

    const handleRemove = useCallback((id) => removeFromCart(id), [removeFromCart]);
    const handleUpdate = useCallback((id, qty) => updateQuantity(id, qty), [updateQuantity]);

    const itemsToShow = useMemo(() => {
        return originalItems.length > 0 ? originalItems : [
            { id: 'demo-1', name: 'Google - Google Home - White', price: 299, oldPrice: 359, quantity: 1, seller: 'Google', rating: 4, image: 'https://i.imgur.com/8pSUpY8.png' },
            { id: 'demo-2', name: 'Apple iPhone 11 (64 GB, Black)', price: 899, oldPrice: 999, quantity: 1, seller: 'Apple', rating: 5, image: 'https://i.imgur.com/V7Y6X8K.png' }
        ];
    }, [originalItems]);

    return (
        <div className="min-h-screen bg-white font-sans p-6 antialiased">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
                
                <div className="flex-grow space-y-4">
                    {/* قسم العروض - تفعيل زر الإغلاق X المحوط باللون الأحمر */}
                    {showOffer && (
                        <div className="bg-[#E8F9DF] border border-[#d4f3c4] rounded-lg p-4 relative animate-in fade-in duration-300">
                            <div className="flex items-center gap-3 text-[#71DD37]">
                                <div className="bg-[#71DD37] text-white rounded-full p-1"><PiTagThin size={20}/></div>
                                <span className="font-bold text-sm">Available Offer</span>
                                
                                {/* زر X لإغلاق التنبيه */}
                                <button 
                                    onClick={() => setShowOffer(false)}
                                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <AiOutlineClose size={14}/>
                                </button>
                            </div>
                            <ul className="text-[12px] text-[#71DD37] mt-2 space-y-1 ml-9 font-medium">
                                <li>-0% Instant Discount on Bank of America Corp Bank Debit cards</li>
                                <li>-50% Cutback Voucher of up to $60 on PayPal transactions.</li>
                            </ul>
                        </div>
                    )}

                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-5 border-b border-gray-50">
                            <h2 className="font-bold text-gray-700 uppercase tracking-tight text-sm">
                              My Shopping Bag <span className="text-indigo-500 font-normal ml-1">({itemsToShow.length} Items)</span>
                            </h2>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {itemsToShow.map((item) => (
                                <CartItem 
                                    key={item.id} 
                                    item={item} 
                                    onRemove={handleRemove} 
                                    onUpdateQuantity={handleUpdate} 
                                />
                            ))}
                        </div>

                        <button className="w-full py-4 text-indigo-600 font-bold text-[11px] uppercase tracking-widest border-t border-gray-100 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 justify-around gap-[50%] cursor-pointer">
                            Add More Product From Wishlist <AiOutlineArrowRight size={14}/>
                        </button>
                    </div>
                </div>

                {/* الجزء الأيمن (ملخص السعر) */}
                <div className="w-full lg:w-80 space-y-4 border-[3px] border-[#f9fafb] rounded-[5px]">
                    <SummarySection title="Offer">
                        <div className="flex gap-2 h-10">
                            <input type="text" placeholder="Enter Promo Code" className="flex-grow border border-gray-200 rounded-lg px-4 text-xs outline-none bg-gray-50/50 focus:border-indigo-500" />
                            <button className="bg-indigo-50 text-indigo-600 px-4 rounded-lg text-[10px] font-black uppercase hover:bg-indigo-600 hover:text-white transition-all">Apply</button>
                        </div>
                    </SummarySection>

                    <SummarySection className="bg-[#F2F3F3]">
                        <h3 className="text-gray-800 font-bold text-[13px] mb-1">Buying gift for a loved one?</h3>
                        <p className="text-gray-500 text-[11px] mb-3 leading-relaxed">Gift wrap and personalized message on card, Only for $2.</p>
                        <button className="text-indigo-600 font-black text-[10px] uppercase hover:underline">Add a gift wrap</button>
                    </SummarySection>

                    <SummarySection title="Price Details">
                        <div className="space-y-3">
                            <PriceRow label="Bag Total" value={`$${cartTotal || 299}`} />
                            <PriceRow label="Coupon Discount" value={<button className="text-indigo-600 font-bold hover:underline">Apply Coupon</button>} />
                            <PriceRow label="Delivery Charges" value="FREE" isGreen />
                            <PriceRow label="Total" value={`$${cartTotal || 299}`} isBold />
                        </div>
                        <button 
                            onClick={() => navigate('/checkout/payment')} 
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-lg mt-6 shadow-lg transition-all text-[11px] uppercase"
                        >
                            Place Order
                        </button>
                    </SummarySection>
                </div>
            </div>
        </div>
        
    );
};

export default Cart;