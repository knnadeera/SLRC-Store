import React, { Fragment, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import useHttp from "../../components/hooks/use-http";
import { getSinglePart } from "../../components/lib/api";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import classes from "./PartDetails.module.css";
import SideCart from "../../components/Cart/SideCart";

const PartDetails = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { partId } = params;

  const { sendRequest, data: loadedPart } = useHttp(getSinglePart, true);

  useEffect(() => {
    sendRequest(partId);
  }, [sendRequest, partId]);

  if (!loadedPart) {
    return <p>No details founded</p>;
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

  console.log(spec.a);

  return (
    <Fragment>
      <div className={classes.part_details}>
        <div className={classes.details}>
          <div>
            <h1>{loadedPart.name}</h1>
            <NavLink to="/" activeClassName={classes.close}>
              X
            </NavLink>
          </div>

          <img
            src={loadedPart.img}
            alt="product"
            width="300"
            height="300"
            className={classes.img}
          />
          <div>
            <h2>Price: {itemPrice}</h2>{" "}
            <button className={classes.btn} onClick={addToCartHandler}>Add to Cart</button>
          </div>
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
        </div>
        <div className={classes.side}>
          <SideCart />
        </div>
      </div>
    </Fragment>
  );
};

export default PartDetails;
