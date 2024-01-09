import React from "react";
import Product from "../../Components/Product/Product";
import SmallProductContainers from "../../Components/ProductContainers/SmallProductContainers";

const SingleProductPage = () => {
  return (
    <div>
      <SmallProductContainers />
      <Product />
    </div>
  );
};

export default SingleProductPage;
