import React, { useState } from 'react';
import { 
  RiCheckboxCircleFill, 
  RiCloseLine, 
  RiAddLine, 
  RiSubtractLine,
  RiBox3Line, 
  RiWallet2Line, 
  RiBriefcaseLine 
} from 'react-icons/ri';
import { 
    BsChevronCompactUp,
    BsChevronCompactDown 
 } from "react-icons/bs";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // --- دالة تشغيل الأزرار ---
  const handleSelectPlan = (planName) => {
    alert(`Selected Plan: ${planName}`);
    // هنا يمكنك توجيه المستخدم لصفحة الدفع أو التسجيل
  };

  const pricingPlans = [
    {
      title: 'Basic',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'A simple start for everyone',
      features: ['100 responses a month', 'Unlimited forms and surveys', 'Unlimited fields', 'Basic form creation tools', 'Up to 2 subdomains'],
      buttonText: 'Your Current Plan',
      popular: false,
      icon: <RiBox3Line size={38} className="text-[#697a8d]" />,
      btnClass: 'bg-[#e8fadf] text-[#71dd37] hover:bg-[#71dd37] hover:text-white'
    },
    {
      title: 'Standard',
      monthlyPrice: 49,
      yearlyPrice: 440,
      description: 'For small to medium businesses',
      features: ['Unlimited responses', 'Unlimited forms and surveys', 'Instagram profile page', 'Google Docs integration', 'Custom "Thank you" page'],
      buttonText: 'Upgrade',
      popular: true,
      icon: <RiWallet2Line size={38} className="text-[#696cff]" />,
      btnClass: 'bg-[#696cff] text-white hover:bg-[#5f61e6] shadow-md shadow-[#696cff]/30'
    },
    {
      title: 'Enterprise',
      monthlyPrice: 99,
      yearlyPrice: 890,
      description: 'Solution for big organizations',
      features: ['PayPal payments', 'Logic Jumps', 'File upload with 5GB storage', 'Custom domain support', 'Stripe integration'],
      buttonText: 'Upgrade',
      popular: false,
      icon: <RiBriefcaseLine size={38} className="text-[#697a8d]" />,
      btnClass: 'bg-[#f0efff] text-[#696cff] hover:bg-[#696cff] hover:text-white'
    }
  ];

const faqData = [
  { 
    q: "What counts towards the 100 responses limit?", 
    a: "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet." 
  },
  { 
    q: "How do you process payments?", 
    a: "We use secure payment gateways to process all transactions. Your data is encrypted and never stored on our servers." 
  },
  { 
    q: "Do you have a money-back guarantee?", 
    a: "Yes, we offer a 48-hour money-back guarantee if you are not satisfied with our services." 
  },
  { 
    q: "I have more questions. Where can I get help?", 
    a: "You can contact our support team through the help center or via email for any further assistance." 
  }
];

  return (
    <div className="bg-[#F5F5F9] min-h-screen py-20 px-4 font-sans text-[#566a7f]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header & Toggle --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#566a7f]">Pricing Plans</h2>
          <p className="text-[#697a8d] max-w-lg mx-auto mb-8 text-[0.9375rem]">
            All plans include 40+ advanced tools and features to boost your product. 
            Choose the best plan to fit your needs.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-[#696cff]' : 'text-[#a1acb8]'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-11 h-5 bg-[#696cff] rounded-full relative p-1 transition-all"
            >
              <div className={`w-3 h-3 bg-white rounded-full transition-all shadow-sm ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isYearly ? 'text-[#696cff]' : 'text-[#a1acb8]'}`}>Annually</span>
              <span className="bg-[#e7e7ff] text-[#696cff] text-[10px] px-2 py-0.5 rounded font-bold uppercase">Save up to 10%</span>
            </div>
          </div>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-start">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 border transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-[#696cff] relative ring-1 ring-[#696cff]/10 z-10' : 'border-[#dbdade]'
              }`}
            >
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6 bg-[#f5f5f9] rounded-2xl flex items-center justify-center rounded-full">
                   {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-[#566a7f] mb-1">{plan.title}</h3>
                <div className="mt-6 flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#696cff]">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 min-h-[220px]">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#697a8d] text-[0.875rem]">
                    <RiCheckboxCircleFill className="text-[#696cff] text-lg opacity-40 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectPlan(plan.title)}
                className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all duration-200 uppercase tracking-wide active:scale-95 ${plan.btnClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* --- Section الجدول: حدود أفقية فقط - الأزرار الآن تعمل --- */}
        <div className="mt-32">
          <div className="text-center mb-10">
             <h3 className="text-2xl font-bold text-[#566a7f] mb-2 tracking-tight">Pick a plan that works best for you</h3>
             <p className="text-[#697a8d] text-sm font-medium">Stay cool, we have a 48-hour money-back guarantee!</p>
          </div>

          <div className="bg-white rounded-xl border border-[#dbdade] shadow-sm overflow-hidden  mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#dbdade]">
                  <th className="p-6 text-[13px] font-bold uppercase tracking-widest text-[#566a7f] w-2/5">Features</th>
                  <th className="p-6 text-center">
                    <span className="text-[13px] font-bold uppercase text-[#566a7f]">Starter</span>
                    <br/><span className="text-[12px] font-normal text-[#a1acb8] capitalize">Free</span>
                  </th>
                  <th className="p-6 text-center bg-[#f8f8f9]/50">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-[13px] font-bold uppercase text-[#566a7f]">Pro</span>
                      <RiCheckboxCircleFill className="text-[#696cff] text-xs"/>
                    </div>
                    <span className="text-[12px] font-normal text-[#a1acb8] capitalize">$7.5/month</span>
                  </th>
                  <th className="p-6 text-center">
                    <span className="text-[13px] font-bold uppercase text-[#566a7f]">Enterprise</span>
                    <br/><span className="text-[12px] font-normal text-[#a1acb8] capitalize">$16/month</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dbdade]">
                <ComparisonRow label="14-days free trial" starter={true} pro={true} enterprise={true} />
                <ComparisonRow label="Product Support" starter={false} pro={true} enterprise={true} />
                <ComparisonRow label="Email Support" starter={false} pro="Add-On-Available" enterprise={true} />
                <ComparisonRow label="Integrations" starter={false} pro={true} enterprise={true} />
                <ComparisonRow label="Removal of Front branding" starter={false} pro="Add-On-Available" enterprise={true} />
                <ComparisonRow label="Active maintenance & support" starter={false} pro={false} enterprise={true} />
                <ComparisonRow label="Data storage for 365 days" starter={false} pro={false} enterprise={true} />
                
                {/* سطر الأزرار السفلي - مضاف إليه onClick */}
                <tr className="bg-white">
                  <td className="p-6"></td>
                  <td className="p-6 text-center">
                    <button 
                      onClick={() => handleSelectPlan('Starter')}
                      className="text-[#696cff] bg-[#e7e7ff] px-5 py-2 rounded-lg text-xs font-bold uppercase hover:bg-[#696cff] hover:text-white transition-all active:scale-95"
                    >
                      Choose Plan
                    </button>
                  </td>
                  <td className="p-6 text-center bg-[#f8f8f9]/50">
                    <button 
                      onClick={() => handleSelectPlan('Pro')}
                      className="text-white bg-[#696cff] px-5 py-2 rounded-lg text-xs font-bold uppercase shadow-md shadow-[#696cff]/30 active:scale-95"
                    >
                      Choose Plan
                    </button>
                  </td>
                  <td className="p-6 text-center">
                    <button 
                      onClick={() => handleSelectPlan('Enterprise')}
                      className="text-[#696cff] bg-[#e7e7ff] px-5 py-2 rounded-lg text-xs font-bold uppercase hover:bg-[#696cff] hover:text-white transition-all active:scale-95"
                    >
                      Choose Plan
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="mt-32 max-w-3xl mx-auto pb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#566a7f]">FAQ's</h3>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white border border-[#dbdade] rounded-lg overflow-hidden transition-all duration-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className={`w-full p-4 flex items-center justify-between text-left font-semibold text-[0.9375rem] transition-colors ${openFaq === i ? 'text-[#696cff]' : 'text-[#566a7f] hover:text-[#696cff]'}`}
                >
                  {faq.q}
                  {openFaq === i ? <BsChevronCompactUp /> : <BsChevronCompactDown   />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-[0.875rem] text-[#697a8d] animate-fade-in border-t border-[#f5f5f9] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const ComparisonRow = ({ label, starter, pro, enterprise }) => {
  const renderIcon = (status) => {
    if (status === true) return (
      <div className="w-5 h-5 bg-[#e7e7ff] rounded-full flex items-center justify-center mx-auto">
        <RiCheckboxCircleFill className="text-[#696cff] text-[18px]" />
      </div>
    );
    if (status === false) return (
      <div className="w-5 h-5 bg-[#f5f5f9] rounded-full flex items-center justify-center mx-auto">
        <RiCloseLine className="text-[#a1acb8] text-[14px]" />
      </div>
    );
    if (status === "Add-On-Available") return (
      <span className="bg-[#e7e7ff] text-[#696cff] text-[10px] px-2 py-1 rounded font-bold uppercase tracking-tighter">Add-On-Available</span>
    );
  };

  return (
    <tr className="hover:bg-[#f5f5f9]/40 transition-colors">
      <td className="p-5 text-[14px] font-normal text-[#697a8d]">{label}</td>
      <td className="p-5 text-center">{renderIcon(starter)}</td>
      <td className="p-5 text-center bg-[#f8f8f9]/30">{renderIcon(pro)}</td>
      <td className="p-5 text-center">{renderIcon(enterprise)}</td>
    </tr>
  );
};

export default PricingPage;