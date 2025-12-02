// src/components/vegetable/VegetableLayout.jsx
import React from "react";
import VegetableItem from "./VegetableItem";

const VegetableLayout = ({ data }) => {
  return (
    <div className="flex bg-[#F4F5F7] gap-[2%] ">
      {data.subBatches.map((batch) => {
        // خصائص مختلفة للدف الثاني
        const batchClass =
          batch.id === "batch-2-others"
            ? "flex flex-col w-[362px] h-[406px]" // ← خصائص الدف الثاني
            : "flex w-[746px] gap-[3%]";   // ← خصائص الدف الأول

        return (
          <div key={batch.id} className={batchClass}>
            {batch.title && (
              <h2 className="text-xl font-bold text-gray-700">{batch.title}</h2>
            )}

            <div className={`flex ${batch.id === "batch-2-others" ? "flex-wrap" : ""}`}>
              {batch.subItems.map((item) => (
                <VegetableItem
                  key={item.id}
                  item={{ ...item, parentBatchId: batch.id }} // تمرير id للدف لـ VegetableItem
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VegetableLayout;
