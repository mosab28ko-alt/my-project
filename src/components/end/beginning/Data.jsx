import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsRecordCircle } from "react-icons/bs";

const data = {
  firstBlock: {
    title: "Activity Timeline",
    icon: BiDotsVerticalRounded,
  },

  secondBlock: {
    subBlocks: [
      {
         icon: BsRecordCircle,
        title: "12 Invoices have been paid",
        p: "Invoices have been paid to the company",
        imgSrc: "/Row.png",
      },
      {
        number: 12,
        paragraph: "min ago",
      },
    ],
  },
  
};

export default data;
