// Layout.jsx
import React from "react";
import { nextOneData } from "./Data";
import BatchItem from "./Item";

const NextOneLayout = () => {
  return (
    <div className="flex flex-col justify-between w-[361.33px] h-[490px] bg-white rounded-[5px] ">
      {nextOneData.map((batch) => (
        <BatchItem key={batch.id} batch={batch} />
      ))}
    </div>
  );
};

export default NextOneLayout;
