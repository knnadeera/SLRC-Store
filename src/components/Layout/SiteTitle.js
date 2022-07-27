import React from "react";
import classes from "./SiteTitle.module.css";
import { TbDrone } from "react-icons/tb";
import slrclogo from "../../Assets/slrclogo.jpg";

const SiteTitle = (props) => {
  return (
    <div className={classes["site-title"]}>
      <h1 className={classes["site-title__h1"]}>
        <a
          href="https://slrcstore.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes["site-title__a"]}
        >
          <img src={slrclogo} alt="logo" className={classes.slrclogo} />
          SL RC Store
        </a>
      </h1>
      <p className={classes["site-description"]}>
        <TbDrone /> Doesn't Matter Your Mission, We Make it Going
      </p>
    </div>
  );
};

export default SiteTitle;
