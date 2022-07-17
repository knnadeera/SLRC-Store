import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const totalPriceOfCartItems = `$${cartCtx.totalAmount.toFixed(2)}`;

  const { items } = cartCtx;

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
        <span className={classes.badge}>{numberOfCartItems}</span>
        <AiOutlineShoppingCart className={classes.icon} />
        <span className={classes.badge}>{totalPriceOfCartItems}</span>
      </button>
      <button className={classes["user-button"]} onClick={props.onShowUser}>
        <BiUserCircle className={classes.icon} />
      </button>
    </div>
  );
};

export default HeaderCartButton;
