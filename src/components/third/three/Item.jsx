// Item.jsx
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const getIcon = (iconName) => {
  if (!iconName) return null;
  return AiIcons[iconName] || BsIcons[iconName] || null;
};

const BatchItem = ({ batch }) => {
  switch(batch.type) {
    case "batch1":
      return (
        <div className="bg-white p-4 rounded-lg flex items-center justify-between">
          {batch.subBatches.map(sub => {
            const Icon = getIcon(sub.icon);
            return (
              <div key={sub.id} className="flex items-center gap-2 w-[317px] h-[28px] justify-between">
                {sub.h2 && <h2 className="text-lg font-semibold">{sub.h2}</h2>}
                {Icon && <Icon size={20} className="text-500"/>}
              </div>
            );
          })}
        </div>
      );

    case "batch3":
      return (
        <div className="bg-white  flex   justify-around gap-[10%] w-[361.33px] h-[42px]">
{batch.subBatches.map((sub) => (
  <div key={sub.id} className="flex gap-[6%] ">
    {sub.imgSrc && <img src={sub.imgSrc} className="w-[40px] h-[40px] object-cover rounded" />}
    {sub.content && (
      <div>
        {sub.content.h2 && <h2 className="text-[13px] leading-[20px] text-[#22303EB2]">{sub.content.h2}</h2>}
        {sub.content.p && <p className="text-[15px] leading-[22px] text-[#22303EE5] w-[182.33px] h-[22px]">{sub.content.p}</p>}
      </div>
    )}
    {sub.number && <span className="text-[#22303EE5] text-[15px] leading-[22px]">{sub.number}</span>}
    {sub.p && <span className="text-gray-400 text-[15px] leading-[22px] font-medium">{sub.p}</span>}
  </div>
))}

        </div>
      );

    default:
      return null;
  }
};

export default BatchItem;
