// src/pages/Dashboard.jsx
import React from "react";
import WrapperLayout from "../components/WrapperLayout";
import Content from "../components/Content"; 
import VegetableIndex from "../components/vegetable";
import ThirdFolder from "../components/third";
import End from "../components/end"
import ConclusionIndex from "../components/conclusion";

const Dashboard = () => {
  return (
    <WrapperLayout>
      <div className="grid gap-[2%] ">
        <Content />
        <VegetableIndex />
        <ThirdFolder />
        <End />
     <ConclusionIndex />
      </div>
    </WrapperLayout>
  );
};

export default Dashboard;
