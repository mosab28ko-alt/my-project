import React from "react";
import Item from "./Item";

const Layout = ({ data }) => {
  return (
    <div className="flex bg-white flex-col gap-4 w-[554px] h-[468px] relative rounded-[5px]">

      {/* البلوك الأول */}
      <Item 
        title={data.firstBlock.title} 
        icon={data.firstBlock.icon} 
        className="bg-white rounded-md border-none p-4 flex items-center justify-between"
      />

      {/* البلوك الثاني: نكرر دف secondBlock 3 مرات */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="relative bg-white h-[118px] rounded-md p-4 flex justify-between"
        >
          {/* الشريط العمودي في منتصف الدف */}
          <div
            className="absolute left-[8px] w-[2px] h-[60%] bottom-[11%] bg-[rgb(228,230,232)]"
          ></div>

          {/* محتوى البلوك */}
          <Item
            blocks={data.secondBlock.subBlocks}
            icon={data.secondBlock.icon} 
            className="flex justify-between gap-4 w-full"
          />
        </div>
      ))}

    </div>
  );
};

export default Layout;
