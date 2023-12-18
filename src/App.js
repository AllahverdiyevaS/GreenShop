import React from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import MainPage from "../src/Pages/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
