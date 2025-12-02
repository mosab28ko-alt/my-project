// src/components/vegetable/index.jsx

import React from "react";
import { vegetableData } from "./VegetableData";
import VegetableLayout from "./VegetableLayout";

const VegetableIndex = () => {
  return (
    <div className="">
      <VegetableLayout data={vegetableData} />
    </div>
  );
};

export default VegetableIndex;
