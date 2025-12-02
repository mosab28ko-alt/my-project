import {
  BsHouseDoor, BsPerson, BsWindowSplit, BsThreeDots
} from "react-icons/bs";
import {
  BiChevronRight, BiCartAlt, BiChat, BiCheckboxChecked,
  BiTable
} from "react-icons/bi";
import { FiLock, FiSquare } from "react-icons/fi";
import {
  GoBook, GoDotFill
} from "react-icons/go";
import {
  IoCarOutline, IoLockOpenOutline
} from "react-icons/io5";
import {
  MdOutlineEmail, MdCreditCard
} from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyBills, FaPlateWheat } from "react-icons/fa6";
import {
  AiOutlineSafety, AiOutlineTable, AiOutlineUnorderedList
} from "react-icons/ai";
import { RxFontRoman } from "react-icons/rx";
import { TfiCrown } from "react-icons/tfi";
import { VscCreditCard } from "react-icons/vsc";
import { ImPrinter } from "react-icons/im";
import hdsjh from "../../../added/photo/hdsjh.png";

// ⚡ البيانات كلها بنظام واحد (preIcon, title, postIcon, path)
export const SidebarData = [
  {
    photo: hdsjh,
    section: "sneat",
    items: [
      { title: "Dashboards", preIcon: <BsHouseDoor />, postIcon: <BiChevronRight />, path: "/" },
    ],
  },
  {
    section: "APPS & PAGES",
    items: [
      { title: "eCommerce", preIcon: <BiCartAlt />, postIcon: <FiLock />, path: "/ecommerce" },
      { title: "Academy", preIcon: <GoBook />, postIcon: <FiLock />, path: "/academy" },
      { title: "Logistics", preIcon: <IoCarOutline />, postIcon: <FiLock />, path: "/logistics" },
 {
    title: "Users",
    preIcon: <BsPerson />,
    subItems: [
      { title: "List", preIcon: <GoDotFill />, path: "/users/list" },
      {
        title: "View",
        preIcon: <GoDotFill />,
        postIcon: <BiChevronRight />,
        subItems: [
          { title: "Overview", preIcon: <GoDotFill />, path: "/users/view/overview" },
          { title: "Security", preIcon: <GoDotFill />, path: "/users/view/security" },
          { title: "Billing & Plans", preIcon: <GoDotFill />, path: "/users/view/billing" },
          { title: "Notifications", preIcon: <GoDotFill />, path: "/users/view/notifications" },
          { title: "Connections", preIcon: <GoDotFill />, path: "/users/view/connections" },
        ],
      },
    ],
  },
      { title: "Email", preIcon: <MdOutlineEmail />, postIcon: <FiLock />, path: "/email" },
      { title: "Chat", preIcon: <BiChat />, postIcon: <FiLock />, path: "/chat" },
      { title: "Calendar", preIcon: <FaRegCalendarAlt />, postIcon: <FiLock />, path: "/calendar" },
      { title: "Kanban", preIcon: <AiOutlineTable />, postIcon: <FiLock />, path: "/kanban" },
      { title: "Invoice", preIcon: <FaMoneyBills />, postIcon: <FiLock />, path: "/invoice" },
      { title: "Roles & Perm...", preIcon: <AiOutlineSafety />, postIcon: <FiLock />, path: "/roles" },
    ],
  },
  {
    section: "PAGES",
    items: [
      { title: "Pages", preIcon: <MdCreditCard />, postIcon: <BiChevronRight />, path: "/pages" },
      { title: "Authentications", preIcon: <IoLockOpenOutline />, postIcon: <BiChevronRight />, path: "/auth" },
      { title: "Wizard Examples", preIcon: <AiOutlineUnorderedList />, postIcon: <FiLock />, path: "/wizard" },
      { title: "Dialog Examples", preIcon: <FiSquare />, postIcon: <FiLock />, path: "/dialogs" },
    ],
  },
  {
    section: "USER INTERFACE",
    items: [
      { title: "Typography", preIcon: <RxFontRoman />, postIcon: <BiChevronRight />, path: "/typography" },
      { title: "Icons", preIcon: <TfiCrown />, postIcon: <BiChevronRight />, path: "/icons" },
      { title: "Cards", preIcon: <VscCreditCard />, postIcon: <BiChevronRight />, path: "/cards" },
      { title: "Components", preIcon: <FaPlateWheat />, postIcon: <BiChevronRight />, path: "/components" },
    ],
  },
  {
    section: "FORMS & TABLES",
    items: [
      { title: "Form Elements", preIcon: <ImPrinter />, postIcon: <BiChevronRight />, path: "/form-elements" },
      { title: "Form Layout", preIcon: <BsWindowSplit />, postIcon: <BiChevronRight />, path: "/form-layout" },
      { title: "Form Validation", preIcon: <BiCheckboxChecked />, postIcon: <BiChevronRight />, path: "/form-validation" },
      { title: "Form Wizard", preIcon: <BsThreeDots />, postIcon: <FiLock />, path: "/form-wizard" },
      { title: "Table", preIcon: <BiTable />, path: "/table" },
      { title: "Mui DataGrid", preIcon: <AiOutlineTable />, postIcon: <FiLock />, path: "/datagrid" },
    ],
  },
];

