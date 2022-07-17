import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  price: 0,
  addItem: (item) => {},
  remove: (id) => {},
  itemRemove: (id) => {},
});

export default CartContext;
