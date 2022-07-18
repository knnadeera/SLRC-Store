import React, { Fragment } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Fragment>
      <button className={classes.remove} onClick={props.onItemRemove}>
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
            Item Total Price :<span className={classes.price}>{price}</span>
          </span>
          <span>
            Item Total Amount :
            <span className={classes.amount}>x {props.amount}</span>
          </span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
