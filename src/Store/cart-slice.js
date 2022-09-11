import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQty: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQty = action.payload.totalQty;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;
      state.totalPrice = state.totalPrice + newItem.price;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          a:newItem.a,
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          price: newItem.price,
          qty: 1,
          totalQty: newItem.qty,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQty--;
      state.totalPrice = state.totalPrice - existingItem.price;
      state.changed = true;
      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeAllItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice = state.totalPrice - existingItem.totalPrice;
      state.totalQty = state.totalQty - existingItem.qty;
      state.changed = true;
      if (existingItem.qty > 0) {
        state.items = state.items.filter((item) => existingItem.id !== item.id);
      }
    },
    clearCart(state){
      state.items = [];
      state.totalPrice = 0;
      state.totalQty = 0;
      state.changed = true;
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
