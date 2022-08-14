import React from "react";
import Card from "../../UI/Card";
import classes from "./PartItems.module.css";
import PartItemsForm from "./PartItemsForm";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/cart-slice";

const PartItems = (props) => {
  const itemPrice = `$${props.price.toFixed(2)}`;

  const dispatch = useDispatch();

  const { id, img, name, description, price } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({id, img, name, description, price})
    );
  };

  return (
    <div className={classes.rap}>
      <Card>
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
        </div>
        <div className={classes.border}>
          <PartItemsForm onAddToCart={addToCartHandler} />
        </div>
      </Card>
    </div>
  );
};

export default PartItems;
