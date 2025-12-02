// src/components/Content/ContentData.jsx
import { AiOutlineMore , AiOutlineArrowUp } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
export const contentData = [
{
  id: 1,
  subItems: [
    {
      id: 1,
      type: "textButton",
      title: "Congratulations John! 🎉",
      description: "You have done 72% more sales today. Check your new badge in your profile.",
      buttonText: "View Badges",
      nestedImage: "/src/added/photo/jknbxvjk.png",
    },

    // الدف الجديد الذي يحتوي Order + flexThree
    {
      id: 10,
      type: "wrapperTwo",
      order: {
        id: 2,
        type: "Order",
        title: "Order",
        number: 546,
        imgSrc: "/src/added/photo/Chart.png",
      },
      flexThree: {
        id: 3,
        type: "flexThree",
        items: [
          { type: "imageIcon", imgSrc: "/src/added/photo/Icon.png", icon: AiOutlineMore },
          { type: "h2Number", title: "Sales", number: 4679 },
          { type: "iconNumber", icon: AiOutlineArrowUp, number: 28.14 },
        ],
      },
    },
  ],
},
];
