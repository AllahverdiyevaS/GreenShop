import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./product.module.css";

const Product = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("http://127.0.0.1:3333/products/1");
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);
  // const { price, discont_price, image, title, description } = product;

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
      <div>
        <h3>{product.title}</h3>
        <div className={classes.priceContainers}>
          <p>${product.price}</p>
          <p>${product.discont_price}</p>
          <div className={classes.discountOverlay}>
            <div className={classes.discountText}>-{discountPercentage}% </div>
          </div>
          <div className={classes.descriptionConatiner}>
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
