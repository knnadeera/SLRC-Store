import React, { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import { addReview } from "../../lib/api";


import classes from "./NewReviewForm.module.css";

const NewReviewForm = (props) => {
  const reviewTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addReview);

  const { onAddedReview } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedReview();
    }
  }, [status, error, onAddedReview]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = reviewTextRef.current.value;

    // optional: Could validate here

    sendRequest({ reviewData: { text: enteredText }, quoteId: props.quoteId});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="review">Your Review</label>
        <textarea id="review" rows="5" ref={reviewTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Review</button>
      </div>
    </form>
  );
};

export default NewReviewForm;
