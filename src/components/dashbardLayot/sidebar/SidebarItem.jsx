import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import "./Sidebar.css";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div>
      {/* العنصر الرئيسي */}
      <div 
        className="item-container"
        onClick={() => hasSubItems && setOpen(!open)}
      >
        {/* اليسار: preIcon + title */}
        <div className="item-left">
          {item.preIcon && <span className="pre-icon">{item.preIcon}</span>}

          {item.path ? (
            <Link 
              to={item.path}
              className="item-title"
              onClick={(e) => e.stopPropagation()}
            >
              {item.title}
            </Link>
          ) : (
            <span className="item-title">{item.title}</span>
          )}
        </div>

        {/* اليمين: postIcon أو السهم */}
        <div className="item-right">
          {/* لو في postIcon اعرضه */}
          {item.postIcon && !hasSubItems && (
            <span className="post-icon">{item.postIcon}</span>
          )}

          {/* لو عنده subItems اعرض السهم */}
          {hasSubItems && (
            <span className="arrow-icon">
              {open ? <BiChevronDown /> : <BiChevronRight />}
            </span>
          )}
        </div>
      </div>

      {/* العناصر الفرعية */}
      {open && hasSubItems && (
        <div className="subitems">
          {item.subItems.map((sub, index) => (
            <SidebarItem key={index} item={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
