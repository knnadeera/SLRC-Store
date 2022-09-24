import React, { Suspense, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getIncludes, getSinglePart } from "../../lib/api";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import classes from "./PartDetails.module.css";
import SideCart from "../../components/Cart/SideCart";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import Includes from "./Inludes";
import Specs from "./Specs";
import AuthContext from "../../Store/auth-context";

const Reviews = React.lazy(() => import("../Reviews/Reviews"));

const PartDetails = (props) => {
  const [showReviews, isShowReviews] = useState(false);
  const [showDescription, isShowDescription] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const { partId } = params;

  const authCtx = useContext(AuthContext);

  const { sendRequest, data: loadedPart } = useHttp(
    getSinglePart,
    getIncludes,
    true
  );

  useEffect(() => {
    sendRequest(partId);
  }, [sendRequest, partId]);

  if (!loadedPart) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  const addToCartHandler = () => {
    if (!authCtx.isLoggedIn) {
      return alert("Please signin before add item to cart ");
    } else {
      dispatch(
        cartActions.addItemToCart({
          id: loadedPart.id,
          img: loadedPart.img,
          name: loadedPart.name,
          description: loadedPart.description,
          price: loadedPart.price,
        })
      );
    }
  };
  const itemPrice = `$${loadedPart.price.toFixed(2)}`;

  const reviewShowHandler = () => {
    isShowReviews(true);
    isShowDescription(false);
  };

  const descriptionShowHandler = () => {
    isShowDescription(true);
    isShowReviews(false);
  };

  //part Detail section

  const description = (
    <section>
      <p>{loadedPart.fullDescription}</p>
      <h3>Specifications:</h3>
      <ul>
        <Specs />
      </ul>
      <h3>Includes:</h3>
      <ul>
        <Includes />
      </ul>
    </section>
  );

  const details = (
    <div className={classes.details}>
      <div className={classes["partdetails-title"]}>
        <h1>{loadedPart.name}</h1>
      </div>
      <div className={classes.upper_body}>
        <img
          src={loadedPart.img}
          alt="product"
          width="300"
          height="300"
          className={classes.img}
        />
        <div>
          <h2>Price: {itemPrice}</h2>
          <button className={classes.btn} onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
      <section className={classes.tabs}>
        <h4 onClick={descriptionShowHandler}>Description</h4>
        <h4 onClick={reviewShowHandler}>User Reviews</h4>
      </section>
      {showDescription && description}
      <div className={classes.reviews}>{showReviews && <Reviews />}</div>
    </div>
  );

  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <div className={classes.part_details_layout}>
        {details}
        <div className={classes.side}>
          <p>cart</p>
          <SideCart />
        </div>
      </div>
    </Suspense>
  );
};

export default PartDetails;
