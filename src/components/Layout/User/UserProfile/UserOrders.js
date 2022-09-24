import React, { useEffect, useState } from "react";
import UserOrdersList from "./UserOrdersList";
import classes from "./UserOrders.module.css";

const MyOrders = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await fetch(
        `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${localStorage.localId}.json`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch your orders.");
      }

      const loadedOrders = [];

      for (const key in data) {
        loadedOrders.push({
          key: key,
          id: key,
          orderTotalPrice: data[key].orderTotalPrice,
          orderTotalQty: data[key].orderTotalQty,
          a: data[key].orderedItems,
        });
      }
      setOrders(loadedOrders);
    };
    fetchOrderData();
  }, []);

  const ordersList = orders.map((orders) => (
    <UserOrdersList
      key={orders.id}
      id={orders.id}
      orderTotalPrice={orders.orderTotalPrice}
      orderTotalQty={orders.orderTotalQty}
    />
  ));

  return (
    <div>
      <div className={classes.order_rap}>{ordersList}</div>
      
    </div>
  );
};

export default MyOrders;
