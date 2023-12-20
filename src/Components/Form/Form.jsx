import React from "react";
import classes from "./form.module.css";
import form from "../../img/formimg.svg";

const Form = () => {
  return (
    <section className={classes.backgroundGreen}>
      <h2>5% off on the first order</h2>
      <div className={classes.formImg}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={form} alt="imgForForm" />
        </div>
        <form className={classes.form}>
          <input type="text" id="name" placeholder="Name"></input>
          <input type="tel" id="phone" placeholder="Phone number"></input>
          <input type="email" id="email" placeholder="Email"></input>
          <button className={classes.button2} type="submit">
            Get a discount
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
