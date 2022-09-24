import React, { useContext } from "react";
import Card from "../../UI/Card";
import classes from "./PartItems.module.css";
import PartItemsForm from "./PartItemsForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/cart-slice";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../Store/auth-context";

const PartItems = (props) => {
  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);

  const { id, img, name, description, price } = props;

  const itemPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = () => {
    if (!authCtx.isLoggedIn) {
      return alert("Please signin before add item to cart ");
    } else {
      dispatch(
        cartActions.addItemToCart({ id, img, name, description, price })
      );
    }
  };

  return (
    <div className={classes.rap}>
      <Card>
        <NavLink
          to={`/partdetails/${props.id}`}
        >
          <div className={classes.part}>
            <div className={classes.img_dev}>
              <img
                src={img}
                alt="product"
                width="100"
                height="100"
                className={classes.img}
              />
            </div>

            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{itemPrice}</div>
            <button>More Details</button>
          </div>
        </NavLink>

        <div className={classes.border}>
          <PartItemsForm onAddToCart={addToCartHandler} />
        </div>
      </Card>
    </div>
  );
};

export default PartItems;
