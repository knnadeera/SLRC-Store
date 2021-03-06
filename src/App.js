import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Layout/Contacts";
import Header from "./components/Layout/Header";
import User from "./components/Layout/User/User";
import Parts from "./components/Parts/parts";
import CartProvider from "./Store/CartProvider";

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
      {cartIsShown && <Cart onClose={cartCloseHandler} />}
      {userFormShown && <User onClose={userFormCloseHandler} />}
      <Contacts />
      <Header onShowCart={cartShownHandler} onShowUser={userFormShowHandler} />
      <main>
        <Parts />
      </main>
    </CartProvider>
  );
};

export default App;
