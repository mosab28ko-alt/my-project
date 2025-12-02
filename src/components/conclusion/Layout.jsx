import React from "react";
import Item from "./Item";

const Layout = ({ data }) => {
  return (
    <div className="flex w-[1132px] h-[54px] justify-between">
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Layout;
