import React from "react";
import productClasses from "../ProductContainers/smallProductContainers.module.css";
const SmallProductContainers = () => {
  return (
    <>
      <hr />
      <div className={productClasses.smallProductContainers}>
        <div>Main page</div>
        <div>Categories</div>
        <div>Tools and equipment</div>
        <div>Secateurs</div>
      </div>
    </>
  );
};

export default SmallProductContainers;
