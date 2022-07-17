import React, { Fragment } from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import classes from "./Contacts.module.css";

const Contacts = (props) => {
  return (
    <Fragment>
      <div className={classes.contacts}>
        <p className={classes["contact-items"]}>
          <IoCallOutline />
          <a href="+94771360261" className={classes["contact-item"]}>
            +94 77 136 0261
          </a>
        </p>
        <p className={classes["contact-items"]}>
          <IoMailOutline />
          <a
            href="mailto:knnadeera1@gmail.com"
            className={classes["contact-item"]}
          >
            knnadeera1@gmail.com
          </a>
        </p>
        <p className={classes["contact-items"]}>
          <AiFillFacebook className={classes.icon} />
          <a
            href="https://www.facebook.com/k.n.nadeera"
            target="_blank"
            rel="noreferrer"
            className={classes["contact-item"]}
          >
            Nisala Nadeera
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Contacts;
