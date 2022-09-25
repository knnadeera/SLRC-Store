import React from "react";
import ReviewItem from "./ReviewItem";
import classes from "./ReviewsList.module.css";

const ReviewsList = (props) => {
  return (
    <ul className={classes.reviews}>
      {props.reviews.map((review) => (
        <ReviewItem
          key={review.id}
          userName={review.userName}
          date={review.date}
          text={review.text}
        />
      ))}
    </ul>
  );
};

export default ReviewsList;