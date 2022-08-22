import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQty: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;
      state.totalPrice = state.totalPrice + newItem.price;
      if (!existingItem) {
        state.items.push({
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
      if (existingItem.qty > 0) {
        state.items = state.items.filter((item) => existingItem.id !== item.id);
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending....",
        message: "Senging cart data.!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success.!",
          message: "Sent cart data successfully.!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error.!",
          message: "Senging cart data failed.!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
