// src/pages/dashboard/Overview.jsx
import React from "react";
import Content from "../../components/content";
import VegetableIndex from "../../components/vegetable";
import ThirdFolder from "../../components/third";
import End from "../../components/end"
import ConclusionIndex from "../../components/conclusion";

const Overview = () => {
  return (
    <div className="grid gap-[2%]">
      <Content />
      <VegetableIndex />
      <ThirdFolder />
      <End />
      <ConclusionIndex />
    </div>
  );
};

export default Overview;

