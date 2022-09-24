import React from "react";
import classes from './OrderedItemList.module.css'

const OrderedItemList = (props) => {
  const { name, img, qty, totalPrice } = props;

  const itemTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className={classes.orderedItemList}>
      <h4>{name}</h4>
      <div className={classes.orderedItemBody}>
        <img src={img} alt="product" width="70" height="70" />
        <div>
          <h6>Qty: {qty}</h6>
          <h6>Item Total Price: {itemTotalPrice}</h6>
        </div>
      </div>
    </div>
  );
};

export default OrderedItemList;

