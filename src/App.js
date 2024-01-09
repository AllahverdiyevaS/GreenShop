import React from "react";
import { useState } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import MainPage from "../src/Pages/MainPage/MainPage";
import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";

import "./App.css";
import SmallProductContainers from "./Components/ProductContainers/SmallProductContainers";
function App() {
  const [showCategoriesPage, setShowCategoriesPage] = useState(false);

  const handleCategoriesClick = () => {
    setShowCategoriesPage(true);
  };

  const handleMainPageClick = () => {
    setShowCategoriesPage(false);
  };

  const handleProductClick = () => {
    setShowCategoriesPage(false);
  };
  return (
    <div className="App">
      <Header
        handleCategoriesClick={handleCategoriesClick}
        handleMainPageClick={handleMainPageClick}
        handleProductClick={handleProductClick}
      />
      {showCategoriesPage && <CategoriesPage />}
      {!showCategoriesPage && <MainPage />}

      <Footer />
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       <Header />

//       <SingleProductPage />
//       <Footer />
//     </div>
//   );
// }

export default App;
