import React from "react";
import classes from "./small-containers.module.css";

const SmallContainers = () => {
  return (
    <>
      <hr />
      <div className={classes.pageContainers}>
        <div>Main page</div>
        <div>Categories</div>
      </div>
    </>
  );
};

export default SmallContainers;
