import React from "react";
import garden from "../../img/garden.svg";
import classes from "./discount.module.css";

const Discount = () => {
  const sectionStyle = {
    backgroundImage: `url(${garden})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <section style={sectionStyle} className={classes.mainContainer}>
      <h1>Amazing Discounts on Garden Products!</h1>
      <button className={classes.button1}>Check out</button>
    </section>
  );
};

export default Discount;
