import React from "react";

const ContentItem = ({ item }) => {
  // ---------------------- textButton ----------------------
  if (item.type === "textButton") {
    return (
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white w-[746px] rounded-md shadow">
        <div className=" flex flex-col gap-6 h-[159px] pl-[3%] w-[444px]">
          <h2 className="w-[205px] text-[18px] leading-[28px] text-blue-500">{item.title}</h2>
          <p className="w-[280px] h-[44px] text-[15px] leading-[22px] text-[#22303EB2]">{item.description}</p>
          <button className="w-[103px] h-[30px] bg-[rgb(231,231,255)] text-[rgb(105,108,255)] rounded-[4px] text-[13px] leading-[18px] cursor-pointer">
            {item.buttonText}
          </button>
        </div>
        {item.nestedImage && (
          <img
            src={item.nestedImage}
            alt="nested"
            className="mr-[3%] w-[221.61px] h-[182px] object-cover rounded"
          />
        )}
      </div>
    );
  }

  // ---------------------- Order ----------------------
  if (item.type === "Order") {
    return (
      <div className="bg-white w-[169px] flex flex-col rounded-md shadow p-4">
        {item.title && <h2 className="font-medium text-[15px] leading-[22px] text-[#22303EB2]">{item.title}</h2>}
        {item.number !== undefined && (
          <p className="text-[#22303EE5] text-[24px] leading-[38px] font-medium">{item.number}</p>
        )}
        {item.imgSrc && (
          <img src={item.imgSrc} alt="image" className="w-full h-40 object-contain" />
        )}
      </div>
    );
  }

  // ---------------------- flexThree ----------------------
  if (item.type === "flexThree") {
    return (
      <div className="bg-white w-[169px] flex flex-wrap rounded-md ">
        {item.items.map((sub, index) => {
          const key = sub.id ?? `flexThree-${index}`;

          if (sub.type === "imageIcon") {
            return (
              <div key={key} className="w-[169px] flex justify-around items-center gap-2 bg-white rounded  p-2">
                {sub.imgSrc && <img src={sub.imgSrc} alt="img" className="w-12 h-12 object-cover rounded" />}
                {sub.icon && React.createElement(sub.icon, { size: 20 })}
              </div>
            );
          }

          if (sub.type === "h2Number") {
            return (
              <div key={key} className="w-[169px] flex flex-col items-start bg-white rounded  pl-6 py-2">
                <h2 className="text-[#22303EB2] text-[15px] leading-[22px] font-medium">{sub.title}</h2>
                <p className="text-[#22303EE5] text-[24px] leading-[38px] font-medium">{sub.number}</p>
              </div>
            );
          }

          if (sub.type === "iconNumber") {
            return (
              <div key={key} className="w-[169px] flex items-center gap-2 bg-white rounded  text-[#71DD37] text-[13px] leading-[20px] p-2">
                {sub.icon && React.createElement(sub.icon, { size: 20 })}
                <span>{sub.number}</span>
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  }

  // ---------------------- wrapperTwo ----------------------
  if (item.type === "wrapperTwo") {
    return (
      <div className="w-[362px] flex justify-between rounded-md shadow gap-2">
        <ContentItem item={item.order} />
        <ContentItem item={item.flexThree} />
      </div>
    );
  }

  // ---------------------- titleIcon ----------------------
  if (item.type === "titleIcon") {
    return (
      <div className="flex items-center gap-2 p-2 bg-white rounded shadow">
        {item.icon && React.createElement(item.icon, { size: 20 })}
        <h2 className="text-[15px] font-medium">{item.title}</h2>
      </div>
    );
  }

  // ---------------------- iconsNumbers ----------------------
  if (item.type === "iconsNumbers") {
    return (
      <div className="flex gap-4 p-2 bg-white rounded shadow ">
        {item.items.map((sub, index) => {
          const key = sub.id ?? `iconsNumbers-${index}`;
          return (
            <div key={key} className="flex items-center gap-2 text-green-500">
              {sub.icon && React.createElement(sub.icon, { size: 20 })}
              {sub.imgSrc && <img src={sub.imgSrc} alt="icon" className="w-6 h-6 object-cover" />}
              {sub.number !== undefined && <span>{sub.number}</span>}
              {sub.number1 !== undefined && <span>{sub.number1}</span>}
            </div>
          );
        })}
      </div>
    );
  }

  // ---------------------- imageOnly ----------------------
  if (item.type === "imageOnly") {
    return (
      <div className="p-2 bg-white rounded shadow">
        <img src={item.imgSrc} alt="img" className="w-32 h-32 object-cover rounded" />
      </div>
    );
  }

  // ---------------------- no type ----------------------
  if (!item.type) {
    return (
      <div className="border rounded p-2 mb-2 min-w-[150px]">
        <span>{item.title}</span>
      </div>
    );
  }

  // ---------------------- wrapper ----------------------
  if (item.type === "wrapper") {
  const wrapperWidth = item.width ?? "w-[461px]"; // عرض افتراضي
  return (
    <div className={`${wrapperWidth} flex flex-col bg-white rounded-md shadow`}>
      {item.items.map((sub, index) => {
        const key = sub.id ?? `wrapper-${index}`;
        if (sub.isDiv) {
          return (
            <div key={key} className="p-2 bg-white rounded shadow">
              <ContentItem item={sub} />
            </div>
          );
        }
        return <ContentItem key={key} item={sub} />;
      })}
    </div>
  );
}


  // ---------------------- customDiv ----------------------
  if (item.type === "customDiv") {
    return (
      <div className="flex gap-4 p-2 bg-white rounded shadow">
        {item.content.map((sub, index) => {
          if (sub.type === "imageIcon") {
            return (
              <div key={index} className="flex items-center gap-2">
                {sub.imgSrc && <img src={sub.imgSrc} alt="img" className="w-12 h-12 object-cover rounded" />}
                {sub.icon && React.createElement(sub.icon, { size: 20 })}
              </div>
            );
          }
          if (sub.type === "h2NumberIconNumber") {
            return (
              <div key={index} className="flex flex-col items-start gap-1">
                <h2 className="text-[15px] font-medium">{sub.title}</h2>
                <div className="flex items-center gap-2 text-green-500">
                  <span>{sub.number}</span>
                  {sub.icon && React.createElement(sub.icon, { size: 20 })}
                  <span>{sub.number1}</span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }

  return null;
};

export default ContentItem;
