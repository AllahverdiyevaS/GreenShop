import React from "react";
import Discount from "../../Components/Discount/Discount";
import Form from "../../Components/Form/Form";
import Categories from "../../Components/Categories/Categories";
import Sales from "../../Components/Sale/Sales";

const MainPage = () => {
  return (
    <main>
      <Discount />
      <Categories />
      <Form />
      <Sales />
    </main>
  );
};

export default MainPage;
