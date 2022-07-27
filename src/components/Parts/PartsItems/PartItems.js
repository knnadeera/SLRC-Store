import React, { useContext } from "react";
import Card from "../../UI/Card";
import classes from "./PartItems.module.css";
import PartItemsForm from "./PartItemsForm";
import CartContext from "../../../Store/cart-context";

const PartItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      img: props.img,
      des: props.description,
      spec: props.specifications,
    });
  };

  return (
    <div className={classes.rap}>
      <Card>
        <div className={classes.part}>
          <img src={props.img} alt="product" width="100" height="100" />
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes.border}>
        <PartItemsForm onAddToCart={addToCartHandler} /></div>
      </Card>
    </div>
  );
};

export default PartItems;
