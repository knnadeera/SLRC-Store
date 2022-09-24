import React, { Fragment, Suspense, useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import LoadingSpinner from "../UI/LoadingSpinner";
import AuthContext from "../../Store/auth-context";
import { Link } from "react-router-dom";

const Checkout = React.lazy(() => import("./Checkout"));

const Cart = (props) => {
  const [isProceed, setIsProceed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQty = useSelector((state) => state.cart.totalQty);

  const authCtx = useContext(AuthContext);

  const dispatch = useDispatch();

  const cartTotalPrice = `$${totalPrice.toFixed(2)}`;

  const hasItems = cartItems.length > 0;

  const ProceedHandler = () => {
    setIsProceed(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${localStorage.localId}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
          orderTotalPrice: totalPrice,
          orderTotalQty: totalQty,
        }),
      }
    );
    dispatch(cartActions.clearCart());
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItem = (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <div className={classes.cart_items}>{!isProceed && cartItem}</div>
      {!isProceed && (
        <Fragment>
          <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{cartTotalPrice}</span>
          </div>
          <div className={classes.actions}>
            {!authCtx.isLoggedIn&&<Link to='/user' onClick={props.onClose}>Please Login to Proceed</Link>}
            <button onClick={props.onClose}>Close</button>
            {hasItems && authCtx.isLoggedIn && (
              <button className={classes.button} onClick={ProceedHandler}>
                Proceed to checkout
              </button>
            )}
          </div>
        </Fragment>
      )}
      {isProceed && (
        <Checkout
          onConfirm={submitOrderHandler}
          className={classes.checkout}
          onClose={props.onClose}
        />
      )}
    </Suspense>
  );

  const isSubmittingModalContent = <p>Sending order data....</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>
        Successfully sent the order! <br /> Order will be ship soon
        <br />
        Thank you..!
      </p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
