import React, { Fragment } from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, price, name } = props;

  const cartItemAddHandler = () => {
    dispatch(cartActions.addItemToCart({ id, price, name }));
    console.log(cartActions.addItemToCart);
  };

  const cartItemRemoveHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const removeCartItemHandler = () => {
    dispatch(cartActions.removeAllItemFromCart(id));
  };

  const itemPrice = `$${props.price.toFixed(2)}`;

  return (
    <Fragment>
      <button className={classes.remove} onClick={removeCartItemHandler}>
        x
      </button>
      <li className={classes["cart-item"]}>
        <div>
          <h2>{props.name}</h2>

          <div className={classes.summary}>
            <img src={props.img} alt="product" width="70" height="70" />
          </div>
        </div>
        <div className={classes.total}>
          <span>
            Price :<span className={classes.price}>{itemPrice}</span>
          </span>
          <span>
            Amount :<span className={classes.amount}>x {props.qty}</span>
          </span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartItemRemoveHandler}>−</button>
          <button onClick={cartItemAddHandler}>+</button>
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
