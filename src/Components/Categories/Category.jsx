import React from "react";
import classes from "./category.module.css";

const Category = ({ image, title }) => {
  return (
    <div className={classes.category}>
      <img src={`http://127.0.0.1:3333${image}`} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
