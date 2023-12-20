import React from "react";
import classes from "./footer.module.css";

import inst from "../../img/inst.svg";
import whatsapp from "../../img/ic-whatsapp.svg";
import Map from "./Map";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>Contact</p>
      <div className={classes.grid}>
        <div>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>
        <div>
          <p>Socials</p>

          <div className={classes.social}>
            <img src={inst} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>
        <div>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
        <div className={classes.map}>
          <Map />
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
