// Layout.jsx
import React from "react";
import { secondData } from "./Data";
import BatchItem from "./Item";

const SecondLayout = () => {
  return (
    <div className="flex flex-col w-[361.33px] h-[490px] justify-between bg-white  rounded-[5px]">
      {secondData.map((batch) => (
        <BatchItem key={batch.id} batch={batch} />
      ))}
    </div>
  );
};

export default SecondLayout;
