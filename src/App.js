import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Layout/Contacts";
import Header from "./components/Layout/Header";
import User from "./components/Layout/User/User";
import Parts from "./components/Parts/parts";
import CartProvider from "./Store/CartProvider";
import classes from './App.module.css'

const App = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [userFormShown, setUserFormShown] = useState(false);

  const cartShownHandler = () => {
    setCartIsShown(true);
  };

  const cartCloseHandler = () => {
    setCartIsShown(false);
  };

  const userFormShowHandler = () => {
    setUserFormShown(true);
  };

  const userFormCloseHandler = () => {
    setUserFormShown(false);
  };

  return (
    <CartProvider>
      <div className={classes.app}>
        {cartIsShown && <Cart onClose={cartCloseHandler} />}
        {userFormShown && <User onClose={userFormCloseHandler} />}
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
