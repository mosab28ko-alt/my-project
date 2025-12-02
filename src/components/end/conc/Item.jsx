import React from "react";

const Item = ({ type, value, img, text }) => {
  switch (type) {
    case "number":
      return (
        <div className="text-[#22303EB2] text-[13px] leading-[20px] font-medium">
          {value}
        </div>
      );

    case "imageText":
      return (
        <div className="item-image-text flex items-center gap-3 p-3 rounded-md">
          <img src={img} alt="" className="" />
          <p className="text-[#22303EE5] text-[15px] leading-[22px] font-medium">{text}</p>
        </div>
      );

    case "imageNumber":
      return (
        <div className="item-image-number flex items-center gap-2 p-3  rounded-md">
          <img src={img} alt="" className="" />
          <span className="text-[#22303EB2] text-[13px] leading-[20px] text-x font-semibold">{value}</span>
        </div>
      );

    default:
      return null;
  }
};

export default Item;
