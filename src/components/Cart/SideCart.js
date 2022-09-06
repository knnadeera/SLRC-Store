import React, { Fragment, useState } from "react";
import classes from "./SideCart.module.css";
import SideCartItem from "./SideCartItem";
import Checkout from "./Checkout";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import Modal from "../UI/Modal";

const SideCart = (props) => {
  const [isProceed, setIsProceed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQty = useSelector((state) => state.cart.totalQty);

  const dispatch = useDispatch();

  const cartTotalPrice = `$${totalPrice.toFixed(2)}`;

  const hasItems = cartItems.length > 0;

  const ProceedHandler = () => {
    setIsProceed(true);
  };

  const closeHandler = () => {
    setIsProceed(false);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
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

  const didSubmiCloseHandler = () => {
    setDidSubmit(false);
    setIsSubmitting(false);
    setIsProceed(false);
  };

  const cartItem = (
    <ul className={classes.ul}>
      {cartItems.map((item) => (
        <SideCartItem
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
    <Fragment>
      <div className={classes.sidecart}>
        <div className={classes.cart_items}>{!isProceed && cartItem}</div>
        {!isProceed && (
          <Fragment>
            <div>
              <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{cartTotalPrice}</span>
              </div>
              <div className={classes.actions}>
                {hasItems && (
                  <button className={classes.button} onClick={ProceedHandler}>
                    Proceed to checkout
                  </button>
                )}
              </div>
            </div>
          </Fragment>
        )}
      </div>

      {isProceed && (
        // <Cart onClose={closeHandler}/>
        <Modal>
          <Checkout
            onConfirm={submitOrderHandler}
            className={classes.checkout}
            onClose={closeHandler}
          />
        </Modal>
      )}
    </Fragment>
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
        <button
          className={classes["button--alt"]}
          onClick={didSubmiCloseHandler}
        >
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div className={classes.rap}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </div>
    </Fragment>
  );
};

export default SideCart;
