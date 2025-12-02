// src/components/Header/HeaderLayout.js

import React from "react";
import HeaderItem from "./HeaderItem";
import { searchConfig, headerIcons } from "./HeaderData";

const HeaderLayout = () => {
  const SearchIcon = searchConfig.icon;

  return (
   <div className="header w-[1180px] h-[78px] bg-[rgb(8, 19, 41)]">
  <header className="w-[1132px] h-[62px]  shadow-md flex items-center justify-between px-4 rounded">

    {/* البحث */}
    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full w-1/3 bg-white">
      <SearchIcon size={18} className="text-gray-500" />
      <input
        type="text"
        placeholder={searchConfig.placeholder}
        className="bg-transparent outline-none text-sm w-full"
      />
    </div>

    {/* الأيقونات */}
    <div className="flex items-center gap-4">
      {headerIcons.map((item) => (
        <HeaderItem
          key={item.id}
          Icon={item.icon}
          image={item.image}
          tooltip={item.tooltip}
        />
      ))}
    </div>

  </header>
</div>

  );
};

export default HeaderLayout;
