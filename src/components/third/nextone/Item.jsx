// Item.jsx
import React from "react";
import * as AiIcons from "react-icons/ai";

const getIcon = (name) => {
  return AiIcons[name] || null;
};

const BatchItem = ({ batch }) => {
  switch(batch.type) {
    case "batch1":
      return (
        <div className="bg-white  p-4 flex justify-between gap-2 w-[361.33px] h-[100px]">
      {batch.subBatches.map((sub) => {
       const Icon = sub.icon;
          return (
          <div key={sub.id}>
          {sub.h2 && <h2 className="text-lg font-semibold text-[18px] leading-[28px]">{sub.h2}</h2>}
          {sub.p && <p className="text-gray-600 text-sm text-[15px] leading-[22px]">{sub.p}</p>}
          {Icon && <Icon className="text-xl text-residential-600 " />}  
        {sub.description && <p className="text-sm text-gray-500">{sub.description}</p>}
    </div>
  );
})}

        </div>
      );
case "batch2":
  return (
    <div className="bg-white  p-4 flex items-center justify-between w-[361.33px] h-[100px]">
      {batch.subBatches.map((sub) => (
        <div key={sub.id} className="flex flex-col items-center justify-center gap-1">
          {sub.icon && (() => {
            const Icon = getIcon(sub.icon);
            return Icon ? <Icon size={24} className="text-green-500" /> : null;
          })()}
          {sub.imgSrc && <img src={sub.imgSrc} alt="" className="w-16 h-16 object-cover rounded" />}
          {sub.number && (
            <span className="text-[15px] leading-[22px] font-semibold">{sub.number}</span>
          )}
          {sub.p && (
            <p className="text-[13px] leading-[20px] text-[rgb(167,172,178)]">{sub.p}</p>
          )}
        </div>
      ))}
    </div>
  );
;
    case "batch3":
      return (
        <div className="bg-white  flex   justify-around gap-[10%] w-[361.33px] h-[42px]">
{batch.subBatches.map((sub) => (
  <div key={sub.id} className="flex gap-[6%] ">
    {sub.imgSrc && <img src={sub.imgSrc} className="w-[40px] h-[40px] object-cover rounded" />}
    {sub.content && (
      <div>
        {sub.content.h2 && <h2 className="text-lg font-semibold">{sub.content.h2}</h2>}
        {sub.content.p && <p className="text-[13px] leading-[20px] w-[210px] text-gray-500">{sub.content.p}</p>}
      </div>
    )}
    {sub.p && <span className="font-bold">{sub.p}</span>}
  </div>
))}

        </div>
      );
    default:
      return null;
  }
};

export default BatchItem;
