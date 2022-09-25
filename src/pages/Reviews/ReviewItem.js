import React from "react";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.review_head}>
        <h4>{props.userName}</h4>
        <h6>{props.date}</h6>
      </div>
      <h5>{props.text}</h5>
    </div>
  );
};

export default ReviewItem;
