import React from "react";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default ReviewItem;
