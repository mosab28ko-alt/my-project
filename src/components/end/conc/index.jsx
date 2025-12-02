import React from "react";
import { firstBlock, secondBlock, allSubBlocks } from "./Data";
import Layout from "./Layout";

const Conc = () => {
  return <Layout firstBlock={firstBlock} secondBlock={secondBlock} allSubBlocks={allSubBlocks} />;
};

export default Conc;
