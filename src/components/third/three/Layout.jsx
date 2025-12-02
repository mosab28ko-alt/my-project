// Layout.jsx
import React from "react";
import { threeData } from "./Data";
import BatchItem from "./Item";

const ThreeLayout = () => {
  return (
    <div className="flex flex-col justify-between w-[361.33px] h-[490px] bg-white rounded-[5px]">
      {threeData.map(batch => (
        <BatchItem key={batch.id} batch={batch} />
      ))}
    </div>
  );
};

export default ThreeLayout;
