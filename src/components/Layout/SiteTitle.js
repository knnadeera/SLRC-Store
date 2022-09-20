import React from "react";
import classes from "./SiteTitle.module.css";
import { TbDrone } from "react-icons/tb";
import slrclogo from "../../Assets/slrclogo.jpg";
import { NavLink } from "react-router-dom";

const SiteTitle = (props) => {
  return (
    <div className={classes["site-title"]}>
      <h1 className={classes["site-title__h1"]}>
        <img src={slrclogo} alt="logo" className={classes.slrclogo} />
        <NavLink
          to="/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          SL RC Store
        </NavLink>
      </h1>
      <p className={classes["site-description"]}>
        <TbDrone /> Doesn't Matter Your Mission, We Make it Going
      </p>
    </div>
  );
};

export default SiteTitle;
