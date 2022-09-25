import { uiActions } from "../Store/ui-slice";
import { cartActions } from "../Store/cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${localStorage.getItem(
          "localId"
        )}.json`
      );

      if (!response.ok) {
        throw new Error("Fatching cart data failed.!");
      }

      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalPrice: cartData.totalPrice,
          totalQty: cartData.totalQty,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error.!",
          message: "Fatching cart data failed.!",
        })
      );
    }
  };
};

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
        `https://sl-rc-store-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${localStorage.getItem(
          "localId"
        )}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalPrice: cart.totalPrice,
            totalQty: cart.totalQty,
          }),
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