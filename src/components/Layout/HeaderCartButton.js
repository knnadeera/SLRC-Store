import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import classes from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartQty = useSelector((state) => state.cart.totalQty);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const totalPriceOfCartItems = `$${cartPrice.toFixed(2)}`;
  const items = useSelector((state) => state.cart.items);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className={classes.header}>
      <button className={btnClasses} onClick={props.onShowCart}>
        <div className={classes.badge}>
          {cartQty}
          <AiOutlineShoppingCart className={classes.cart_icon} />
          <span className={classes.badge}>{totalPriceOfCartItems}</span>
        </div>
      </button>
      <Link to="/user">
        <button className={classes["user-button"]} onClick={props.onShowUser}>
          <BiUserCircle className={classes.user_icon} />
        </button>
      </Link>
    </div>
  );
};

export default HeaderCartButton;
