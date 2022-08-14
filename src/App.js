import React from "react";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Layout/Contacts";
import Header from "./components/Layout/Header";
import User from "./components/Layout/User/User";
import Parts from "./components/Parts/parts";
import CartProvider from "./Store/CartProvider";
import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./Store/ui-slice";

const App = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showUser = useSelector((state) => state.ui.userIsVisible);

  const cartShownHandler = () => {
    dispatch(uiActions.cartToggle());
  };

  const cartCloseHandler = () => {
    dispatch(uiActions.cartToggle());
  };

  const userFormShowHandler = () => {
    dispatch(uiActions.userToggle());
  };

  const userFormCloseHandler = () => {
    dispatch(uiActions.userToggle());
  };

  return (
    <CartProvider>
      <div className={classes.app}>
        {showCart && <Cart onClose={cartCloseHandler} />}
        {showUser && <User onClose={userFormCloseHandler} />}
        <Contacts />
        <Header
          onShowCart={cartShownHandler}
          onShowUser={userFormShowHandler}
        />
        <main>
          <Parts />
        </main>
      </div>
    </CartProvider>
  );
};

export default App;
