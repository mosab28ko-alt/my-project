import React from "react";

const HeaderItem = ({ Icon, image, tooltip }) => {
  return (
    <div className="relative group cursor-pointer p-2 hover:bg-gray-100 rounded-full transition">

      {/* إذا فيه صورة استخدمها، وإلا أيقونة */}
      {image ? (
        <img
          src={image}
          alt={tooltip}
          className="w-8 h-8  object-cover"
        />
      ) : (
        Icon && <Icon size={24} />
      )}

      {/* Tooltip */}
      <span className="absolute top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-50">
        {tooltip}
      </span>
    </div>
  );
};

export default HeaderItem;
