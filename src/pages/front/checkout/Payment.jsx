import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../../hooks/useCheckout';
import { useCart } from '../../../hooks/useCart';

import { FaHome, FaBriefcase } from 'react-icons/fa';
import { CiUser, CiStar } from "react-icons/ci";
import { BiCrown } from "react-icons/bi";

const Payment = () => {
    const { savePaymentMethod, completeOrder } = useCheckout();
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    // جعلنا العناوين حالة (State) لكي نتمكن من الحذف والإضافة
    const [addresses, setAddresses] = useState([
        {
            id: 'home',
            name: 'John Doe (Default)',
            tag: 'Home',
            icon: <FaHome className="text-blue-500" />,
            details: '4135 parkway Street, Los Angeles, CA,90017.',
            mobile: 'Mobile:1234567890 Cash / Card on delivery available ',
        },
        {
            id: 'office',
            name: 'John Doe',
            tag: 'Office',
            icon: <FaBriefcase className="text-green-500" />,
            details: '123, My Street, Kingston, New York 12401.',
            mobile: 'Mobile:1234567890 Cash / Card on delivery available',
        }
    ]);

    const [selectedAddress, setSelectedAddress] = useState('home');
    const [shippingSpeed, setShippingSpeed] = useState('standard');

    const shippingOptions = [
        { id: 'standard', title: 'Standard', desc: '1 Week', price: 0, icon: <CiUser className="text-blue-500" /> },
        { id: 'express', title: 'Express', desc: '4 days', price: 10, icon: <CiStar className="text-black-500" /> },
        { id: 'overnight', title: 'Overnight', desc: '1 day', price: 15, icon: <BiCrown className="text-black-500" /> },
    ];

    const cartItems = [
        { id: 1, name: "Google Home - White", deliveryDate: "18th Nov 2021" },
        { id: 2, name: "Apple iPhone 11 (64GB, Black)", deliveryDate: "20th Nov 2021" },
    ];

    // وظيفة حذف العنوان
    const handleRemoveAddress = (e, id) => {
        e.stopPropagation(); // لمنع تفعيل اختيار العنوان عند الضغط على حذف
        const updatedAddresses = addresses.filter(addr => addr.id !== id);
        setAddresses(updatedAddresses);
        if (selectedAddress === id && updatedAddresses.length > 0) {
            setSelectedAddress(updatedAddresses[0].id);
        }
    };

    // وظيفة إضافة عنوان جديد (مثال)
    const handleAddNewAddress = () => {
        const newAddr = {
            id: Date.now().toString(),
            name: 'New Address',
            tag: 'Other',
            icon: <CiUser className="text-purple-500" />,
            details: 'New Location Details Street, City, 10001.',
            mobile: 'Mobile: 0000000000',
        };
        setAddresses([...addresses, newAddr]);
    };

    const currentShippingCost = shippingOptions.find(opt => opt.id === shippingSpeed).price;
    const finalTotal = cartTotal + currentShippingCost;

    const handlePlaceOrder = () => {
        savePaymentMethod({ addressId: selectedAddress, shippingMethod: shippingSpeed });
        completeOrder({ total: finalTotal, date: new Date().toISOString() });
        clearCart();
        navigate('/checkout/confirmation');
    };

    return (
        <div className="bg-white min-h-screen font-sans text-[#444050]">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 space-y-6">
                    {/* اختيار العنوان */}
                    <div className="bg-white p-6 rounded-lg border-0 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                            Select your preferable address
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
                                           {addr.tag}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{addr.details}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{addr.mobile}</p>
                                    
                                    <div className="mt-4 pt-3 border-t border-gray-50 flex gap-4 text-[11px] font-bold text-indigo-600 uppercase">
                                        <button className="flex items-center gap-1 hover:text-indigo-800" onClick={(e) => e.stopPropagation()}>Edit</button>
                                        <button 
                                            className="flex items-center gap-1 hover:text-red-600" 
                                            onClick={(e) => handleRemoveAddress(e, addr.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={handleAddNewAddress}
                            className="mt-5 flex items-center gap-2 text-indigo-600 font-bold text-xs border-2 border-dashed border-indigo-100 justify-center py-3 rounded-xl hover:bg-indigo-50 transition-all bg-[rgb(231,231,255)] w-full md:w-[23%]"
                        >
                            ADD NEW ADDRESS
                        </button>
                    </div>

                    {/* خيارات الشحن */}
                <div className="bg-white p-6 rounded-lg border-0">
                    <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                        Choose Delivery Speed
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {shippingOptions.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setShippingSpeed(option.id)}
                                className={`relative p-5 border rounded-xl cursor-pointer text-center transition-all duration-300 ${
                                    shippingSpeed === option.id
                                        ? 'border-indigo-500 bg-white ring-1 ring-indigo-500'
                                        : 'border-gray-200 hover:border-indigo-200'
                                }`}
                            >
                                {/* Badge (Free / Price) */}
                                <div className="absolute top-3 right-3">
                                    <span className={`text-[11px] font-bold px-2 py-1 rounded-md ${
                                        option.price === 0 
                                        ? 'bg-green-100 text-green-600' 
                                        : 'bg-gray-100 text-gray-500'
                                    }`}>
                                        {option.price === 0 ? 'Free' : `$${option.price}`}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="flex justify-center text-3xl mb-3 text-indigo-600">
                                    {option.icon}
                                </div>

                                {/* Content */}
                                <h4 className="font-bold text-gray-800 mb-1">{option.title}</h4>
                                <p className="text-[12px] text-gray-500 mb-4">Get your product in {option.desc}</p>

                                {/* Custom Radio Circle */}
                                <div className="flex justify-center mt-2">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                        shippingSpeed === option.id 
                                        ? 'border-indigo-500 bg-indigo-500' // الخلفية زرقاء عند التحديد
                                        : 'border-gray-300 bg-white'
                                    }`}>
                                        {/* النقطة البيضاء الداخلية */}
                                        <div className={`w-2 h-2 rounded-full bg-white transition-opacity ${
                                            shippingSpeed === option.id ? 'opacity-100' : 'opacity-0'
                                        }`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>

                {/* الجزء الأيمن */}
                <div className="lg:col-span-1 space-y-6 mt-[11%]">
                    <div className="bg-white pt-[30px] px-[30px] pb-6 rounded-2xl shadow-sm border border-gray-100 top-8">
                        <div className="mb-6 rounded-[9px] border p-4 border-gray-100">
                            <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-[0.2em]">
                                Estimated Delivery Date
                            </h4>
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="group border-l-2 border-transparent hover:border-indigo-500 pl-3 transition-all">
                                        <p className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition-colors">
                                            {item.name}
                                        </p>
                                        <p className="text-[11px] text-gray-400">{item.deliveryDate}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-b border-gray-50 py-5 my-6 space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price Details</h4>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Order Total</span>
                                <span className="font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Delivery Charges</span>
                                {currentShippingCost === 0 ? (
                                    <span className="text-green-500 font-bold bg-green-50 px-2 rounded">FREE</span>
                                ) : (
                                    <span className="font-bold text-gray-800">${currentShippingCost.toFixed(2)}</span>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between items-end mb-8">
                            <span className="text-sm font-bold text-gray-800">Total Amount</span>
                            <span className="font-black text-3xl text-indigo-600">${finalTotal.toFixed(2)}</span>
                        </div>

  
                    </div>
                                          <button 
                            onClick={handlePlaceOrder}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 active:scale-[0.98] transform"
                        >
                            <span className="tracking-wide">PLACE ORDER</span>
                        </button>
                </div>

            </div>
        </div>
    );
};

export default Payment;