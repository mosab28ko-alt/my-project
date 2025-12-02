import React from "react";
import ContentItem from "./ContentItem";
import { contentData } from "./ContentData";

const ContentLayout = () => {
  return (
    <div className="space-y-6">
      {contentData.map((batch, batchIndex) => (
        <div key={`batch-${batch.id}-${batchIndex}`} className="flex justify-between">
          {batch.title && <h2 className="text-xl font-bold mb-2">{batch.title}</h2>}

          {/* subBatches */}
          {batch.subBatches?.map((subBatch, subBatchIndex) => (
            <div key={`subBatch-${subBatch.id}-${subBatchIndex}`} className="mb-4 ">
              {subBatch.title && <h3 className="font-semibold mb-2">{subBatch.title}</h3>}
              <div className="flex  w-[746px]">
                {subBatch.subItems.map((sub, subIndex) => (
                  <ContentItem
                    key={`subItem-${sub.id}-${subIndex}`}
                    item={sub}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* subItems العادية */}
          {batch.subItems && (
            <div className="flex gap-6 flex-wrap">
              {batch.subItems.map((sub, subIndex) => (
                <ContentItem
                  key={`subItem-${sub.id}-${subIndex}`}
                  item={sub}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentLayout;
