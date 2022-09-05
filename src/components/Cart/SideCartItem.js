import React, { Fragment } from "react";
import classes from "./SideCartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import { NavLink } from "react-router-dom";

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
      <li className={classes["sidecart-item"]}>
        <div className={classes.summary}>
          <img src={props.img} alt="product" width="50" height="50" />
          <NavLink to={`/partdetails/${props.id}`}>
            <h4>{props.name}</h4>
          </NavLink>
        </div>

        <div className={classes.item_body}>
          <div className={classes.item_total}>
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
        </div>
      </li>
      <button className={classes.remove} onClick={removeCartItemHandler}>
        x
      </button>
    </Fragment>
  );
};

export default SideCartItem;
