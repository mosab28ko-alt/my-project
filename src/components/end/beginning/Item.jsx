import React from "react";

const Item = ({ title, icon, blocks, className }) => {
  // لو مررنا blocks (مثلاً الدف الثاني)
  if (blocks) {
    return (
      <div className={className}>
        {blocks.map((block, idx) => (
          <div key={idx} className={block.className || "flex flex-col  justify-between items-baseline ml-[2%]"}>

            {/* أيقونة لو موجودة */}
            {block.icon && (
              <span className={block.iconClassName || "absolute left-0 ml-[0.4%] text-[rgb(105,108,255)] w-[12px] h-[36px]"}>
                {React.createElement(block.icon)}
              </span>
            )}

            <div className={block.textClassName || "flex flex-col gap-2"}>

              {/* الدف الأول: title + p */}
              <div className={block.titleGroupClassName || "flex flex-col gap-1"}>
                {block.title && (
                  <h2
                    className={block.titleClassName || "font-medium text-[15px] leading-[22px] text-[#22303EE5]"}
                  >
                    {block.title}
                  </h2>
                )}
                {block.p && (
                  <p className={block.pClassName || "text-[15px] leading-[22px] text-[#22303EB2]"}>
                    {block.p}
                  </p>
                )}
              </div>

              {/* الدف الثاني: paragraph + number */}
              <div className={block.infoGroupClassName || "flex gap-1 mt-1"}>

                {block.number !== undefined && (
                  <span className={block.numberClassName || "text-[13px] leading-[18px] text-[#22303E66] font-medium"}>
                    {block.number}
                  </span>
                )}

                                {block.paragraph && (
                  <p className={block.paragraphClassName || "text-[14px] leading-[18px] text-gray-400 font-medium"}>
                    {block.paragraph}
                  </p>
                )}
              </div>

            </div>

            {/* الصورة */}
            {block.imgSrc && (
              <img
                src={block.imgSrc}
                alt=""
                className={block.imgClassName || "w-[130.31px] h-[32px] object-contain rounded"}
              />
            )}

          </div>
        ))}
      </div>
    );
  }

  // الدف الأول: h2 ثم أيقونة
  return (
    <div className={className + " flex items-center gap-2"}>
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {icon && <span className="text-2xl">{React.createElement(icon)}</span>}
    </div>
  );
};

export default Item;
