import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllReviews } from "../../lib/api";

import classes from "./Reviews.module.css";
import ReviewsList from "./ReviewsList";
import NewReviewForm from "./NewReviewForm";

const Reviews = () => {
  const [isAddingReview, setIsAddingReview] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedReviews } = useHttp(getAllReviews);

  const { partId } = params;

  useEffect(() => {
    sendRequest(partId);
  }, [partId, sendRequest]);

  const startAddReviewHandler = () => {
    setIsAddingReview(true);
  };

  const addedReviewHandler = useCallback(() => {
    sendRequest(partId);
    setIsAddingReview(false);
  }, [sendRequest, partId]);

  let reviews;

  if (status === "completed" && loadedReviews && loadedReviews.length > 0) {
    reviews = <ReviewsList reviews={loadedReviews} />;
  }

  return (
    <section className={classes.reviews}>
      <section >
        <h2>User Reviews</h2>
        {!isAddingReview && (
          <button className="btn" onClick={startAddReviewHandler}>
            Add a Review
          </button>
        )}
      </section>
      {isAddingReview && (
        <NewReviewForm partId={partId} onAddedReview={addedReviewHandler} />
      )}
      {reviews}
    </section>
  );
};

export default Reviews;
