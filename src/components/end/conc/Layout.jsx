import React from "react";
import Item from "./Item";

const Layout = ({ firstBlock, secondBlock, allSubBlocks }) => {
  return (
    <div className="flex flex-col w-[554px] h-[468px] bg-white rounded-[5px]">

      {/* ------- BLOCK 1 ------- */}
      <div className="p-4 flex gap-[3%] w-[554px] h-[86px]">
        <h2 className="text-[15px] leading-[22px] font-medium text-[#22303EE5] hover:bg-[rgb(105,108,255)] hover:cursor-pointer transition p-[2%] rounded-[5px] hover:text-white">{firstBlock.h2}</h2>
        <h3 className="text-[15px] leading-[22px] font-medium text-[#22303EE5] hover:bg-[rgb(105,108,255)] hover:cursor-pointer transition p-[2%] rounded-[5px] hover:text-white">{firstBlock.h3}</h3>
        <h4 className="text-[15px] leading-[22px] font-medium text-[#22303EE5] hover:bg-[rgb(105,108,255)] hover:cursor-pointer transition p-[2%] rounded-[5px] hover:text-white">{firstBlock.h4}</h4>
      </div>

      {/* ------- BLOCK 2 ------- */}
      <div className="flex flex-col gap-4 w-[554px] h-[382px] p-4">

        {/* SubBlock One */}
        <div className="flex gap-1">
          <h6 className="text-[#22303EE5] font-medium text-[13px] leading-[24px]">{secondBlock.subBlockOne.h6}</h6>
          <p className="text-[#22303EE5] font-medium text-[13px] leading-[24px]">{secondBlock.subBlockOne.h7}</p>
          <p className="text-[#22303EE5] font-medium text-[13px] leading-[24px]">{secondBlock.subBlockOne.h8}</p>
          <p className="text-[#22303EE5] font-medium text-[13px] leading-[24px]">{secondBlock.subBlockOne.h9}</p>
        </div>

        {/* SubBlock Two: كل دف صف أفقي */}
        {allSubBlocks.map((subBlock, idx) => (
          <div key={idx} className="flex gap-4 justify-between items-center">
            {subBlock.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Layout;
