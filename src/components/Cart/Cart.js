import React, { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";

const Cart = (props) => {
  const [isProceed, setIsProceed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const cartTotalPrice = `$${totalPrice.toFixed(2)}`;

  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    // cartCtx.remove(id);
  };

  const removeCartItemHandler = (id) => {
    // cartCtx.itemRemove(id);
  };

  const cartItemAddHandler = (item) => {
    // cartCtx.addItem({ ...item, amount: 1 });
  };

  const ProceedHandler = () => {
    setIsProceed(true);
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
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    dispatch(cartActions.clearCart);
  };

  const cartItem = (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          qty={item.qty}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onItemRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <Fragment>
      <div className={classes.cart_items}>{!isProceed && cartItem}</div>
      {!isProceed && (
        <Fragment>
          <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{cartTotalPrice}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={props.onClose}>Close</button>
            {hasItems && (
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
