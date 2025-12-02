// src/components/vegetable/VegetableItem.jsx
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

// دالة لجلب أي أيقونة من Ai أو Bs
const getIcon = (iconName) => {
  if (!iconName) return null;
  return AiIcons[iconName] || BsIcons[iconName] || null;
};

const VegetableItem = ({ item }) => {

  // -------------------------- 1) title + icon --------------------------
  if (item.type === "titleIcon") {
    const Icon = getIcon(item.icon);
    return (
      <div className="flex justify-between items-center">
        <h2 className="text-[18px] leading-[28px] text-[#22303EE5]">{item.title}</h2>
        {Icon && <Icon size={20} style={{ color: "#22303EE5" }} />}
      </div>
    );
  }

  // -------------------------- 2) iconsNumbers --------------------------
  if (item.type === "iconsNumbers") {
    return (
      <div className="flex gap-4 ml-[-2px] w-[213px] h-[42px]">
        {item.items?.map((e, i) => {
          const Icon = getIcon(e.icon);

          return (
            <div key={i} className="flex items-center gap-2 w-[94.5px] h-[42px]">

              {/* صورة */}
              {e.imgSrc && (
                <img
                  src={e.imgSrc}
                  alt=""
                  className="w-[38px] h-[38px] object-contain"
                />
              )}

              {/* أيقونة */}
              {Icon && (
                <Icon
                  size={18}
                  style={{ color: "oklch(71.5% 0.143 215.221)" }}
                />
              )}

              <span className=" text-[13px] leading-[20px] font-medium text-[#22303EE5]">
                {e.number}
              </span>

              {e.number1 && (
                <span className="ml-[-25%] mt-[25%] font-semibold text-[rgb(56, 69, 81)]">{e.number1}</span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // -------------------------- 3) imageOnly --------------------------
  if (item.type === "imageOnly") {
    return (
      <img
        src={item.imgSrc}
        className={
          item.imgClass
            ? item.imgClass
            : "mt-[7%] w-[413px] h-[262px] object-contain"
        }
      />
    );
  }

  // -------------------------- 4) iconNumber --------------------------
  if (item.type === "iconNumber") {
    const Icon = getIcon(item.icon);
    return (
      <div className="flex items-center gap-2 w-[116px] h-[38px] bg-[rgb(231,231,255)] rounded-[8px] pl-[9%] ml-[26%] mt-[10%] text-[rgb(105,108,255)]">
        {Icon && <Icon size={18} className="cursor-pointer" />}
        <span className="text-lg font-bold text-[15px] leading-[22px]">{item.number}</span>
      </div>
    );
  }

  // -------------------------- 5) imageIcon --------------------------
  if (item.type === "imageIcon") {
    const Icon = getIcon(item.icon);

    return (
      <div className={`relative ${item.customClass || "w-[100px] h-[100px]"}`}>

        {/* الصورة */}
        <img
          src={item.imgSrc}
          className={item.imgClass ? item.imgClass : "w-full h-full object-contain rounded-md"}
        />

        {/* الأيقونة فوق الصورة */}
        {Icon && (
          <Icon
            size={20}
            className="absolute top-1 right-1 text-[#22303EE5] cursor-pointer"
          />
        )}
      </div>
    );
  }

  // -------------------------- 6) h2NumberIconNumber --------------------------
  if (item.type === "h2NumberIconNumber") {
    const Icon = getIcon(item.icon);
    return (
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{item.title}</h2>

        <div className="flex items-center gap-2">
          <span className="font-bold text-[18px]">{item.number}</span>
          {Icon && <Icon size={18} className="text-green-600" />}
          <span className="text-[16px] font-semibold">{item.number1}</span>
        </div>

        {item.description && (
          <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
        )}
      </div>
    );
  }

  // -------------------------- 7) customDiv --------------------------
  if (item.type === "customDiv") {
    return (
      <div className={`${item.customClass || ""}`}>
        {item.content.map((inner, index) => {
          const Icon = getIcon(inner.icon);

          return (
            <div key={index} className={inner.customClass || ""}>
              
              {/* ---- imageIcon inside customDiv ---- */}
              {inner.type === "imageIcon" && (
                <div className={inner.customClass || ""}>
                  <div className="relative w-full h-full">
                    <img
                      src={inner.imgSrc}
                      className={inner.imgClass || "w-full h-full object-contain"}
                    />
                    {Icon && (
                      <Icon size={20} className="absolute top-1 right-1 text-[#22303EE5]" />
                    )}
                  </div>
                </div>
              )}

              {/* ---- h2NumberIconNumber ---- */}
              {inner.type === "h2NumberIconNumber" && (
                <div className="flex flex-col gap-2">
                  <h2 className=" text-[15px] leading-[22px] text-[rgb(100,110,120)] " >{inner.title}</h2>
                  <div className="flex flex-col gap-1">
                    <span className="text-[24px] leading-[38px]">{inner.number}</span>
                    <span>{inner.number1}</span>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    );
  }

  // -------------------------- 8) wrapper --------------------------
  if (item.type === "wrapper") {
    return (
      <div className={`bg-white  shadow rounded-lg p-4 ${item.width} ${item.className || ""}`}>
        {item.items.map((child) => (
          <VegetableItem
            key={child.id}
            item={{
              ...child,
              customClass: child.customClass || "",
            }}
          />
        ))}
      </div>
    );
  }

  // -------------------------- 9) batch wrapper --------------------------
  if (item.subItems && item.className) {
    return (
      <div className={item.className}>
        {item.subItems.map((sub) => (
          <VegetableItem key={sub.id} item={sub} />
        ))}
      </div>
    );
  }

  return <div>Unknown Type</div>;
};

export default VegetableItem;
