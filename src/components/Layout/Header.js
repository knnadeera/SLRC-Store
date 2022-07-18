import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import SiteTitle from "./SiteTitle";
import classes from './Header.module.css'


const Header = (props) => {
  return (
    <div className={classes.header}>
    <SiteTitle />
    <HeaderCartButton onShowCart={props.onShowCart} onShowUser={props.onShowUser}/>
    </div>
  );
};

export default Header;
