// src/components/Header/HeaderData.js

import { FaSearch } from "react-icons/fa";
import { AiOutlineGlobal,  AiFillMoon, AiOutlineAppstore, AiTwotoneBell } from "react-icons/ai";

export const searchConfig = {
  placeholder: "Search ⌘K",
  icon: FaSearch,
};

export const headerIcons = [
  { id: 1, icon: AiOutlineGlobal, tooltip: "الرسائل" },
  { id: 2, icon: AiFillMoon, tooltip: "الإشعارات" },
  { id: 3, icon: AiOutlineAppstore, tooltip: "الإعدادات" },
  { id: 3, icon: AiTwotoneBell, tooltip: "الإعدادات" },
 { id: 4, image: "/src/added/photo/Avatar.png", tooltip: "الحساب" }
];
