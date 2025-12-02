// Item.jsx
import React from "react";

const BatchItem = ({ batch }) => {
  switch(batch.type) {
    case "batch1":
      return (
        <div className="bg-white rounded-lg   gap-1">
          {batch.subBatches.map((sub) => (
            <div  className="flex w-[361.33px] h-[86px] justify-end items-center w-[313.33px] " key={sub.id}>
              {sub.h2 && <h2 className="text-lg font-bold text-[15px] leading-[22px] text-[rgba(34,48,62,0.9)] w-[112.67px] h-[38px] text-center hover:bg-[rgb(105,108,255)] hover:cursor-pointer transition- p-[2%] rounded-[5px] hover:text-white">{sub.h2}</h2>}
              {sub.h3 && <h3 className="text-lg font-bold text-[15px] leading-[22px] text-[rgba(34,48,62,0.9)] w-[112.67px] h-[38px] text-center hover:bg-[rgb(105,108,255)] hover:cursor-pointer transition- p-[2%] rounded-[5px] hover:text-white">{sub.h3}</h3>}
              {sub.h4 && <h4 className="text-lg font-bold text-[15px] leading-[22px] text-[rgba(34,48,62,0.9)] w-[112.67px] h-[38px] text-center hover:bg-[rgb(105,108,255)] hover:cursor-pointer transition- p-[2%] rounded-[5px] hover:text-white">{sub.h4}</h4>}
            </div>
          ))}
        </div>
      );
    case "batch2":
      return (
        <div className="bg-white p-4 rounded-lg flex items-center gap-4">
          {batch.subBatches.map((sub) => (
            sub.imgSrc ? (
              <img key={sub.id} src={sub.imgSrc} alt="" className="w-[48px] h-[48px] rounded" />
            ) : (
              <div key={sub.id}>
                {sub.p && <p className="text-[15px] leading-[22px] font-medium text-[#22303EB2]">{sub.p}</p>}
                {sub.number && <span className="text-[15px] leading-[22px] font-medium text-[#22303EE5]">{sub.number}</span>}
              </div>
            )
          ))}
        </div>
      );
case "batch3":
  return (
    <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-4">
      {batch.subBatches.map((sub) => (
        <div key={sub.id} className="flex flex-col items-center text-center">
          {sub.imgSrc && (
            <img src={sub.imgSrc} alt="" className="w-[313.33px] h-[197px] object-cover rounded" />)}
          {sub.p && ( <p className="w-[313.33px] h-[18px] text-[13px] text-[rgb(167,172,178)]">{sub.p}  </p>  )}
        </div>
      ))}
    </div>
  );

    case "batch4":
      return (
        <div className="flex justify-center bg-white shadow   ">
          {batch.subBatches.map((sub) => (
            <div key={sub.id} className="flex flex-col items-center justify-center p-2  rounded">
              {sub.imgSrc && <img src={sub.imgSrc} alt="" className="w-[45px] h-[45px] object-cover rounded mb-1" />}
              {sub.h2 && <h2 className={sub.className}>{sub.h2}</h2>}
              {sub.p && <p className="w-[151px] h-[20px] text-[13px] leading-[22px]">{sub.p}</p>}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default BatchItem;
