export const firstBlock = {
  h2: "Browser",
  h3: "Operating System",
  h4: "Country",
};

export const secondBlock = {
  subBlockOne: {
    h6: "No",
    h7: "BROWSER",
    h8: "VISITS",
    h9: "DATA IN PERCENTAGE",
  },
};

// دالة تولد دف واحد
export const createSubBlockTwo = (index) => [
  { type: "number", value: index },
  { type: "imageText", img: `/kjkjkj${index}.png`, text: ["Chrome", "Safari", "Firefox", "Edge", "Opera"][index - 1] },
  { type: "number", value: (Math.random() * 10).toFixed(2) },
  { type: "imageNumber", img: `/progress${index}.png`, value: (Math.random() * 100).toFixed(2) },
];

// مصفوفة الدفوف الـ5
export const allSubBlocks = Array.from({ length: 5 }).map((_, i) => createSubBlockTwo(i + 1));
