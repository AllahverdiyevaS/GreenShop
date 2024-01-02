import React, { useEffect, useState } from "react";
import Category from "./Category";
import classes from "./category.module.css";

const CategoriesForPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://127.0.0.1:3333/categories/all");
      const data = await response.json();
      setCategories(data.slice(0, 5));
    };
    fetchCategories();
  }, []);
  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.allCategories}>
        <h2>Categories</h2>
      </div>
      <div className={classes.categoriesWrapper}>
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesForPage;
