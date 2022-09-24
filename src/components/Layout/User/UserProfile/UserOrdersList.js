import React, { Fragment, useState } from "react";
import Modal from "../../../UI/Modal";
import OrderedItemList from "./OrderedItemList";
import classes from "./UserOrdersList.module.css";

const MyOrdersList = (props) => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [showOrderItems, setShowOrderItems] = useState(false);

  const orderTotalPrice = `$${props.orderTotalPrice.toFixed(2)}`;

  const showOrderItemsHandler = () => {
    const fetchOrderItemData = async () => {
      const response = await fetch(
        `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${localStorage.localId}/${props.id}.json`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch your orders.");
      }

      setOrderedItems(data.orderedItems);
      setShowOrderItems(true);
    };
    fetchOrderItemData();
  };

  const orderedItemList = orderedItems.map((item) => (
    <OrderedItemList
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.img}
      totalPrice={item.totalPrice}
      qty={item.qty}
    />
  ));

  const closeHandler = () => {
    setShowOrderItems(false);
  };

  return (
    <Fragment>
      {!showOrderItems && (
        <div className={classes.order} onClick={showOrderItemsHandler}>
          <h3>Order Id : {props.id}</h3>
          <div className={classes.list_body}>
            <h4>TotalQty : {props.orderTotalQty}</h4>
            <h4>TotalPrice : {orderTotalPrice}</h4>
          </div>
        </div>
      )}
      {showOrderItems && (
        <Modal onClose={closeHandler}>
          <div className={classes.orderedItem_head}>
            <p>Order Id : {props.id}</p>
            <button onClick={closeHandler}>x</button>
          </div>
          {orderedItemList}
          <h4 className={classes.ordereditem_footer}>Total Order Price: {orderTotalPrice}</h4>
        </Modal>
      )}
    </Fragment>
  );
};

export default MyOrdersList;
