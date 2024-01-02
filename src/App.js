import React from "react";
// import { useState } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
// import MainPage from "../src/Pages/MainPage/MainPage";
// import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";

import "./App.css";

// function App() {
//   const [showCategoriesPage, setShowCategoriesPage] = useState(false);
//   const [showSingleProductPage, setShowSingleProductPage] = useState(false);

//   const handleCategoriesClick = () => {
//     setShowCategoriesPage(true);
//     setShowSingleProductPage(false); // Скрыть SingleProductPage при переходе на CategoriesPage
//   };

//   const handleMainPageClick = () => {
//     setShowCategoriesPage(false);
//     setShowSingleProductPage(false); // Скрыть SingleProductPage при переходе на MainPage
//   };

//   const handleProductClick = () => {
//     setShowSingleProductPage(true);
//     setShowCategoriesPage(false); // Скрыть CategoriesPage при переходе на SingleProductPage
//   };
//   return (
//     <div className="App">
//       <Header
//         handleCategoriesClick={handleCategoriesClick}
//         handleMainPageClick={handleMainPageClick}
//         handleProductClick={handleProductClick}
//       />
//       {showCategoriesPage && <CategoriesPage />}
//       {!showCategoriesPage && !showSingleProductPage && <MainPage />}
//       {showSingleProductPage && <SingleProductPage />}
//       <Footer />
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <Header />
      <SingleProductPage />
      <Footer />
    </div>
  );
}

export default App;
