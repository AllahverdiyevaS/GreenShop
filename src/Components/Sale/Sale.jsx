import React from "react";
import classes from "./sale.module.css";

const Sale = ({ image, title, price, discont_price, handleProductClick }) => {
  const discountPercentage = Math.round(
    ((price - discont_price) / price) * 100
  );
  return (
    <div>
      {" "}
      <div className={classes.product}>
        <img
          src={`http://127.0.0.1:3333${image}`}
          alt={title}
          onClick={handleProductClick}
        />
        <div className={classes.discountOverlay}>
          <div className={classes.discountText}>-{discountPercentage}% </div>
        </div>

        <h3>{title}</h3>
        <div className={classes.priceContainer}>
          <p>${price}</p>
          <p>${discont_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Sale;
