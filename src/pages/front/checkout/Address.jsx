import React from 'react';
import { useNavigate } from 'react-router-dom';

// استيراد الأيقونات اللازمة
import { 
    MdOutlineLocationOn, 
    MdOutlineCreditCard, 
    MdOutlineDirectionsBoatFilled, 
    MdAccessTime 
} from 'react-icons/md';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    // بيانات الطلب - يفضل لاحقاً جلبها من الـ State أو Context
    const orderData = {
        orderId: "#833546132",
        email: "john.doe@example.com",
        date: "25/05/2023 13:25pm",
        shipping: {
            name: "John Doe",
            address: "4135 Parkway Street, Los Angeles, CA 90017, USA",
            mobile: "+1 123 456 7890"
        },
        billing: {
            name: "John Doe",
            address: "4135 Parkway Street, Los Angeles, CA 90017, USA",
            mobile: "+1 123 456 7890"
        },
        items: [
            {
                id: 1,
                name: "Google - Google Home - White",
                brand: "Google",
                price: 299.00,
                oldPrice: 359.00,
                image: "https://via.placeholder.com/50", // استبدلها برابط الصورة الحقيقي
                status: "In Stock"
            },
            {
                id: 2,
                name: "Apple iPhone 11 (64 GB, Black)",
                brand: "Apple",
                price: 899.00,
                oldPrice: 999.00,
                image: "https://via.placeholder.com/50",
                status: "In Stock"
            }
        ],
        summary: {
            subtotal: 1198.00,
            shippingFee: 0,
            total: 1198.00
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f7fa]   font-sans">
            <div className=" mx-auto space-y-6">
                
                {/* البطاقة الرئيسية للجزء العلوي */}
                <div className="bg-white rounded-lg shadow-sm border border-[#dbdade] p-6 md:p-12">
                    
                    {/* 1. Header: رسالة التأكيد */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-[#5d596c] mb-3">Thank You! 😇</h2>
                        <p className="text-[15px] font-medium text-[#6f6b7d]">
                            Your order <span className="text-[#7367f0] font-bold">{orderData.orderId}</span> has been placed!
                        </p>
                        <p className="text-[14px] text-[#6f6b7d] mt-4 max-w-2xl mx-auto leading-relaxed">
                            We sent an email to <span className="font-bold text-[#5d596c]">{orderData.email}</span> with your order confirmation and receipt. 
                            If the email hasn't arrived within two minutes, please check your spam folder.
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-1.5 text-[13px] text-[#a1a0ac]">
                            <MdAccessTime className="text-lg" /> Time placed: {orderData.date}
                        </div>
                    </div>

                    {/* 2. Info Grid: الشحن والفواتير */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-10 border border-[#dbdade] p-[2%] rounded-[5px]">
                        {/* Shipping */}
                        <div className="space-y-3">
                            <h4 className="flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider text-[#100f0f]">
                                <MdOutlineLocationOn className="text-lg text-[#100f0f]" /> Shipping
                            </h4>
                            <div className="text-[14px] text-[#6f6b7d] leading-relaxed ">
                                <p className="font-bold text-[#5d596c]">{orderData.shipping.name}</p>
                                <p className='w-[45%]'>{orderData.shipping.address}</p>
                                <p className="mt-2">{orderData.shipping.mobile}</p>
                            </div>
                        </div>
                        {/* Billing */}
                        <div className="space-y-3">
                            <h4 className="flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider text-[#100f0f]">
                                <MdOutlineCreditCard className="text-lg text-[#100f0f]" /> Billing Address
                            </h4>
                            <div className="text-[14px] text-[#6f6b7d] leading-relaxed">
                                <p className="font-bold text-[#5d596c]">{orderData.billing.name}</p>
                                <p className='w-[45%]'>{orderData.billing.address}</p>
                                <p className="mt-2">{orderData.billing.mobile}</p>
                            </div>
                        </div>

                        {/* Method */}
                        <div className="space-y-3">
                            <h4 className="flex items-center gap-2 font-bold text-[13px] uppercase tracking-wider text-[#100f0f]">
                                <MdOutlineDirectionsBoatFilled className="text-lg text-[#100f0f]" /> Shipping Method
                            </h4>
                            <div className="text-[14px] text-[#6f6b7d] leading-relaxed">
                                <p className="font-bold text-[#5d596c]">Preferred Method:</p>
                                <p>Standard Delivery</p>
                                <p>(Normally 3-4 business days)</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Products & Pricing: الجزء السفلي المدمج */}
                    <div className="border border-[#dbdade] rounded-lg overflow-hidden bg-white">
                        <div className="flex flex-col lg:flex-row">
                            
                            {/* قائمة المنتجات (اليسار) */}
                            <div className="flex-[1.8] border-b lg:border-b-0 lg:border-r border-[#dbdade]">
                                {orderData.items.map((item, index) => (
                                    <div key={item.id} className={`p-5 flex items-start gap-4 ${index !== orderData.items.length - 1 ? 'border-b border-[#dbdade]' : ''}`}>
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                                        <div className="flex-1">
                                            <h5 className="text-[15px] font-semibold text-[#5d596c] leading-snug">{item.name}</h5>
                                            <p className="text-[13px] text-[#a1a0ac]">Sold by: <span className="text-[#7367f0] font-medium">{item.brand}</span></p>
                                            <span className="inline-block mt-2 px-2.5 py-0.5 text-[11px] font-bold text-[#28c76f] bg-[#28c76f1a] rounded uppercase tracking-tighter">
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[15px] font-bold text-[#7367f0]">${item.price.toFixed(2)}</p>
                                            <p className="text-[13px] text-[#a1a0ac] line-through">${item.oldPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ملخص السعر (اليمين) */}
                            <div className="flex-1 bg-[#fcfcfd] p-6 flex flex-col justify-center">
                                <h4 className="text-[15px] font-bold text-[#5d596c] mb-4">Price Details</h4>
                                <div className="space-y-3 border-b border-[#dbdade] pb-4">
                                    <div className="flex justify-between text-[14px]">
                                        <span className="text-[#6f6b7d]">Order Total</span>
                                        <span className="font-semibold text-[#5d596c]">${orderData.summary.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-[14px]">
                                        <span className="text-[#6f6b7d]">Delivery Charges</span>
                                        <div className="flex gap-2 items-center">
                                            <span className="text-[#a1a0ac] line-through">$5.00</span>
                                            <span className="px-2 py-0.5 text-[10px] font-bold text-[#28c76f] bg-[#28c76f1a] rounded uppercase tracking-tighter">Free</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 flex justify-between items-center text-[16px] font-bold text-[#5d596c]">
                                    <span>Total</span>
                                    <span>${orderData.summary.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Action Button */}
                    <div className="flex justify-center mt-10">
                        <button 
                            onClick={() => navigate('/')}
                            className="bg-[#7367f0] text-white px-10 py-3 rounded-md font-bold text-[15px] shadow-[0_2px_10px_rgba(115,103,240,0.3)] hover:bg-[#675dd8] hover:shadow-[0_4px_14px_rgba(115,103,240,0.5)] transition-all uppercase tracking-wide"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;