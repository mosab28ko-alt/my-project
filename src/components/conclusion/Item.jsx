import React from "react";

const Item = ({ h2, h3, h4, h5, description }) => {
  return (
    <div className=" p-1 ">

      {/* العناوين */}
      <div className="flex  gap-[5%] w-[348px]">
        <h2 className=" text-[15px] leading-[22px] text-[#696CFF] ">{h2}</h2>
        <h3 className="text-[15px] leading-[22px] text-[#696CFF] ">{h3}</h3>
        <h4 className="text-[15px] leading-[22px] text-[#696CFF] ">{h4}</h4>
        <h5 className="text-[15px] leading-[22px] text-[#696CFF] ">{h5}</h5>
      </div>

      {/* الديف اللي بالنص */}
      <div className="w-full text-[rgba(34,48,62,0.70)] text-[15px] leading-[22px] bg-gray-100 rounded-lg ">
        {description}
      </div>

    </div>
  );
};

export default Item;
