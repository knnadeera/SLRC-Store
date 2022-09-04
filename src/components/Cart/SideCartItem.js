import React, { Fragment } from "react";
import classes from "./SideCartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";

const SideCartItem = (props) => {
  const dispatch = useDispatch();

  const { id, price, name } = props;

  const cartItemAddHandler = () => {
    dispatch(cartActions.addItemToCart({ id, price, name }));
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
      <li className={classes["sidecart-item"]}>
        <div className={classes.summary}>
          <img src={props.img} alt="product" width="50" height="50" /><h4>{props.name}</h4>
        </div>
        
        <div className={classes.total}>
          <span>
            Price :<span className={classes.price}>{itemPrice}</span>
          </span>
          <span>
            Qty :<span className={classes.qty}>x {props.qty}</span>
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

export default SideCartItem;
