// src/components/vegetable/VegetableData.jsx
import { BsRecordFill } from "react-icons/bs"
import { AiOutlineMore } from "react-icons/ai";

export const vegetableData = {
  id: 2,
  subBatches: [
    {
      id: "batch-2-1",
      className: "batch-2-1-class", // 
      subItems: [
        {
          id: "wrapper-2-1",
          type: "wrapper",
          width: "w-[461px]",
          items: [
            { id: 1, type: "titleIcon", title: "Total Revenue", icon: "AiOutlineMore" },
            {
              id: 2,
              type: "iconsNumbers",
              items: [
                { icon: "BsRecordFill", number: 2022 },
                { icon: "BsRecordFill", number: 2021 }
              ]
            },
            { 
              id: 3, 
              type: "imageOnly", 
              imgSrc: "/jhsdcvx.png",
              imgClass: "w-[413px] h-[262px] object-contain"
            }
          ]
        },

        {
          id: 4,
          type: "wrapper",
          width: "w-[285px]",
          // customClass: "bg-white",
          items: [
            { id: "4-1", type: "iconNumber", number: 2023, icon: "BsChevronDown" },
            { 
              id: "4-2", 
              type: "imageOnly", 
              imgSrc: "/dddd.png",
              imgClass: "mt-[5%] ml-[6%] w-[213px] h-[193px] mt-2 object-cover"
            },
            {
              id: "4-3",
              type: "iconsNumbers",
              items: [
                { imgSrc: "/fffff.png", number: 2023, number1: 32 },
                { imgSrc: "/ssss.png", number: 2023, number1: 42 }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "batch-2-others",
      className: "batch-2-others-class flex-col", // ← هنا class الدف الثاني
      subItems: [
        {
          id: "wrapper-2-2-3",
          type: "wrapper",
       className: "flex w-[362px] h-[198px] justify-between",
          items: [
            {
              id: 2,
              type: "customDiv",
              isDiv: true,
               customClass: " w-[169px] h-[198px] ", // ← كل عنصر يحدد خصا
              content: [
                { type: "imageIcon", imgSrc: "/hg.png", imgClass:"w-[40px] h-[40px]", icon: "AiOutlineMore" ,    customClass: " w-[169px] h-[80px]"  },
                { type: "h2NumberIconNumber", title: "Payments", number: 2468, icon: "AiOutlineArrowUp", number1: 14.82 }
              ]
            },
        {
          id: 3,
          type: "customDiv",
          isDiv: true,
        customClass: " w-[169px] h-[198px] ",
          content: [
            { type: "imageIcon", imgSrc: "/jh.png"   },
            { type: "h2NumberIconNumber", title: "فرعي 2-3", number: 2024, icon: "AiOutlineArrowUp", number1: 42 }
          ]
        }
          ]
        },

        {
          id: 4,
          type: "customDiv",
          isDiv: true,
          content: [
            {
              type: "h2NumberIconNumber",
              title: "فرعي 2-4",
              description: "وصف فرعي 2-4 هنا",
              number: 5050,
              icon: "AiOutlineArrowUp",
              number1: 75
            },
            { 
              type: "imageOnly", 
              imgSrc: "/iuy.png",
              imgClass: "w-[181px] h-[184px] mt-6 rounded-xl"
            }
          ]
        }
      ]
    }
  ]
};
