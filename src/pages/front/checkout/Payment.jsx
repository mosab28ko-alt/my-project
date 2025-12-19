import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../../hooks/useCheckout';
import { useCart } from '../../../hooks/useCart';

// استيراد الأيقونات المتنوعة من مكتبة react-icons
import { 
  FaHome, 
  FaBriefcase, 
  FaTruck, 
  FaBolt, 
  FaRocket, 
  FaPlus,
  FaCalendarAlt // أيقونة للتاريخ المتوقع
} from 'react-icons/fa';

import { 
  MdEdit, 
  MdDelete, 
  MdSmartphone, // أيقونة للموبايل
  MdLocationOn   // أيقونة للموقع
} from 'react-icons/md';

import { 
  AiOutlineCheckCircle // أيقونة تأكيد الطلب
} from 'react-icons/ai';

const Payment = () => {
    const { savePaymentMethod, completeOrder } = useCheckout();
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [selectedAddress, setSelectedAddress] = useState('home');
    const [shippingSpeed, setShippingSpeed] = useState('standard');

    const addresses = [
        {
            id: 'home',
            name: 'John Doe (Default)',
            tag: 'Home',
            icon: <FaHome className="text-blue-500" />,
            details: '405 Parkway Street, Los Angeles, CA, 90012.',
            mobile: '1234567890',
        },
        {
            id: 'office',
            name: 'John Doe',
            tag: 'Office',
            icon: <FaBriefcase className="text-green-500" />,
            details: '122, My Street, Kingston, New York 12401.',
            mobile: '1234567890',
        }
    ];

    const shippingOptions = [
        { id: 'standard', title: 'Standard', desc: '1 Week', price: 0, icon: <FaTruck className="text-blue-500" /> },
        { id: 'express', title: 'Express', desc: '4 days', price: 10, icon: <FaBolt className="text-yellow-500" /> },
        { id: 'overnight', title: 'Overnight', desc: '1 day', price: 15, icon: <FaRocket className="text-purple-500" /> },
    ];

    const currentShippingCost = shippingOptions.find(opt => opt.id === shippingSpeed).price;
    const finalTotal = cartTotal + currentShippingCost;

    const handlePlaceOrder = () => {
        savePaymentMethod({ addressId: selectedAddress, shippingMethod: shippingSpeed });
        completeOrder({ total: finalTotal, date: new Date().toISOString() });
        clearCart();
        navigate('/checkout/confirmation');
    };

    return (
        <div className="bg-[#f8f7fa] min-h-screen p-4 md:p-8 font-sans text-[#444050]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* الجزء الأيسر: العناوين والشحن */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* اختيار العنوان */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                            <MdLocationOn className="text-indigo-600" /> Select your preferable address
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {addresses.map((addr) => (
                                <div 
                                    key={addr.id}
                                    onClick={() => setSelectedAddress(addr.id)}
                                    className={`relative p-5 border rounded-xl cursor-pointer transition-all duration-300 ${
                                        selectedAddress === addr.id 
                                        ? 'border-indigo-500 bg-indigo-50/20 ring-1 ring-indigo-500' 
                                        : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedAddress === addr.id ? 'border-indigo-600' : 'border-gray-300'}`}>
                                                {selectedAddress === addr.id && <div className="w-2 h-2 bg-indigo-600 rounded-full" />}
                                            </div>
                                            <span className="font-bold text-sm">{addr.name}</span>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 ${
                                            addr.tag === 'Home' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                                        }`}>
                                            {addr.icon} {addr.tag}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2 leading-relaxed h-8 line-clamp-2">{addr.details}</p>
                                    <p className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                                        <MdSmartphone className="text-gray-400" /> {addr.mobile}
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-gray-50 flex gap-4 text-[11px] font-bold text-indigo-600 uppercase">
                                        <button className="flex items-center gap-1 hover:text-indigo-800"><MdEdit size={14}/> Edit</button>
                                        <button className="flex items-center gap-1 hover:text-red-600 text-red-400"><MdDelete size={14}/> Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-5 flex items-center gap-2 text-indigo-600 font-bold text-xs border-2 border-dashed border-indigo-100 w-full justify-center py-3 rounded-xl hover:bg-indigo-50 transition-all">
                            <FaPlus size={10} /> ADD NEW ADDRESS
                        </button>
                    </div>

                    {/* خيارات الشحن */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                            <FaTruck className="text-indigo-600" /> Choose Delivery Speed
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {shippingOptions.map((option) => (
                                <div 
                                    key={option.id}
                                    onClick={() => setShippingSpeed(option.id)}
                                    className={`p-5 border rounded-xl cursor-pointer text-center transition-all duration-300 ${
                                        shippingSpeed === option.id 
                                        ? 'border-indigo-500 bg-indigo-50/20 ring-1 ring-indigo-500' 
                                        : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <div className="flex justify-center text-3xl mb-3 transform transition-transform group-hover:scale-110">{option.icon}</div>
                                    <h4 className="font-bold text-sm mb-1">{option.title}</h4>
                                    <p className="text-[11px] text-gray-400 mb-3 font-medium">Get it in {option.desc}</p>
                                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${option.price === 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                                        {option.price === 0 ? 'FREE' : `$${option.price}.00`}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* الجزء الأيمن: ملخص السعر والمنتجات */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-8">
                        
                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <FaCalendarAlt className="text-indigo-500" /> Delivery Date
                            </h4>
                            <div className="text-xs text-gray-500 space-y-2">
                                <p className="font-medium text-gray-700">Estimated: 24 Dec 2025</p>
                                <p>Items will be shipped together.</p>
                            </div>
                        </div>

                        <div className="border-t border-b border-gray-50 py-4 mb-4 space-y-3">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price Details</h4>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Order Total</span>
                                <span className="font-semibold text-gray-800">${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Delivery Charges</span>
                                {currentShippingCost === 0 ? (
                                    <span className="text-green-500 font-bold">FREE</span>
                                ) : (
                                    <span className="font-semibold text-gray-800">${currentShippingCost.toFixed(2)}</span>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-gray-800">Total Amount</span>
                            <span className="font-black text-2xl text-indigo-600">${finalTotal.toFixed(2)}</span>
                        </div>

                        <button 
                            onClick={handlePlaceOrder}
                            className="group w-full bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 active:scale-95"
                        >
                            <AiOutlineCheckCircle size={20} className="group-hover:rotate-12 transition-transform" />
                            PLACE ORDER
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;