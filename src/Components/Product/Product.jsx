import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./product.module.css";

const Product = () => {
  const [product, setProduct] = useState({});
  const [counterValue, setCounterValue] = useState(0);

  const increaseCounter = () => {
    setCounterValue((prevValue) => prevValue + 1);
  };

  const decreaseCounter = () => {
    setCounterValue((prevValue) => prevValue - 1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3333/products/1");
        const data = await response.json();
        console.log(data);
        setProduct(data[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);

  const discountPercentage = Math.round(
    ((product.price - product.discont_price) / product.price) * 100
  );

  return (
    <div className={classes.productContainer}>
      <div className={classes.img}>
        <img
          src={`http://127.0.0.1:3333${product.image}`}
          alt={product.title}
        />
      </div>
      <div className={classes.titleUndDescription}>
        <h3>{product.title}</h3>
        <div className={classes.priceContainers}>
          <p>${product.price}</p>
          <p>${product.discont_price}</p>
          <div className={classes.discountOverlay}>
            <div className={classes.discountText}>-{discountPercentage}% </div>
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttons}>
            <button onClick={decreaseCounter}>-</button>
            <p>{counterValue}</p>
            <button onClick={increaseCounter}>+</button>
          </div>
          <button className={classes.addToCard}>Add to cart</button>
        </div>
        <div className={classes.descriptionContainer}>
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
