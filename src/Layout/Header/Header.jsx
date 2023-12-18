import React from "react";
import logo from "../../img/logoGreen.svg";
import icon from "../../img/icon.svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <img className={classes.logo} src={logo} alt="GreenLogo" />
      </div>
      <nav className={classes.nav}>
        <a href="#">Main Page</a>
        <a href="#">Categories</a>
        <a href="#">All products</a>
        <a href="#">All sales</a>
      </nav>
      <div>
        <img className={classes.bag} src={icon} alt="shopBag" />
      </div>
    </header>
  );
};

export default Header;
