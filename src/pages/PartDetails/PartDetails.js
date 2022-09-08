import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSinglePart } from "../../lib/api";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import classes from "./PartDetails.module.css";
import SideCart from "../../components/Cart/SideCart";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const Reviews = React.lazy(()=>import("../Reviews/Reviews"))

const PartDetails = (props) => {
  const [showReviews, isShowReviews] = useState(false);
  const [showDescription, isShowDescription] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const { partId } = params;

  const { sendRequest, data: loadedPart } = useHttp(getSinglePart, true);

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
    dispatch(
      cartActions.addItemToCart({
        id: loadedPart.id,
        img: loadedPart.img,
        name: loadedPart.name,
        description: loadedPart.description,
        price: loadedPart.price,
      })
    );
  };
  const itemPrice = `$${loadedPart.price.toFixed(2)}`;

  const spec = loadedPart.specifications;
  const includes = loadedPart.includes;

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
        {spec.a && <li>{spec.a}</li>}
        {spec.b && <li>{spec.b}</li>}
        {spec.c && <li>{spec.c}</li>}
        {spec.d && <li>{spec.d}</li>}
        {spec.e && <li>{spec.e}</li>}
        {spec.f && <li>{spec.f}</li>}
        {spec.g && <li>{spec.g}</li>}
        {spec.h && <li>{spec.h}</li>}
        {spec.i && <li>{spec.i}</li>}
        {spec.j && <li>{spec.j}</li>}
        {spec.k && <li>{spec.k}</li>}
        {spec.l && <li>{spec.l}</li>}
        {spec.m && <li>{spec.m}</li>}
        {spec.n && <li>{spec.n}</li>}
        {spec.o && <li>{spec.o}</li>}
        {spec.p && <li>{spec.p}</li>}
        {spec.q && <li>{spec.q}</li>}
        {spec.r && <li>{spec.r}</li>}
        {spec.s && <li>{spec.s}</li>}
        {spec.t && <li>{spec.t}</li>}
        {spec.v && <li>{spec.v}</li>}
        {spec.u && <li>{spec.u}</li>}
        {spec.w && <li>{spec.w}</li>}
        {spec.x && <li>{spec.x}</li>}
        {spec.y && <li>{spec.y}</li>}
        {spec.z && <li>{spec.z}</li>}
      </ul>
      <h3>Includes:</h3>
      <ul>
        {includes.a && <li>{includes.a}</li>}
        {includes.b && <li>{includes.b}</li>}
        {includes.c && <li>{includes.c}</li>}
        {includes.d && <li>{includes.d}</li>}
        {includes.e && <li>{includes.e}</li>}
        {includes.f && <li>{includes.f}</li>}
        {includes.g && <li>{includes.g}</li>}
        {includes.h && <li>{includes.h}</li>}
        {includes.i && <li>{includes.i}</li>}
        {includes.j && <li>{includes.j}</li>}
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
