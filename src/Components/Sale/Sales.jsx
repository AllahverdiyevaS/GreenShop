import React, { useEffect, useState } from "react";
import Sale from "./Sale";
import classes from "./sale.module.css";

const Sales = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://127.0.0.1:3333/products/all");
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);
  const filteredProducts = products.filter((product) => product.discont_price);

  const limitedProducts = filteredProducts.slice(0, 4);
  return (
    <div className={classes.salesContainer}>
      <div className={classes.allSales}>
        <h2>Sale</h2>
        <hr className={classes.line} />
        <p>All sales</p>
      </div>
      <div className={classes.salesWrapper}>
        {limitedProducts.map((product) => (
          <Sale key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
